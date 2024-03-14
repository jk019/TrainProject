<script>
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	let selectedWagon = writable(null);

	function selectWagon(wagenId) {
		selectedWagon.set(wagenId);
	}

	let selectedWagen = 'Wagen 1'; // Default selected item
	// @ts-ignore
	function selectWagen(wagen) {
		selectedWagen = wagen;
	}

	function test() {
		console.log('success');
	}
</script>


<h1>Sensoren</h1>

<!-- Dynamischer Inhalt basierend auf der Auswahl -->
<nav class="nav" style="margin-bottom: 20px;">
	{#each data.wagons as wagon}
		<a
		class="nav-link"
			href="/wagn{wagon._id}"
			on:click|preventDefault={() => selectWagon(wagon._id)}
			class:selected={$selectedWagon === wagon._id}
			style="cursor: pointer;"
		>
			Wagen {wagon.wagon_ISO}
		</a>
	{/each}
</nav>

<!-- Dynamischer Inhalt basierend auf der Auswahl -->
<div>
	{#if $selectedWagon}
		{#each data.wagons as wagon}
			{#if $selectedWagon === wagon._id}
				{#each data.sections as section}
				{#if section.wagon_id === wagon._id}
				<div class="sensorbox">
					<div class="card">
						<div class="card-body">
							<h5>{section.section_name}</h5>
							<div class="GUID">GUID: {section._id}</div>
							<span class="badge text-bg-success">Connected</span>
							<br />
							<br />
							<button
								class="btn btn-primary"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapse{section._id}"
								aria-expanded="false"
								aria-controls="collapse{section._id}"
							>
								<span class="material-symbols-outlined"> expand_more </span>
								X Sensors associated
							</button>
						</div>
					</div>
					{#each data.sensors as sensor}
						{#if sensor.section_id == section._id}
							<div class="row sensorboxes">
								<div class="col">
									<div class="collapse" id="collapse{section._id}">
										<div class="card card-body">
											<h6>{sensor.measurement}</h6>
											<div class="GUID">GUID: {sensor._id}</div>
											<span class="badge text-bg-success small">{sensor.connection_state}</span>
											<div class="sensorvalue">{sensor.value} {sensor.unit}</div>
										</div>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
				{/if}
					
				{/each}
				
				<!-- Fügen Sie hier Ihre Logik zum Anzeigen von Sektionen und Sensoren basierend auf dem ausgewählten Wagen ein -->
			{/if}
		{/each}
	{:else}
		<p>Bitte wählen Sie einen Wagen aus.</p>
	{/if}
</div>



<style>
	.GUID {
		color: rgb(129, 127, 127);
	}

	.sensorboxes {
		margin: 5px;
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

	.selected {
		color: purple;
	}
</style>
