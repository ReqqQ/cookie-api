import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/advanced-866fd9b1.mjs": {
    "type": "application/javascript",
    "etag": "\"554-D7ysfDOiiPBktT5osOy2D5u+sJo\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/advanced-866fd9b1.mjs"
  },
  "/_nuxt/default-37932e24.mjs": {
    "type": "application/javascript",
    "etag": "\"1f0-su7SVI+iw95cKBv9UsHXF64OENg\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/default-37932e24.mjs"
  },
  "/_nuxt/employess-87f082a5.mjs": {
    "type": "application/javascript",
    "etag": "\"3db-0DtsrN6CjFKPl0nLqG8TJN4fc5M\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/employess-87f082a5.mjs"
  },
  "/_nuxt/entry-9acdd212.mjs": {
    "type": "application/javascript",
    "etag": "\"1afb0-+w50rT7otTjiAY9ldn/QGXUUiUk\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/entry-9acdd212.mjs"
  },
  "/_nuxt/header-55c8e371.mjs": {
    "type": "application/javascript",
    "etag": "\"4ba-mvX0wWQ7NwXZUxKE1GFhqHgxyfc\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/header-55c8e371.mjs"
  },
  "/_nuxt/index-1c3fa8a5.mjs": {
    "type": "application/javascript",
    "etag": "\"3ce-i+Gw9utP8lOy1q0s/+k3EO+NrNA\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/index-1c3fa8a5.mjs"
  },
  "/_nuxt/index-73838f25.mjs": {
    "type": "application/javascript",
    "etag": "\"2c8-Tv9bTkyK3JMRf7FRPHx2d9eO+4w\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/index-73838f25.mjs"
  },
  "/_nuxt/index-af2fe79e.mjs": {
    "type": "application/javascript",
    "etag": "\"39d-hgEY06UwbNDzgaoPUbMM43UiL0w\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/index-af2fe79e.mjs"
  },
  "/_nuxt/Left-f15de676.mjs": {
    "type": "application/javascript",
    "etag": "\"419-NNZyIrA9YEtzqP16ZelK9JHU1os\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/Left-f15de676.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1286-i1fdcpO3X9M4yRzC6hVFJrL/cT0\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/posts-487dd537.mjs": {
    "type": "application/javascript",
    "etag": "\"1b7-nkjxU4DAxWMA6ry2CVOREeBgUJ4\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/posts-487dd537.mjs"
  },
  "/_nuxt/Right-2c60551a.mjs": {
    "type": "application/javascript",
    "etag": "\"541-3sjHSamTh4H3MQ2QcKzmk9lwPUI\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/Right-2c60551a.mjs"
  },
  "/_nuxt/search-8f7154da.mjs": {
    "type": "application/javascript",
    "etag": "\"a9-X8KkOwHNKRjbOg7p/nSfYQGz80Y\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/search-8f7154da.mjs"
  },
  "/_nuxt/simple-f8c69ebe.mjs": {
    "type": "application/javascript",
    "etag": "\"340-D5QvU/MnFyAa4794fVElmRie7Oo\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/simple-f8c69ebe.mjs"
  },
  "/_nuxt/stats-9daf0057.mjs": {
    "type": "application/javascript",
    "etag": "\"3ae-WZ0O4yamYiwRREdPnRIF8FRPfSs\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/stats-9daf0057.mjs"
  },
  "/_nuxt/assets/advanced.810090f0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d5-VJpXnjir7HDPj+hVjz48efgXbwY\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/advanced.810090f0.css"
  },
  "/_nuxt/assets/default.d990eee3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"99-Rh1WV29BeNNy9qhX7MsLcxIyebA\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/default.d990eee3.css"
  },
  "/_nuxt/assets/header.a5101bff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c-BgQ25iT/HNBf67V9+QTBAzbKtw0\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/header.a5101bff.css"
  },
  "/_nuxt/assets/index.cacbf2c9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"62-jw32OOBW75/QgAAPPekfEsEp0CE\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/index.cacbf2c9.css"
  },
  "/_nuxt/assets/Left.a0bcc1a7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"261-YkGhKGeUSDcIzYdzlE9aSGbzhIM\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/Left.a0bcc1a7.css"
  },
  "/_nuxt/assets/Right.9c9173b4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c-pl0qyjrjDu4bhWGgvl0FqO4WtQw\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/Right.9c9173b4.css"
  },
  "/_nuxt/assets/stats.c8e07dbd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b7-DaANzfGZaeB4yrTGLLtjM9G93AA\"",
    "mtime": "2021-12-22T20:01:34.528Z",
    "path": "../public/_nuxt/assets/stats.c8e07dbd.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "E:/bip-spa/dist" + "/" + "1640203292";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
