<script>    
    export let name;
    export let myChildren;
    
    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../store/fridgeMessages";

    function eraseFridgeMessages() {
        fridgeMessages.set(["Fridge Messages Below"]);
    }

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

<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>
<br>
<br>

{#each myChildren as child}
    <Child child={child} onEatCookie={handleEatCookie} onShowLove={handleShowLove} />
{/each}
