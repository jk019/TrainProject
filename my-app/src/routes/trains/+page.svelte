<script>
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	export let data;

	let selectedWagen = 'Wagen 1'; // Default selected item
	// @ts-ignore
	function selectWagen(wagen) {
		selectedWagen = wagen;
	}
</script>

<h1>Trains</h1>

{#each data.trains as d}
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Zug {d.color}</h5>
				<div class="GUID">GUID: {d._id}</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
			</div>
		</div>
	</div>
{/each}

<style>
	.GUID {
		color: rgb(129, 127, 127);
	}

	.sensorboxes {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.small {
		width: 90px;
	}

	.nav-link {
		color: black;
		font-weight: 500;
	}

	.btn-primary {
		background-color: white;
		color: black;
		border: 0px;
	}

	.btn-primary:focus {
		background-color: white;
		color: black;
		border: 0px;
	}

	.empty {
		border-color: white;
	}

	.selected {
		color: purple;
	}
</style>
