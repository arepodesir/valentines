import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_6cs0tMQa.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/","adapterName":"","routes":[{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/create/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/create","isIndex":false,"type":"page","pattern":"^\\/create\\/?$","segments":[[{"content":"create","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/create.astro","pathname":"/create","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/architecture/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/architecture","isIndex":false,"type":"page","pattern":"^\\/docs\\/architecture\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"architecture","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/architecture.astro","pathname":"/docs/architecture","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/artists/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/artists","isIndex":false,"type":"page","pattern":"^\\/docs\\/artists\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"artists","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/artists.astro","pathname":"/docs/artists","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/business/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/business","isIndex":false,"type":"page","pattern":"^\\/docs\\/business\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"business","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/business.astro","pathname":"/docs/business","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/roadmap/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/roadmap","isIndex":false,"type":"page","pattern":"^\\/docs\\/roadmap\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"roadmap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/roadmap.astro","pathname":"/docs/roadmap","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/schema/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/schema","isIndex":false,"type":"page","pattern":"^\\/docs\\/schema\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"schema","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs/schema.astro","pathname":"/docs/schema","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/architecture.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/artists.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/business.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/roadmap.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/create.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/docs/schema.astro",{"propagation":"none","containsHead":true}],["/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/create@_@astro":"pages/create.astro.mjs","\u0000@astro-page:src/pages/docs/architecture@_@astro":"pages/docs/architecture.astro.mjs","\u0000@astro-page:src/pages/docs/artists@_@astro":"pages/docs/artists.astro.mjs","\u0000@astro-page:src/pages/docs/business@_@astro":"pages/docs/business.astro.mjs","\u0000@astro-page:src/pages/docs/roadmap@_@astro":"pages/docs/roadmap.astro.mjs","\u0000@astro-page:src/pages/docs/schema@_@astro":"pages/docs/schema.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_9iysU_Fs.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BbckMFxf.js","@astrojs/solid-js/client.js":"_astro/client.CKtg_Fpu.js","/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/lib/scene/MusicBoxScene.ts":"_astro/MusicBoxScene.CvQF2_Ls.js","/home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/src/components/App":"_astro/App.u6yaE_uh.js","/astro/hoisted.js?q=1":"_astro/hoisted.1FdYwair.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/create/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/architecture/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/artists/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/business/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/roadmap/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/docs/schema/index.html","/file:///home/arepo/LOGOS/PRAGMA/SOFTWARE/valentines/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"61V4X9O2mjzCWj4sMqDq1sZFbkQhrYK4BZbXGvNTt74=","experimentalEnvGetSecretEnabled":false});

export { manifest };
