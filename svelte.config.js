import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      // write both pages and assets to `docs/`
      pages: 'docs',
      assets: 'docs',
      // set a fallback only if you need SPA-style routing, otherwise leave undefined
      // fallback: 'index.html'
      precompress: false,
      strict: true
    }),

    // for GitHub Pages or any static hosting, make all paths relative
    paths: {
      relative: true
      // if hosting at /your-repo-name instead of a custom domain,
      // use: base: dev ? '' : '/your-repo-name'
    },

    prerender: {
      entries: ['*'] // export the whole site
    }
  }
};
