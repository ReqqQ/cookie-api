const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-9acdd212.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "layouts/default.vue",
      "pages/index.vue",
      "pages/search.vue",
      "components/image/index.vue",
      "components/page-zone/employess.vue",
      "components/page-zone/index.vue",
      "components/page-zone/posts.vue",
      "components/sidebar/Left.vue",
      "components/sidebar/Right.vue",
      "components/page-posts/layout/advanced.vue",
      "components/page-posts/layout/simple.vue",
      "components/page-posts/sector/header.vue",
      "components/page-posts/sector/stats.vue"
    ]
  },
  "components/image/index.vue": {
    "file": "index-73838f25.mjs",
    "src": "components/image/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/index.cacbf2c9.css"
    ]
  },
  "components/page-zone/employess.vue": {
    "file": "employess-87f082a5.mjs",
    "src": "components/page-zone/employess.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/image/index.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/page-zone/index.vue": {
    "file": "index-af2fe79e.mjs",
    "src": "components/page-zone/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/page-zone/posts.vue",
      "components/page-zone/employess.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/image/index.vue"
    ]
  },
  "components/page-zone/posts.vue": {
    "file": "posts-487dd537.mjs",
    "src": "components/page-zone/posts.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "components/sidebar/Left.vue": {
    "file": "Left-f15de676.mjs",
    "src": "components/sidebar/Left.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/image/index.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/Left.a0bcc1a7.css"
    ]
  },
  "components/sidebar/Right.vue": {
    "file": "Right-2c60551a.mjs",
    "src": "components/sidebar/Right.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/image/index.vue",
      "components/page-zone/index.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/page-zone/posts.vue",
      "components/page-zone/employess.vue"
    ],
    "css": [
      "assets/Right.9c9173b4.css"
    ]
  },
  "components/page-posts/layout/advanced.vue": {
    "file": "advanced-866fd9b1.mjs",
    "src": "components/page-posts/layout/advanced.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/page-posts/sector/header.vue",
      "components/page-posts/sector/stats.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/advanced.810090f0.css"
    ]
  },
  "components/page-posts/sector/header.vue": {
    "file": "header-55c8e371.mjs",
    "src": "components/page-posts/sector/header.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/header.a5101bff.css"
    ]
  },
  "components/page-posts/sector/stats.vue": {
    "file": "stats-9daf0057.mjs",
    "src": "components/page-posts/sector/stats.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/stats.c8e07dbd.css"
    ]
  },
  "components/page-posts/layout/simple.vue": {
    "file": "simple-f8c69ebe.mjs",
    "src": "components/page-posts/layout/simple.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/page-posts/sector/header.vue",
      "components/page-posts/sector/stats.vue",
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-1c3fa8a5.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/page-zone/index.vue",
      "components/sidebar/Right.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/page-zone/posts.vue",
      "components/page-zone/employess.vue",
      "components/image/index.vue"
    ]
  },
  "pages/search.vue": {
    "file": "search-8f7154da.mjs",
    "src": "pages/search.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "layouts/default.vue": {
    "file": "default-37932e24.mjs",
    "src": "layouts/default.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/sidebar/Left.vue",
      "node_modules/nuxt3/dist/app/entry.mjs",
      "components/image/index.vue"
    ],
    "css": [
      "assets/default.d990eee3.css"
    ]
  }
};

export { client_manifest as default };
