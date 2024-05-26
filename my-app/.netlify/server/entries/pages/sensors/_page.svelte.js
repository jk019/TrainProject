import { c as create_ssr_component, a as subscribe, b as each, e as escape } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
const css = {
  code: ".GUID.svelte-19ot9er{color:rgb(129, 127, 127)}.sensorboxes.svelte-19ot9er{margin:5px}.small.svelte-19ot9er{width:90px}.nav-link.svelte-19ot9er{padding-left:0%;padding-right:24px;color:black;font-weight:500}.btn-primary.svelte-19ot9er{background-color:white;color:black;border:0px}.btn-primary.svelte-19ot9er:focus{background-color:white;color:black;border:0px}.selected.svelte-19ot9er{color:purple}.filters.svelte-19ot9er{background-color:green}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedWagon, $$unsubscribe_selectedWagon;
  let { data } = $$props;
  let selectedWagon = writable(null);
  $$unsubscribe_selectedWagon = subscribe(selectedWagon, (value) => $selectedWagon = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_selectedWagon();
  return `<h1 data-svelte-h="svelte-9gm125">Sensoren</h1> <div class="dropdown" data-svelte-h="svelte-1nxf7w9"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Systemansicht</button> <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Eigene Ansicht 1</a></li> <li><a class="dropdown-item" href="#">Eigene Ansicht 2</a></li></ul>  <button type="button" class="btn btn-primary svelte-19ot9er" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="material-symbols-outlined">add</span></button></div>  <nav class="nav" style="margin-bottom: 20px;">${each(data.wagons, (wagon) => {
    return `<a class="${["nav-link svelte-19ot9er", $selectedWagon === wagon._id ? "selected" : ""].join(" ").trim()}" href="${"/wagn" + escape(wagon._id, true)}" style="cursor: pointer;">Wagen ${escape(wagon.wagon_ISO)} </a>`;
  })}</nav>  <div>${$selectedWagon ? `${each(data.wagons, (wagon) => {
    return `${$selectedWagon === wagon._id ? `${each(data.sections, (section) => {
      return `${section.wagon_id === wagon._id ? `<div class="sensorbox"><div class="card"><div class="card-body"><h5>${escape(section.section_name)}</h5> <div class="GUID svelte-19ot9er">GUID: ${escape(section._id)}</div> <span class="badge text-bg-success" data-svelte-h="svelte-1ug650o">Connected</span> <br> <br> <button class="btn btn-primary svelte-19ot9er" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapse" + escape(section._id, true)}" aria-expanded="false" aria-controls="${"collapse" + escape(section._id, true)}"><span class="material-symbols-outlined" data-svelte-h="svelte-sfdlaf">expand_more</span>
										X Sensors associated</button> </div></div> ${each(data.sensors, (sensor) => {
        return `${sensor.section_id == section._id ? `<div class="row sensorboxes svelte-19ot9er"><div class="col"><div class="collapse" id="${"collapse" + escape(section._id, true)}"><div class="card card-body"><h6>${escape(sensor.measurement)}</h6> <div class="GUID svelte-19ot9er">GUID: ${escape(sensor._id)}</div> <span class="badge text-bg-success small svelte-19ot9er">${escape(sensor.connection_state)}</span> <div class="sensorvalue">${escape(sensor.value)} ${escape(sensor.unit)}</div></div> </div></div> </div>` : ``}`;
      })} </div>` : ``}`;
    })} ` : ``}`;
  })}` : `<p data-svelte-h="svelte-bx53nd">Bitte wählen Sie einen Wagen aus.</p>`}</div>  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-svelte-h="svelte-1noa68t"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">Edit filters</h1> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">And</button> <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Or</a></li></ul></div> <br> <div class="row filters svelte-19ot9er"><div class="col"><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Status</button> <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Train</a></li></ul></div></div> <div class="col"><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">equals</button> <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Does not Equal</a></li></ul></div></div> <div class="col"><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Active</button> <ul class="dropdown-menu"><li><a class="dropdown-item" href="#">Inactive</a></li></ul></div></div> <span class="material-symbols-outlined">more_horiz</span></div> <br> <button type="button" class="btn btn-secondary">Add <span class="material-symbols-outlined">add</span></button></div> <div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> <button type="button" class="btn btn-primary svelte-19ot9er">Save changes</button></div></div></div> </div>`;
});
export {
  Page as default
};
