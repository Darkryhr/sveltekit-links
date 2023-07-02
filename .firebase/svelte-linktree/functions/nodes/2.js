

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bd789be3.js","_app/immutable/chunks/scheduler.d978c4dc.js","_app/immutable/chunks/index.7cd3bf66.js","_app/immutable/chunks/stores.7a335147.js","_app/immutable/chunks/singletons.d677224b.js","_app/immutable/chunks/index.203efc0d.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = [];
export const fonts = [];
