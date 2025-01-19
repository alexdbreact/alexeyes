module.exports = {
    siteUrl: 'http://192.168.3.15:3000/', // Replace with your site URL
    generateRobotsTxt: true, // Automatically generate robots.txt
    exclude: ['/private-page'], // Pages to exclude from the sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  