<script>
	import { onMount } from 'svelte';
	import { menus, sub_menus, expand, colorLink, colorSubLink } from './nav.js';

	let menus_value, sub_menus_value, expand_value;

	menus.subscribe(value => { menus_value = value; });
	sub_menus.subscribe(value => { sub_menus_value = value; });
	expand.subscribe(value => { expand_value = value; });

	onMount(() => {
		const showNavbar = (toggleId, navId, bodyId, headerId) => {
			const toggle = document.getElementById(toggleId),
				nav = document.getElementById(navId),
				bodypd = document.getElementById(bodyId),
				headerpd = document.getElementById(headerId),
				// navhead = document.getElementById('nav_head'),
				navheadlogo = document.getElementById('nav_head_logo'),
				navheadcap = document.getElementById('nav_head_capital'),
				navprofiletitle = document.getElementById('user_title');

			if (toggle && nav && bodypd && headerpd) {
				toggle.addEventListener('click', () => {
					nav.classList.toggle('show');
					bodypd.classList.toggle('body-pd');
					headerpd.classList.toggle('body-pd');
					// navhead.classList.toggle('nav_header');
					navheadlogo.classList.toggle('d-none');
					navheadcap.classList.toggle('d-none');
					navprofiletitle.classList.toggle('d-none');

					document.body.classList.contains('body-pd') ? expand.set('true') : expand.set('false') 
				});
			}
		};

		showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

		const linkColor = document.querySelectorAll('.nav_link');
		const linkSubColor = document.querySelectorAll('.nav_list_body');
		const linkNavLink = document.querySelectorAll('.nav_link');
		const linkSubMenu = document.querySelectorAll('.sub_menu');

		linkNavLink.forEach((l) => {
			l.setAttribute('onmouseenter', 'show($(this).parent().attr("id"))'),
				l.setAttribute('onmouseleave', 'hide($(this).parent().attr("id"))');
		});
		linkSubMenu.forEach((l) => {
			l.setAttribute('onmouseenter', 'show($(this).parent().attr("id"))'),
				l.setAttribute('onmouseleave', 'hide($(this).parent().attr("id"))');
		});

		linkColor.forEach((l) => l.addEventListener('click', colorLink));
		linkSubColor.forEach((l) => l.addEventListener('click', colorSubLink));

		document.getElementById(menus_value).classList.add('active')
		if (sub_menus_value != '') {
			document.getElementById(sub_menus_value).classList.add('sub-active')
		}
	});
	
</script>

<!-- body -->
<body id="body-pd" class={ expand_value === 'true' ? 'nav-body body-pd' : 'nav-body' }>
	<header id="header" class={ expand_value === 'true' ? 'header body-pd' : 'header' }>
		<img class="collapse_icon" alt="" src="/img/collapse_icon.svg" id="header-toggle" />
		<div class="header_toggle" />
		<div class="row">
			<div class="header_img">
				<img class="ellipse-icon" alt="" src="/img/bell_icon.svg" />
			</div>
			<div class="header_img">
				<img class="ellipse-icon" alt="" src="/img/logout_icon.svg" />
			</div>
		</div>
	</header>
	<div class="l-navbar" id="nav-bar" class:show="{expand_value === 'true'}">
		<nav class="nav">
			<div>
				<div class="nav_header">
					<a href="{'/dashboard'}">
						<div id="nav_head_logo" class={ expand_value === 'true' ? 'nav_head' : 'nav_head d-none' }>
							<img alt="" src="/img/fefifo_logo_sidebar.svg" width= 100px;/>
						</div>
						<div id="nav_head_capital" class={ expand_value === 'true' ? 'nav_head_cap d-none' : 'nav_head_cap' }>
							<img alt="" src="/img/fefifo_capital.svg"  width= 30px;/>
						</div>
					</a>
				</div>
				<div class="row user_profile">
					<div class="user_img col-2">
						<img class="ellipse-icon" alt="" src="/img/nav_profile.png" width="40px" />
					</div>
					<div id="user_title" class={ expand_value === 'true' ? 'user_title col-10' : 'user_title col-10 d-none' }>
						<p>Welcome Khairul Ghalil</p>
						<span>Last Login: 16 Aug 2022</span>
					</div>
				</div>

				<div class="nav_list">
					<!-- ******** MENU ******** -->

					<!-- 
					To add menu, copy existing template and make sure 
					to put ID on parent div and every href inside the
					parent div.
					-->

					<!-- dashboard -->
					<div id="dashboard">
						<a href="{'/dashboard'}" id="dashboard_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_dashboard.svg" />
							<div class="row">
								<div class="col-10 nav_name">Dashboard</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<!-- <img alt="" src="/img/nav_arrow.svg" /> -->
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Dashboard</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
						</div>
					</div>

					<!-- crop_model -->
					<div id="crop_model">
						<a href="{'#'}" id="crop_model_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_crop_model.png" />
							<div class="row">
								<div class="col-10 nav_name">Crop Model</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Crop Model</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'/crop-model'}" id="crop_model_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_edit_crop.svg"/>
								</div>
								<div class="col-10">View Crop Model</div>
							</a>
							<a href="{'/crop-model/draft'}" id="crop_model_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_draft.svg"/>
								</div>
								<div class="col-10">Draft</div>
							</a>
						</div>
					</div>

					<!-- sop -->
					<div id="sop">
						<a href="{'#'}" id="sop_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_sop.png" />
							<div class="row">
								<div class="col-10 nav_name">SOP</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">SOP</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="sop_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_edit_sop.svg"/>
								</div>
								<div class="col-10">View SOP</div>
							</a>
							<a href="{'#'}" id="sop_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_draft.svg"/>
								</div>
								<div class="col-10">Draft</div>
							</a>
						</div>
					</div>

					<!-- farm -->
					<div id="farm">
						<a href="{'#'}" id="farm_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_farm.png" />
							<div class="row">
								<div class="col-10 nav_name">Farm</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Farm</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="farm_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_edit_farm.svg"/>
								</div>
								<div class="col-10">View Farm</div>
							</a>
							<a href="{'#'}" id="farm_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_draft.svg"/>
								</div>
								<div class="col-10">Draft</div>
							</a>
						</div>
					</div>

					<!-- personnel_setup -->
					<div id="personnel_setup">
						<a href="{'#'}" id="personnel_setup_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_personnel_setup.png" />
							<div class="row">
								<div class="col-10 nav_name">Personnel</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Personnel</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="personnel_setup_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_edit_agropreneur.svg"/>
								</div>
								<div class="col-10">Personnel Setup</div>
							</a>
							<a href="{'#'}" id="personnel_setup_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_space_assignment.svg"/>
								</div>
								<div class="col-10">View Space Assignment</div>
							</a>
							<a href="{'#'}" id="personnel_setup_submenu3" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_draft.svg"/>
								</div>
								<div class="col-10">Draft</div>
							</a>
						</div>
					</div>

					<!-- agropreneur_fund -->
					<div id="agropreneur_fund">
						<a href="{'#'}" id="agropreneur_fund_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_agropreneur_fund.png" />
							<div class="row">
								<div class="col-10 nav_name">Fund Management</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu" id="kk" data-popper-placement="black"> <!-- popup sidebar -->
							
							<div class="nav_list_header">Fund Management</div> <!-- popup sidebar header -->

							<!-- popup sidebar body -->
							<a href="{'#'}" id="agropreneur_fund_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_pymt_transfer_req.svg"/>
								</div>
								<div class="col-10">Payment Transfer Req.</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_emergency_req.svg"/>
								</div>
								<div class="col-10">Emergency Drawdown Req.</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu3" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_ewallet.svg"/>
								</div>
								<div class="col-10">E-Wallet</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu4" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_pay_revision_req.svg"/>
								</div>
								<div class="col-10">Pay Revision Req.</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu5" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_loan_record.svg"/>
								</div>
								<div class="col-10">Loan Record</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu6" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_security_deposit.svg"/>
								</div>
								<div class="col-10">Security Deposit</div>
							</a>
							<a href="{'#'}" id="agropreneur_fund_submenu7" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_util_misc_bill.svg"/>
								</div>
								<div class="col-10">Util $ Misc. Bill</div>
							</a>
						</div>
					</div>
					
					<!-- #
					#
					#
					#
					#
					#
					#
					# -->
					
					<!-- inventory -->
					<div id="inventory">
						<a href="{'#'}" id="inventory_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_inventory.png" />
							<div class="row">
								<div class="col-10 nav_name">Inventory</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Inventory</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="inventory_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_tax_maintenance.svg"/>
								</div>
								<div class="col-10">Tax Master Maint.</div>
							</a>
							<a href="{'#'}" id="inventory_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_agri_input_maintenance.svg"/>
								</div>
								<div class="col-10">Agri-Input Master Maint.</div>
							</a>
							<a href="{'#'}" id="inventory_submenu3" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_supplier_maintenance.svg"/>
								</div>
								<div class="col-10">Supplier Master Maint.</div>
							</a>
							<a href="{'#'}" id="inventory_submenu4" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_agri_input_purchase_req.svg"/>
								</div>
								<div class="col-10">Agri-Input Purchase Req.</div>
							</a>
						</div>
					</div>

					<!-- harvest_sales -->
					<div id="harvest_sales">
						<a href="{'#'}" id="harvest_sales_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_harvest_sales.png" />
							<div class="row">
								<div class="col-10 nav_name">Sales & Logistics</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Sales & Logistics</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="harvest_sales_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_log_master_maint.svg"/>
								</div>
								<div class="col-10">Logistic Master Maint.</div>
							</a>
							<a href="{'#'}" id="harvest_sales_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_off_taker_master_maint.svg"/>
								</div>
								<div class="col-10">Off-Taker Master Maint.</div>
							</a>
							<a href="{'#'}" id="harvest_sales_submenu3" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_sales_log_mgmt.svg"/>
								</div>
								<div class="col-10">Sales & Logistic Mgmt.</div>
							</a>
						</div>
					</div>

					<!-- archived_records -->
					<div id="archived_records">
						<a href="{'#'}" id="archived_records_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_archive_records.png" />
							<div class="row">
								<div class="col-10 nav_name">Archived Records</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<!-- <img alt="" src="/img/nav_arrow.svg" /> -->
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Archived Records</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
						</div>
					</div>

					<!-- settings -->
					<div id="settings">
						<a href="{'#'}" id="settings_menu" class="nav_link"> <!-- sidebar menu -->
							<img class="ico" alt="" src="/img/nav_settings.svg" />
							<div class="row">
								<div class="col-10 nav_name">Settings</div>
								<div class="col-2 nav_arrow d-flex justify-content-center align-items-center">
									<img alt="" src="/img/nav_arrow.svg" />
								</div>
							</div>
						</a>
						<div role="tooltip" class="nav_list sub_menu"> <!-- popup sidebar -->
							<div class="nav_list_header">Settings</div> <!-- popup sidebar header -->
							<!-- popup sidebar body -->
							<a href="{'#'}" id="settings_submenu1" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_edit_crop.svg"/>
								</div>
								<div class="col-10">Edit Dropdown List</div>
							</a>
							<a href="{'#'}" id="settings_submenu2" class="nav_list_body row">
								<div class="col-2">
									<img alt="" src="/img/nav_draft.svg"/>
								</div>
								<div class="col-10">Roles & Permissions</div>
							</a>
						</div>
					</div>

					<!-- ******** END MENU ******** -->
				</div>
			</div>
		</nav>
	</div>
</body>

<!-- style -->
<style>
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
	:root {
		--header-height: 3rem;
		--nav-width: 68px;
		--first-color: blue;
		--first-color-light: #afa5d9;
		--white-color: #f7f6fb;
		--body-font: 'Nunito', sans-serif;
		--normal-font-size: 1rem;
		--z-fixed: 100;
	}
	*,
	::before,
	::after {
		box-sizing: border-box;
	}
	body {
		position: relative;
		margin: var(--header-height) 0 0 0;
		padding: 0 1rem;
		font-family: var(--body-font);
		font-size: var(--normal-font-size);
		transition: 0.5s;
	}
	@media screen and (min-width: 768px) {
		body {
			margin: calc(var(--header-height) + 1rem) 0 0 0;
			padding-left: calc(var(--nav-width) + 2rem);
		}
		.header {
			height: calc(var(--header-height) + 1rem);
			padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
		}
		.header_img {
			width: 40px;
			height: 40px;
		}
		.header_img img {
			width: 45px;
		}
		.l-navbar {
			left: 0;
			padding: 0rem 0 0 0;
		}
		.show {
			width: calc(var(--nav-width) + 156px);
		}
		.body-pd {
			padding-left: calc(var(--nav-width) + 188px);
		}
	}
</style>
