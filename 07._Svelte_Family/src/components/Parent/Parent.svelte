<script>
  import Child from "../Child/Child.svelte";

    export let name;
    export let children;

</script>

<h1>{name}</h1>


{#each children as child}
    <Child child={child} />
{/each}
