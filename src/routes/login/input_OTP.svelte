<!-- script -->
<script>
	import { onMount } from 'svelte';
	import { pages } from './login.js';
	import { resetTimer, startTimer, setInputFilter, } from './login.js';

	let status      = '',
		otp1      	= '',
		otp2      	= '',
		otp3      	= '',
		otp4      	= '',
		otp5      	= '',
		otp6      	= '';

	onMount(() => {
		startTimer('reset');

		const inputNum = document.querySelectorAll('.input-otp');
		inputNum.forEach((l) => {
			setInputFilter(l, function(value) {
				return /^[0-9]*$/.test(value);
			}, "Only numbers are allowed");

			l.setAttribute('onkeyup', 'nextInput(this)');
			l.setAttribute('maxlength', '1');
		});
	});

	function validateOTP() {
		var otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

		if (otp.length != 6) {
			status 		= 'false',
			otp1      	= '',
			otp2      	= '',
			otp3      	= '',
			otp4      	= '',
			otp5      	= '',
			otp6      	= '';
		} else {
			pages.set('new_password')
		}
	}
</script>

<!-- body -->
<div class="d-flex justify-content-center align-items-center">
	<div class="row" style="width: 380px">
		<div class="col-2">
			<img alt="" src="/img/login_alias.svg" />
		</div>
		<div class="col-10">
			<h2 class="lh-1">Please Check</h2>
			<h2 class="lh-1">Your Email</h2>
		</div>
	</div>
</div>
<p class="mt-5">One last step before we proceed</p>
<div class="d-flex justify-content-center align-items-center">
	<div class="login-form mt-4">
		<div class="form-group text-start">
			<label for="" class="input-label fw-bold mb-2">Enter 6-digit key</label><label for="" class="star">*</label>
			<div class="row" style="width: 100%; margin: 5px 0px 0px 0px">
				<div class="col-2"><input type="text" bind:value={otp1} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
				<div class="col-2"><input type="text" bind:value={otp2} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
				<div class="col-2"><input type="text" bind:value={otp3} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
				<div class="col-2"><input type="text" bind:value={otp4} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
				<div class="col-2"><input type="text" bind:value={otp5} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
				<div class="col-2"><input type="text" bind:value={otp6} class="form-control input-otp" class:err-input="{status === 'false'}" on:click="{() => status = ''}"/></div>
			</div>
		</div>
		
		<span class="d-flex">Did not receive email? Check your Spam mailbox or <button class="resend-email" on:click={resetTimer}>Resend Email</button>.</span>
		<span>Your 6-digit key will expire in :</span>

		<div class="d-flex" id="login-countdown"></div>

		<a href="{'/login'}" class="d-flex justify-content-center align-items-center mt-0 mb-1 fs-5 fw-light">Back to Login</a>
		<button type="button" class="login-btn mt-3 btn-primary" on:click={validateOTP}>
			Reset Password <img alt="" src="/img/login_arrow.svg" />
		</button>
	</div>
</div>
<!-- style -->