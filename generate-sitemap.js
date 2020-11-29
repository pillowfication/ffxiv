const fs = require('fs')
const path = require('path')
const globby = require('globby')

const SITEMAP_FILE = path.resolve(__dirname, './public/sitemap.xml')

;(async () => {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/{_*,404}.js',
    '!pages/api'
  ])

  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages.map((page) => {
      const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
      const route = path === '/index' ? '' : path
      return (
        '  <url>\n' +
        `    <loc>${'https://ffxiv.pf-n.co' + route}</loc>\n` +
        '  </url>\n'
      )
    }).join('') +
    '</urlset>\n'

  fs.writeFileSync(SITEMAP_FILE, sitemap)
})()
