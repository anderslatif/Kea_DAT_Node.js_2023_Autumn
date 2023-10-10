<script>
  import Child from "../Child/Child.svelte";

    export let name;
    export let myChildren;

</script>

<h1>{name}</h1>


{#each myChildren as child}
    <Child child={child} />
{/each}
