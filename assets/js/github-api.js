/* =========================================================
   github-api.js — live GitHub data with graceful fallback.
   ========================================================= */

const GitHubData = (() => {
  const USERNAME = SITE_DATA.github.username;
  const CACHE_KEY = "cg_github_cache_v1";
  const CACHE_TTL = 1000 * 60 * 60 * 6; // 6 hours

  function readCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (Date.now() - parsed.savedAt > CACHE_TTL) return null;
      return parsed.data;
    } catch {
      return null;
    }
  }

  function writeCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
    } catch {
      /* storage unavailable — ignore */
    }
  }

  async function fetchLive() {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
    ]);

    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

    const data = {
      publicRepos: user.public_repos ?? null,
      followers: user.followers ?? null,
      following: user.following ?? null,
      totalStars,
      repos: repos
        .filter((r) => !r.fork)
        .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
        .slice(0, 6)
        .map((r) => ({
          name: r.name,
          language: r.language,
          description: r.description,
          url: r.html_url,
          stars: r.stargazers_count,
        })),
      source: "live",
    };

    writeCache(data);
    return data;
  }

  async function getData() {
    const cached = readCache();
    try {
      const live = await fetchLive();
      return live;
    } catch (err) {
      if (cached) return { ...cached, source: "cache" };
      return {
        publicRepos: 43,
        followers: 11,
        following: 5,
        totalStars: 29,
        repos: SITE_DATA.codeWorkFallback.map((r) => ({
          name: r.name,
          language: r.language,
          description: r.description,
          url: r.url,
          stars: null,
        })),
        source: "fallback",
      };
    }
  }

  return { getData };
})();
