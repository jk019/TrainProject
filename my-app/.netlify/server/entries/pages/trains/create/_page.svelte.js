import { c as create_ssr_component, f as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let train = { color: "" };
  return `<h1 data-svelte-h="svelte-bgssac">Add a Train</h1> <form><div class="mb-3"><label for="" class="form-label" data-svelte-h="svelte-1dhznht">Color</label> <input class="form-control" type="text"${add_attribute("value", train.color, 0)}></div> <button type="button" class="btn btn-primary" data-svelte-h="svelte-w7uc9f">Add Train</button></form>`;
});
export {
  Page as default
};
