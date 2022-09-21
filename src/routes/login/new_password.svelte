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
			<h2 class="lh-1">Reset</h2>
			<h2 class="lh-1">Password</h2>
		</div>
	</div>
</div>
<p class="mt-5">Now, let's reset your password</p>
<div class="d-flex justify-content-center align-items-center">
	<div class="login-form mt-4">
		<div class="form-group text-start">
			<label for="" class="input-label fw-bold mb-2 ">New Password</label><label for="" class="star">*</label>
			<div class="input-group">
				<input type="password" id="old-passwordTxt" class="form-control" class:err-input="{status === 'false'}" bind:value={old_password} on:click="{() => status = ''}"/>
				<i class="bi bi-eye-slash-fill" id="togglePassword-old-passwordTxt" on:click={() => viewPassword('old-passwordTxt')} style="cursor: pointer; margin-top: 10px; margin-left: -35px; z-index: 100;"></i>
			</div>

			<label for="" class="input-label fw-bold mt-4 mb-2 ">Confirm New Password</label><label for="" class="star">*</label>
			<div class="input-group">
				<input type="password" id="new-passwordTxt" class="form-control" class:err-input="{status === 'false'}" bind:value={new_password} on:click="{() => status = ''}"/>
				<i class="bi bi-eye-slash-fill" id="togglePassword-new-passwordTxt" on:click={() => viewPassword('new-passwordTxt')} style="cursor: pointer; margin-top: 10px; margin-left: -35px; z-index: 100;"></i>
			</div>

			<span class="d-flex mt-1">Your password must be at least 8 characters and contains uppercase number and symbol</span>
		</div>
		
		<div class="mt-1">
			<a href="{'/login'}">
				<button type="button" class="reset-btn mt-5 btn-secondary me-1">
					Cancel
				</button>
			</a>
			<button type="button" class="reset-btn mt-5 btn-primary ms-1" on:click={() => pages.set('success_reset')}>
				Save
			</button>
		</div>
	</div>
</div>

<!-- style -->