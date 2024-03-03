<script>
	let selectedWagen = 'Wagen 1'; // Default selected item

	// @ts-ignore
	function selectWagen(wagen) {
		selectedWagen = wagen;
	}
</script>

<h1>Sensoren</h1>

<nav class="nav" style="margin-bottom: 20px;">
  <a class="nav-link" href="/wagen1" on:click|preventDefault={() => selectWagen('Wagen 1')}
    class:selected={selectedWagen === 'Wagen 1'} style="cursor: pointer;">Wagen 1</a>
  <a class="nav-link" href="/wagen2" on:click|preventDefault={() => selectWagen('Wagen 2')}
    class:selected={selectedWagen === 'Wagen 2'} style="cursor: pointer;">Wagen 2</a>
  <a class="nav-link" href="/wagen3" on:click|preventDefault={() => selectWagen('Wagen 3')}
    class:selected={selectedWagen === 'Wagen 3'} style="cursor: pointer;">Wagen 3</a>
</nav>

<!-- Conditional Content Rendering -->
{#if selectedWagen === 'Wagen 1'}

<div class="cabin1">
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Eingangsbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					3 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">27.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">71. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">432 ppm</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Sanitärbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample2"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					4 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">24.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">86. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">564 ppm</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Anzahl Spühlungen</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">34</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{:else if selectedWagen === 'Wagen 2'}
<div class="cabin2">
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Sanitärbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					3 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">27.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">71. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">432 ppm</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Passagierbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample2"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					4 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">24.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">86. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">564 ppm</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Anzahl Spühlungen</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">34</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Eingangsbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample2"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					4 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">24.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">86. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">564 ppm</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body">
						<h6>Anzahl Spühlungen</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">34</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="collapse" id="collapseExample2">
					<div class="card card-body empty">
						<h6></h6>
						<div class="GUID"></div>
						<span class="badge text-bg-success small"></span>
						<div class="sensorvalue"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{:else if selectedWagen === 'Wagen 3'}
<div class="cabin3">
	<div class="sensorbox">
		<div class="card">
			<div class="card-body">
				<h5>Eingangsbereich</h5>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success">Connected</span>
				<br />
				<br />
				<button
					class="btn btn-primary"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseExample"
					aria-expanded="false"
					aria-controls="collapseExample"
				>
					<span class="material-symbols-outlined"> expand_more </span>
					3 Sensors associated
				</button>
			</div>
		</div>

		<div class="row sensorboxes">
			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Temperatur</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">27.5 °C</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>Luftfeuchtigkeit</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">71. 3%</div>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="collapse" id="collapseExample">
					<div class="card card-body">
						<h6>CO2 (Luftqualität)</h6>
						<div class="GUID">GUID: 042743284324242</div>
						<span class="badge text-bg-success small">Connected</span>
						<div class="sensorvalue">432 ppm</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</div>
{/if}


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
