<?php

/**
 * This file contains the functions related to filtering block metadata.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */


/**
 * Regiater
 *
 * @return void
 */
function bse__register_plugins()
{
	$plugins = [
		[
		'name' => 'Gutenberg',
		'slug' => 'gutenberg',
		'required' => false
		]
	];

	$config = [
	'id' => 'tt4-dh-alternatives-custom-blocks',
	'menu' => 'tgmpa-install-plugins',
	'parent_slug' => 'themes.php',
	'capability' => 'edit_theme_options',
	'has_notices' => true,
	'dismissable' => true
	];

	tgmpa($plugins, $config);
}
