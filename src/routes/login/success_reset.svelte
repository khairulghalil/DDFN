<!-- script -->
<script>
	import { pages } from './login.js';
	let old_password	= '',
		new_password	= '',
        status      	= '';

	function viewPassword(id) {
		const password = document.querySelector("#" + id);
		const type = password.getAttribute("type") === "password" ? "text" : "password";
		password.setAttribute("type", type);

		const i = document.querySelector("#togglePassword-" + id)
		type === "text" ? i.className = "bi-eye-fill" : i.className = "bi-eye-slash-fill"
	}
</script>

<!-- body -->
<div class="d-flex justify-content-center align-items-center">
	<div class="row" style="width: 380px">
		<div class="col-2">
			<img alt="" src="/img/login_smiley1.svg" />
		</div>
		<div class="col-10">
			<h2 class="lh-1">Congratulations</h2>
			<h2 class="lh-1">You're all set</h2>
		</div>
	</div>
</div>
<p class="mt-5">You have successfully reset your password</p>
<div class="d-flex justify-content-center align-items-center">
	<div class="login-form login-reset-success mt-4">
		<span>Please return to Login page and login again with your new password</span>
		
		<div class="mt-5">
			<a href="{'/login'}">
				<button type="button" class="login-btn mt-3 btn-primary" on:click={() => pages.set('new_password')}>
					Return to Login <img alt="" src="/img/login_arrow.svg" />
				</button>
			</a>
		</div>
	</div>
</div>

<!-- style -->