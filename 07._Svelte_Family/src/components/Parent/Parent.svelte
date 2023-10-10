<script>
    import Child from "../Child/Child.svelte";

    export let name;
    export let myChildren;

    let cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handleEatCookie() {
        cookieJar.pop();
        cookieJar = cookieJar;
        if (cookieJar.length === 0) {
            fillCookieJar();
        }
    }

    function fillCookieJar() {
        cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪"];
    }

    function handleShowLove(childName) {
        console.log(`My name is ${name} and ${childName} loves me.`);
    }
</script>

<h1>{name}</h1>

<p>{cookieJar}</p>

{#each myChildren as child}
    <Child child={child} onEatCookie={handleEatCookie} onShowLove={handleShowLove} />
{/each}
