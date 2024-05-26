<script>
	import axios from 'axios';
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	let selectedWagon = writable(null);

	function selectWagon(wagenId) {
		selectedWagon.set(wagenId);
	}
</script>

<h1>Sensoren</h1>

<div class="dropdown">
	<button
		class="btn btn-secondary dropdown-toggle"
		type="button"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		Systemansicht
	</button>
	<ul class="dropdown-menu">
		<li><a class="dropdown-item" href="#">Eigene Ansicht 1</a></li>
		<li><a class="dropdown-item" href="#">Eigene Ansicht 2</a></li>
	</ul>
	<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
	<span class="material-symbols-outlined"> add </span>
</button>
</div>



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

<!-- Modal -->
<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Edit filters</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="dropdown">
					<button
						class="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						And
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Or</a></li>
					</ul>
				</div>

				<br />

				<div class="row filters">
					<div class="col">
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Status
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Train</a></li>
							</ul>
						</div>
					</div>

					<div class="col">
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								equals
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Does not Equal</a></li>
							</ul>
						</div>
					</div>
					<div class="col">
						<div class="dropdown">
							<button
								class="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Active
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Inactive</a></li>
							</ul>
						</div>
					</div>
					<span class="material-symbols-outlined"> more_horiz </span>
				</div>

				<br />

				<button type="button" class="btn btn-secondary">
					Add <span class="material-symbols-outlined"> add </span>
				</button>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
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
		padding-left: 0%;
		padding-right: 24px;
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

	.filters {
		background-color: green;
	}
</style>
