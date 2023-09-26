fetch("/battlepokemon")
.then((response) => response.json())
.then((result) => {
    console.log(result); 
});