<svelte:head>
	<title>Authenticate</title>
</svelte:head>

<h1>Authentication</h1>

{#if $session.authenticated}
<button on:click={logout}>
  Log-out
</button>
{:else}
<button on:click={login}>
  Log-in
</button>
{/if}

<script>
  import { goto } from '@sapper/app'
  import { stores } from '@sapper/app'

  const { session } = stores()

  async function login () {
    const res = await fetch('/api/authenticate')
    window.location.href = '/secret-page'
  }

  async function logout () {
    const res = await fetch('/api/logout')
    session.set({ authenticated: false })
    window.location.href = '/'
  }
</script>