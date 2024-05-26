import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","profilepic.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.OYf0N6T2.js","app":"_app/immutable/entry/app.DEyNlOde.js","imports":["_app/immutable/entry/start.OYf0N6T2.js","_app/immutable/chunks/entry.DOtn0Upw.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BGTSHx9J.js","_app/immutable/entry/app.DEyNlOde.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DbZw4F4R.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/trains",
				pattern: /^\/api\/trains\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/trains/_server.js'))
			},
			{
				id: "/api/trains/[train_id]",
				pattern: /^\/api\/trains\/([^/]+?)\/?$/,
				params: [{"name":"train_id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/trains/_train_id_/_server.js'))
			},
			{
				id: "/sensors",
				pattern: /^\/sensors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/trains",
				pattern: /^\/trains\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/trains/create",
				pattern: /^\/trains\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/trains/[train_id]",
				pattern: /^\/trains\/([^/]+?)\/?$/,
				params: [{"name":"train_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
