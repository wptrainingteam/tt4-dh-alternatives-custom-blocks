<?php

/**
 * This file contains the functions related to registering block styles.
 *
 * @package tt4-dh-alternatives-custom-blocks
 * @since 1.0.0
 */

/**
 * Registers the custom block bindings source for the 'qa/random-quote' block.
 *
 * @return void
 */
function dh__register_block_bindings_source()
{
	register_block_bindings_source('qa/random-quote-tags', array(
		'label'              => __('Random Quote', 'dh-alternatives-custom-blocks'),
		'get_value_callback' => 'dh__random_quote_binding',
	));
}


/**
 * Retrieves a random quote from the quotable.io API and returns it as a formatted string.
 *
 * @param array $source_args The source arguments.
 * @param WP_Block $block_instance The block instance.
 * @param string $attribute_name The attribute name.
 * @return string The formatted content of paragraph.
 */
function dh__random_quote_binding($source_args, $block_instance, $attribute_name)
{

	$URL_FETCH_QUOTES = API_BASE_URL . '/quotes/random?tags=' . $source_args['tags'];
	$response = wp_remote_get($URL_FETCH_QUOTES);

	if (is_wp_error($response)) {
		return '';
	}

	$body = wp_remote_retrieve_body($response);
	$data = json_decode($body, true);
	$custom_css = ".wp-block-quote span.qa_author { font-size:20px; padding-top:20px; display:block; text-align:right; }";
	wp_add_inline_style('wp-block-quote', $custom_css);
	if (isset($data[0]['content']) && isset($data[0]['author'])) {
		return esc_html($data[0]['content']) . '<span class="qa_author">' . esc_html($data[0]['author']) . '</span>';
	}

	return '';
}
