<svelte:head>
	<title>Secret Page</title>
</svelte:head>

<h1>Secret Page</h1>

<p>This page is secret. We know your name is {$session.name}!</p>

<p>Lets get some secret data from the API:</p>

{#if secretData}
<pre>{secretData}</pre>
{/if}

<script context="module">
  export async function preload (page, session) {
    if (!session.authenticated) {
      this.redirect(302, 'authentication')
    }
  }
</script>

<script>
  import { stores } from '@sapper/app'
  import { onMount } from 'svelte'

  const { session } = stores()

  let secretData

  onMount(async () => {
    const res = await fetch('/api/secret-data', { credentials: 'include' })
    const json = await res.json()
    secretData = json.secret
  })
</script>