<!-- script -->
<script>
	import { pages } from './login.js';
	let email       = '',
        status      = '';
</script>

<!-- body -->
<div class="d-flex justify-content-center align-items-center">
	<div class="row" style="width: 380px">
		<div class="col-2">
			<img alt="" src="/img/login_smiley2.svg" />
		</div>
		<div class="col-10">
			<h2 class="lh-1">Forgot</h2>
			<h2 class="lh-1">Password?</h2>
		</div>
	</div>
</div>
<p class="mt-5">Don't worry, let us help you</p>
<div class="d-flex justify-content-center align-items-center">
	<div class="login-form mt-4">
		<div class="form-group text-start">
			<label for="" class="input-label fw-bold mb-2">E-mail Address</label><label for="" class="star">*</label>
			<input type="text" class="form-control" class:err-input="{status === 'false'}" bind:value={email} on:click="{() => status = ''}"/>
		</div>
		
		<span class="d-flex">Enter your registered email address and we'll send you a 6-digit key to reset your password</span>
		
		<a href="{'/login'}" class="d-flex justify-content-center align-items-center mb-3 fs-5 fw-light" style="margin-top: 77px">Back to Login</a>
		<!-- <button type="button" class="login-btn mt-3 btn-primary" on:click={() => pages.set('input_otp')}> -->
		<button type="button" class="login-btn mt-3 btn-primary" on:click={() => pages.set('input_otp')}>
			Proceed <img alt="" src="/img/login_arrow.svg" />
		</button>
	</div>
</div>

<!-- style -->