<script>
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	import { invalidateAll } from "$app/navigation";
	export let data;

	let selectedWagen = 'Wagen 1'; // Default selected item
	// @ts-ignore
	function selectWagen(wagen) {
		selectedWagen = wagen;
	}

	function printData(){
		// @ts-ignore
		console.log(data.train);
	}


	// @ts-ignore
	function deleteTrain(id) {
    axios
      .delete("/api/trains/" + id)
      .then((response) => {
        alert("Train deleted");
        console.log(response.data);
        invalidateAll(); // reload data
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

</script>

<button on:click={printData}>printData</button>

<h1>Trains</h1>

<a href="/trains/create">+ Add Train</a>

{#each data.trains as train}
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Zug {train.color}</h5>
				<div class="GUID">GUID: {train._id}</div>
				<a href={"/trains/" + train._id}> {train._id}</a>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button class="btn btn-danger"
				on:click={() => {
				  deleteTrain(train._id);
				}}>X</button
			  >
			</div>
		</div>
	</div>
{/each}

<style>
	.GUID {
		color: rgb(129, 127, 127);
	}

	
</style>
