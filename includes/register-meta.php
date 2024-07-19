<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Register custom meta field for "post" types.
 *
 * @return void
 */
function dh__register_meta()
{
	register_meta(
		'post',
		'quote-content',
		array(
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
			'default'      		=> 'Default text field',
			'sanitize_callback' => 'wp_strip_all_tags'
		)
	);
}
