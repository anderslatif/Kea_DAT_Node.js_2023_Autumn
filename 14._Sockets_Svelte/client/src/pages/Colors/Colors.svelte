<script>
    import io from "socket.io-client";
    const socket = io("localhost:8080");

    let color;

    function chooseColor() {
        socket.emit("client-choose-a-color", { data: color });
    }

    socket.on("server-sent-a-color", (data) => {
        // don't ever do this... do it the Svelte way without DOM manipulation
        document.body.style.backgroundColor = data.data;
    });
</script>

<input type="color" bind:value={color}>
<button on:click={chooseColor}>Choose Color</button>