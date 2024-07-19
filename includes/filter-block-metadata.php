<?php

/**
 * This file contains the functions related to filtering block metadata.
 *
 * @package wp-dev-box
 * @since 1.0.0
 */

/**
 * Filters core/quote block metadata to add a new style variation
 * to its metadata before registering it.
 *
 * @param array $metadata Metadata for registering a block type.
 * @return array
 */
function filter_block_metadata($metadata)
{
	if ('core/quote' === $metadata['name']) {
		$new_style = array(
			'name'  => 'hand-drawn-purple',
			'label' => __('HD Purple', 'tt4-block-styles'),
		);
		$metadata['styles'][] = $new_style;

		$border_support = array(
				'color'  => true,
				'radius'  => true,
				'style'  => true,
				'width'  => true,
				"__experimentalDefaultControls" => array(
					"color" => true,
					"radius" => true,
					"style" => true,
					"width" => true
					)
				);
		$metadata['supports']["__experimentalBorder"] = $border_support;

		// $attr_namespace = array(
		// 	'type'  => 'string'
		// );
		// $metadata['attributes']["namespace"] = $attr_namespace;
	}

	if ('core/paragraph' === $metadata['name']) {
		$attr_namespace = array(
			'type'  => 'string'
		);

		$metadata['attributes']["namespace"] = $attr_namespace;
	}


	return $metadata;
}
