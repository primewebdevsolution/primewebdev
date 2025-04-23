/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://primewebdev.in',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://primewebdev.com/server-sitemap.xml',
      ],
    },
  };
  