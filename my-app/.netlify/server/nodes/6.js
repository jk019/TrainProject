import * as server from '../entries/pages/trains/_train_id_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trains/_train_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/trains/[train_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.A-CVnMqx.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DbZw4F4R.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/axios.Bo0ATomq.js"];
export const stylesheets = [];
export const fonts = [];
