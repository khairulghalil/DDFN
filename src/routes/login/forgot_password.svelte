<!-- script -->
<script>
	import Sendemail from "./send_email.svelte";
	import InputOTP from "./input_OTP.svelte";
	import NewPassword from "./new_password.svelte";
	import SuccessReset from "./success_reset.svelte";
	import { pages } from './login.js';

	let page = '';

	pages.set('send_email')
	pages.subscribe(value => { page = value; });

	/* 
	Uncomment 1 of below pages to directly show specific pages. 
	Remember to comment all before commit.
	*/

	// page = 'send_email'
	// page = 'input_otp'
	// page = 'new_password'
	// page = 'success_reset'
</script>

<!-- body -->
<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<body class="login-body">
	<div class="container">
		<div class="row login-container">
			<div class="col-lg-6 login-img" style="border: 1px solid none">
				<div class="d-flex justify-content-center align-items-center">
					<img alt="" src="/img/login_main.svg" width="75%" />
				</div>
				<h2 class="mt-5">DDFN</h2>
				<h5>(Digital Distributed Farms Network)</h5>
			</div>

			<div class="col-lg-6 login-content mt-4" style="border: 1px solid none">
				{#if page == "send_email"}
                    <Sendemail></Sendemail>
                {:else if page == "input_otp"}
					<InputOTP></InputOTP>
                {:else if page == "new_password"}
					<NewPassword></NewPassword>
                {:else if page == "success_reset"}
					<SuccessReset></SuccessReset>
                {/if}
			</div>
		</div>
	</div>
</body>

<!-- style -->
<style>
	body {
		background-color: #ecf2f0;
	}
</style>