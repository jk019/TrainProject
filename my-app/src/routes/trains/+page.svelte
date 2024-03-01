<script>
	export let data;
	console.log(data);
</script>

<h1>Sensoren</h1>

<nav class="nav" style="margin-bottom: 20px;">
	<a class="nav-link" href="" style="color: purple; ">Eingangsbereich</a>
	<a class="nav-link" href="">Sanitärbereich</a>
	<a class="nav-link" href="">Passagierbereich</a>
</nav>

<div class="card">
	<div class="card-body">
		<h5>Wagen 1</h5>
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
			3 Sensors associated
		</button>
		

		<span class="material-symbols-outlined"> expand_more </span>
	</div>
</div>

<div class="row sensorboxes">
	<div class="col">
		<div class="collapse" id="collapseExample">
			<div class="card card-body">
				<h6>Temperatur</h6>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success small">Connected</span>
				<div class="sensorvalue">27 °C</div>
			</div>
		</div>
	</div>

	<div class="col">
		<div class="collapse" id="collapseExample">
			<div class="card card-body">
				<h6>Temperatur</h6>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success small">Connected</span>
				<div class="sensorvalue">27 °C</div>
			</div>
		</div>
	</div>

	<div class="col">
		<div class="collapse" id="collapseExample">
			<div class="card card-body">
				<h6>Temperatur</h6>
				<div class="GUID">GUID: 042743284324242</div>
				<span class="badge text-bg-success small">Connected</span>
				<div class="sensorvalue">27 °C</div>
			</div>
		</div>
	</div>
</div>

<style>
	.GUID {
		color: rgb(129, 127, 127);
	}

	.sensorboxes {
		margin-top: 5px;
	}

	.small {
		width: 90px;
	}

	.nav-link {
		color: black;
		font-weight: 500;
	}
</style>
