<script>
    import { navigate } from "svelte-navigator";

    let coffeeLoverName = "";

    async function submitCoffeLoverName() {
        const response = await fetch("http://localhost:8080/users/" + coffeeLoverName, {
            credentials: "include"
        });
        const result = await response.json();
        navigate("/whodatcoffeelover")
    }
</script>

<input bind:value={coffeeLoverName}>
<button on:click={submitCoffeLoverName}>Submit your name</button>