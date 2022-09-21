<!-- script -->
<script>
	import Navbar from "../../component/nav.svelte";
	import { menus, sub_menus } from '../../component/nav.js';

	// Define active and sub-active menu in navigation bar.
	menus.set('crop_model_menu');
	sub_menus.set('crop_model_submenu2')
</script>

<!-- body -->
<svelte:head>
	<title>Crop Model</title>
</svelte:head>

<Navbar></Navbar>

<div>
	<div class="main-container">
		this is crop model draft
	</div>
</div>