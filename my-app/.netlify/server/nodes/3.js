import * as server from '../entries/pages/sensors/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sensors/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sensors/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Cl1G31-a.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DbZw4F4R.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BGTSHx9J.js"];
export const stylesheets = ["_app/immutable/assets/3.CieZaaTP.css"];
export const fonts = [];
