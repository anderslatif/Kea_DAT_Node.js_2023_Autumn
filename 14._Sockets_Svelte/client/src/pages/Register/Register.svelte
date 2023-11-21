<script>
    import { BASE_URL } from "../../stores/globalStore.js";
    let name;


    async function registerName() {
        const response = await fetch($BASE_URL + "/api/users", {
            method: "POST", 
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name })
        });
        const result = await response.json();
        console.log(result);
    }
</script>

<input bind:value={name}>
<button on:click={registerName}>Register Name</button>