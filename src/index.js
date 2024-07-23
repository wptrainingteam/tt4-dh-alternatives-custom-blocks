import { addFilter } from '@wordpress/hooks';

import { registerQuoteAPIEditorVariation } from './block-variations/quote-api-editor';
import { registerQuoteAPIFrontendVariation } from './block-variations/quote-api-frontend';
import { registerHandDrawnPurpleStyleVariation } from './block-styles/hand-drawn-purple';

/**
 * Add the "namespace" attribute to "core/quote" block
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if ( 'core/quote' !== settings.name ) {
		return settings;
	}

	const extraAttributes = {
		namespace: {
			type: 'string',
		},
		tags: {
			type: 'string',
		},
	};

	const __experimentalBorder = {
		color: true,
		radius: true,
		style: true,
		width: true,
		__experimentalDefaultControls: {
			color: true,
			radius: true,
			style: true,
			width: true,
		},
	};
	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...extraAttributes,
		},
		supports: {
			...settings.supports,
			//__experimentalBorder,
		},
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'quote-api/add-attributes',
	addAttributes
);

registerHandDrawnPurpleStyleVariation();
registerQuoteAPIEditorVariation();
registerQuoteAPIFrontendVariation();
