import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="row"><div class="col-3" data-svelte-h="svelte-1g5wgy9"><div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;"><a href="/" class="align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none"><span class="material-symbols-outlined">train</span> <span class="fs-4">Sensoren-App</span></a> <hr> <ul class="nav nav-pills flex-column mb-auto"><li class="nav-item"><a href="/" class="nav-link link-light" aria-current="page"><span class="material-symbols-outlined">home</span>
						Home</a></li> <li><a href="/trains" class="nav-link link-light"><span class="material-symbols-outlined">train</span>
						Trains</a></li> <li><a href="/sensors" class="nav-link link-light"><span class="material-symbols-outlined">sensors</span>
						Sensoren</a></li></ul> <hr> <div class="dropdown"><a href="#" class="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false"><img src="\\profilepic.png" alt="" width="32" height="32" class="rounded-circle me-2"> <strong>Account</strong></a> <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2"><li><a class="dropdown-item" href="#">Settings</a></li> <li><a class="dropdown-item" href="#">Profile</a></li> <li><hr class="dropdown-divider"></li> <li><a class="dropdown-item" href="#">Sign out</a></li></ul></div></div></div> <div class="col-sm">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
