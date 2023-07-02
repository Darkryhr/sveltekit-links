

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.41912704.js","_app/immutable/chunks/scheduler.d978c4dc.js","_app/immutable/chunks/index.7cd3bf66.js","_app/immutable/chunks/stores.7a335147.js","_app/immutable/chunks/singletons.d677224b.js","_app/immutable/chunks/index.203efc0d.js"];
export const stylesheets = [];
export const fonts = [];
