<?php

/**
 * This file contains the functions related to enqueuing assets.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Enqueues the `assets/js/block-variations.js` file, which is used to create
 * custom block styles.
 *
 * @link  https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
function bse__enqueue_block_variations_script()
{
	$script_asset = include THEME_DIR . '/build/js/variations.asset.php';

	wp_enqueue_script(
		'block-variations-js',
		get_theme_file_uri('/build/js/variations.js'),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}


// function bse__enqueue_quote_block_styles()
// {
// 	wp_enqueue_block_style(
// 		'core/quote',
// 		array(
// 			'handle' => 'boxed-powderblue-style',
// 			'src'    => plugin_dir_url(__FILE__) . 'build/style.css',
// 			'ver'    => wp_get_theme()->get('Version'),
// 			'path'   => plugin_dir_path(__FILE__) . 'build/style.css',
// 		)
// 	);
// }
