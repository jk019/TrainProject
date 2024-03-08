<script>
    import axios from "axios";
  
    let train = {
      color: "",
    };
  
    function addTrain() {
      axios
        .post("/api/trains", train)
        .then((response) => {
          alert("train added");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  </script>
  
  <h1>Add a Train</h1>
  
  <form>
    <div class="mb-3">
      <label for="" class="form-label">Color</label>
      <input class="form-control" type="text" bind:value={train.color} />
    </div>
    <button on:click={addTrain} type="button" class="btn btn-primary">
      Add Train
    </button>
  </form>
  