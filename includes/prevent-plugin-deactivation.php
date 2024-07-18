<?php

/**
 * This file contains the functions related to filtering block metadata.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Prevent plugin deactivation
 *
 * @param  mixed $actions
 * @param  mixed $plugin_file
 * @param  mixed $plugin_data
 * @param  mixed $context
 * @return void
 */
function prevent_plugin_deactivation($actions, $plugin_file, $plugin_data, $context)
{
	// List of plugins you want to protect
	$protected_plugins = [
		'gutenberg/gutenberg.php'
	];

	// Check if the plugin is in the protected list
	if (in_array($plugin_file, $protected_plugins)) {
		// Remove the 'Deactivate' link
		if (isset($actions['deactivate'])) {
			unset($actions['deactivate']);
		}
	}



	return $actions;
}
