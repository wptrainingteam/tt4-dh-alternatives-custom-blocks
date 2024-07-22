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
function dh__enqueue_block_variations_script()
{
	$script_asset = include THEME_DIR . '/build/index.asset.php';
	wp_enqueue_script(
		'quote-variations-js',
		get_theme_file_uri('build/index.js'),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);
}
