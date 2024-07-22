import { addFilter } from '@wordpress/hooks';

import { registerQuoteAPIEditorVariation } from './block-variations/quote-api-editor';
import { registerQuoteAPIFrontendVariation } from './block-variations/quote-api-frontend';
import { registerHandDrawnPurpleStyleVariation } from './block-styles/hand-drawn-purple';

/**
 * Add the "namespace" attribute to "core/quote" block
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if (
		'core/quote' !== settings.name &&
		'core/paragraph' !== settings.name
	) {
		return settings;
	}

	let extraAttributes = {
		namespace: {
			type: 'string',
		},
	};

	if ( 'core/paragraph' === settings.name ) {
		extraAttributes = {
			tags: {
				type: 'string',
			},
		};
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...extraAttributes,
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
