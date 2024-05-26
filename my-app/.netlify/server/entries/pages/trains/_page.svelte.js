import { c as create_ssr_component, b as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: ".GUID.svelte-7iupmf{color:rgb(129, 127, 127)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<button data-svelte-h="svelte-vacjy8">printData</button> <h1 data-svelte-h="svelte-1l9eg7n">Trains</h1> <a href="/trains/create" data-svelte-h="svelte-1gg3hbn">+ Add Train</a> ${each(data.trains, (train) => {
    return `<div class="sensorbox"><div class="card"><div class="card-body"><h5>Zug ${escape(train.color)}</h5> <div class="GUID svelte-7iupmf">GUID: ${escape(train._id)}</div> <a${add_attribute("href", "/trains/" + train._id, 0)}>${escape(train._id)}</a> <span class="badge text-bg-success" data-svelte-h="svelte-1ug650o">Connected</span> <br> <br> <button class="btn btn-danger" data-svelte-h="svelte-13ncmp5">X</button> </div></div> </div>`;
  })}`;
});
export {
  Page as default
};
