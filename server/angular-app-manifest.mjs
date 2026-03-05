
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15521, hash: '707dce88c7442b3b459681ce17cf74aff893816e6426c542c869e685601e82cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: 'f0e1f1d2ae3f33d896ed37ecb485813ae2d41bd89ac55c87fb0181a8f96f5ad8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 104504, hash: 'aa0c354151e49f4873c9289c0289781e0db64ecef0a7f136b004efacdc9956a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IQ2K6V4L.css': {size: 36405, hash: 'jAYjgWxIVhY', text: () => import('./assets-chunks/styles-IQ2K6V4L_css.mjs').then(m => m.default)}
  },
};
