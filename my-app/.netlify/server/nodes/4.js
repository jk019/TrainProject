import * as server from '../entries/pages/trains/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trains/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/trains/+page.server.js";
export const imports = ["_app/immutable/nodes/4.DGoRardQ.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DbZw4F4R.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/axios.Bo0ATomq.js","_app/immutable/chunks/entry.DOtn0Upw.js","_app/immutable/chunks/index.BGTSHx9J.js"];
export const stylesheets = ["_app/immutable/assets/4.BOienLJ_.css"];
export const fonts = [];
