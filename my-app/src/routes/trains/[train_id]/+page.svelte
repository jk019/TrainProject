<script>
	import axios from 'axios';
	export let data;

	let train = data.train;
	let wagons = data.wagons;

	function updateTrain() {
		axios
			// @ts-ignore
			.put('/api/trains/' + train._id, train)
			.then((response) => {
				alert('Train updated');
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
				alert(error);
			});
	}
</script>

<h1>Train (ID: {train._id})</h1>
<a href="/trains">Back</a>
<!-- <div class="mt-3">
<p>Name: {artist.name}</p>
<p>Origin: {artist.origin}</p>
</div>
 -->
<div class="mt-3 mb-3">
	<label class="form-label" for="color">Color</label>
	<input class="form-control" id="color" bind:value={train.color} />
</div>

<button class="btn btn-primary" on:click={updateTrain}>Update</button>

<div>
	<h2>dazugehörende Wagons</h2>
	{#each wagons as wagon}
		<p>Wagon Nr: {wagon.wagon_id}</p>
	{/each}
</div>
