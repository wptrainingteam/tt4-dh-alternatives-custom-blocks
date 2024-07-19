<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */


/**
 * projectslug_register_block_bindings
 *
 * @return void
 */
function dh__register_block_bindings()
{
	register_block_bindings_source('dh/random-quote', array(
		'label'              => __('Random Quote', 'dh-alternatives-custom-blocks'),
		'get_value_callback' => 'dh__random_quote_binding',
	));
}

/**
 * projectslug_copyright_binding
 *
 * @return void
 */
function dh__random_quote_binding()
{
	$response = wp_remote_get('https://api.quotable.io/random');

	if (is_wp_error($response)) {
		return '';
	}

	$body = wp_remote_retrieve_body($response);
	$data = json_decode($body, true);

	if (isset($data['content']) && isset($data['author'])) {
		return esc_html($data['content']);
	}

	return '';
}
