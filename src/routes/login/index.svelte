<!-- script -->
<script>
	import { postLogin } from '../../api/logic-api';

	let email       = '',
		password    = '',
        status      = '';

	async function login() {
        let res = await postLogin();
        // console.log(res);

        if (res.id == '1') { // credential error
            // status = 'false';
            // email = '';
            // password = '';

			// document.querySelector("#passwordTxt").setAttribute("type", "password");
			// document.querySelector("#togglePassword").className = "bi-eye-slash-fill";

			window.location.href="../dashboard"
        }
	}

	function viewPassword() {
		const password = document.querySelector("#passwordTxt");
		const type = password.getAttribute("type") === "password" ? "text" : "password";
		password.setAttribute("type", type);

		const i = document.querySelector("#togglePassword")
		type === "text" ? i.className = "bi-eye-fill" : i.className = "bi-eye-slash-fill"

	}
</script>

<!-- body -->
<svelte:head>
	<title>Login</title>
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
				<div class="d-flex justify-content-center align-items-center">
					<div class="row" style="width: 380px">
						<div class="col-2">
							<img alt="" src="/img/login_smiley1.svg" />
						</div>
						<div class="col-10">
							<h2 class="lh-1">Hello There,</h2>
							<h2 class="lh-1">Welcome Back!</h2>
						</div>
					</div>
				</div>
				<p class="mt-5">Log in to continue</p>
				<div class="d-flex justify-content-center align-items-center">
					<div class="login-form mt-4">
						<div class="form-group text-start">
							<label for="" class="input-label fw-bold mb-2">E-mail Address</label><label for="" class="star">*</label>
							<input type="text" class="form-control" class:err-input="{status === 'false'}" bind:value={email} on:click="{() => status = ''}"/>

							<label for="" class="input-label fw-bold mt-4 mb-2 ">Password</label><label for="" class="star">*</label>
							<div class="input-group">
								<input type="password" id="passwordTxt" class="form-control" class:err-input="{status === 'false'}" bind:value={password} on:click="{() => status = ''}"/>
								<i class="bi bi-eye-slash-fill" id="togglePassword" on:click={viewPassword} style="cursor: pointer; margin-top: 10px; margin-left: -35px; z-index: 100;"></i>
							</div>
						</div>

						<a href="{'/login/forgot_password'}" class="d-flex justify-content-center align-items-center mt-5 mb-3 fs-5 fw-light">Forgot Password?</a>
						<button type="button" class="login-btn mt-3 btn-primary" on:click={login}>
							Log in <img alt="" src="/img/login_arrow.svg" />
						</button>
					</div>
				</div>
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