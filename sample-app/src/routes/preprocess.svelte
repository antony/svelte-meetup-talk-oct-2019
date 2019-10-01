<svelte:head>
	<title>About</title>
</svelte:head>

<h1>SCSS Preprocessing</h1>

<p>This page uses SCSS <span>for its styling</span></p>

<style lang="scss">
  $color: blue;
  
  p {
    > span {
      color: $color;
    }
  }
</style>