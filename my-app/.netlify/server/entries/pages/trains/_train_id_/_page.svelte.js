import { c as create_ssr_component, e as escape, f as add_attribute, b as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let train = data.train;
  let wagons = data.wagons;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Train (ID: ${escape(train._id)})</h1> <a href="/trains" data-svelte-h="svelte-xvg5un">Back</a>  <div class="mt-3 mb-3"><label class="form-label" for="color" data-svelte-h="svelte-18ty9rk">Color</label> <input class="form-control" id="color"${add_attribute("value", train.color, 0)}></div> <button class="btn btn-primary" data-svelte-h="svelte-1oeml36">Update</button> <div><h2 data-svelte-h="svelte-4d8th9">dazugehörende Wagons</h2> ${each(wagons, (wagon) => {
    return `<p>Wagon Nr: ${escape(wagon.wagon_id)}</p>`;
  })}</div>`;
});
export {
  Page as default
};
