<svelte:head>
	<title>Validation</title>
</svelte:head>

<h1>Validation</h1>

<div class="validating-field">
  <input class="input"
    type="text"
    bind:value={email}
    placeholder="Your Email"
    class:field-danger={$emailValidity.dirty && !$emailValidity.valid}
    class:field-success={$emailValidity.valid}
    use:validateEmailField
    />

  {#if $emailValidity.dirty && !$emailValidity.valid}
  <span class="validation-hint">
    INVALID - {$emailValidity.message}
  </span>
  {/if}

  <button disabled={!$emailValidity.valid} on:click={() => alert(`Your email is ${email}!`)}>Ok, I'm ready!</button>
</div>

<script>
	import { emailValidator, requiredValidator } from 'validator/validators.js'
  import createValidator from 'validator/validate.js'

  const [ emailValidity, validateEmailField ] = createValidator(requiredValidator(), emailValidator())
	
	let email = null
</script>

<style>
	.validating-field {
		display: flex;
    flex-direction: column;
	}
	
	input, button {
		outline: none;
    border-width: 2px;
    font-size: 1.6rem;
    margin: 6px 0;
	}
	
	.validation-hint {
		color: red;
    padding: 6px 0;
    font-size: 1.4rem;
	}
	
	.field-danger {
		border-color: red;
	}
	
	.field-success {
		border-color: green;
	}
</style>

