<script>
  import Colors from "./pages/Colors/Colors.svelte";
  import Register from "./pages/Register/Register.svelte";
  import { currentUser } from "./stores/usersStore.js";
</script>

{#if !$currentUser}
  <Register/>
{:else}
  <Colors/>
{/if}