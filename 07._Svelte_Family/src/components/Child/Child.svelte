<script>
    export let child;
    export let onEatCookie;
    export let onShowLove;

    import { fridgeMessages } from "../../store/fridgeMessages";

    let customFridgeMessage = "";
    
    function submitFridgeMessage() {
        fridgeMessages.set([...$fridgeMessages, customFridgeMessage]);
        // fridgeMessages.update((storeValue) => {
        //     storeValue.push(customFridgeMessage);
        //     return storeValue;
        //     return [...$fridgeMessages, customFridgeMessage];
        // });

        customFridgeMessage = "";
    }
</script>

<button on:click={onEatCookie}>Eat Cookie</button>
<button on:click={() => onShowLove(child.name)}>💚</button>
<br>

<input placeholder="Write a fridge message" bind:value={customFridgeMessage}>
<button on:click={submitFridgeMessage}>Submit fridge message</button>

<div 
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}
>
    <h3>{child.name}</h3>
</div>

<style>
    .is-boy {
        border: 1px solid pink;
    }

    .is-girl {
        border: 1px solid blue;
    }

    .not-a-black-sheep {
        background-color: aquamarine;
    }

    .medium-black-sheep {
        background-color: blueviolet;
    }

    .ultra-black-sheep {
        background-color: brown;
    }
</style>