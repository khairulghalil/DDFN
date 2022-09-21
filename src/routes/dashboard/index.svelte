<!-- script -->
<script>
	import Navbar from "../../component/nav.svelte"
	import { menus, sub_menus } from '../../component/nav.js';

	// Define active and sub-active menu in navigation bar.
	menus.set('dashboard_menu');
	sub_menus.set('')
</script>

<!-- body -->
<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<Navbar></Navbar>

<div>
	<div class="main-container">
		this is dashboard
	</div>
</div>