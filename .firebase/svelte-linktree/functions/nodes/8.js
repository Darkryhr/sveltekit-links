import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.adef30a9.js","_app/immutable/chunks/scheduler.d978c4dc.js","_app/immutable/chunks/index.7cd3bf66.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.d677224b.js","_app/immutable/chunks/index.203efc0d.js","_app/immutable/chunks/stores.7a335147.js"];
export const stylesheets = [];
export const fonts = [];
