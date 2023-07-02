

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.baaf0e1d.js","_app/immutable/chunks/scheduler.d978c4dc.js","_app/immutable/chunks/index.7cd3bf66.js","_app/immutable/chunks/firebase.312fba77.js","_app/immutable/chunks/index.203efc0d.js"];
export const stylesheets = [];
export const fonts = [];
