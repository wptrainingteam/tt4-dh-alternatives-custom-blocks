<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Registers custom block styles on the `init` hook.
 *
 * @since 1.0.0
 * @link  https://developer.wordpress.org/reference/functions/register_block_style/
 */
function dh__register_block_styles()
{
	register_block_style(
		'core/quote',
		array(
			'name'         => 'hand-drawn-red',
			'label'        => __('HD Red', 'tt4-block-styles')
		)
	);
}
