import { registerBlockVariation, registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { beatlesQuotes } from './beatles-quotes.js';
import { __ } from '@wordpress/i18n';

// The CSS for this block style is located in the `style.css` file.
registerBlockStyle( 'core/image', {
	name: 'hand-drawn-purple',
	label: __( 'HD Purple', 'tt4-block-styles' ),
} );

const { quote, author } =
	beatlesQuotes.quotes[
		Math.floor( Math.random() * beatlesQuotes.quotes.length )
	];

registerBlockVariation( 'core/quote', {
	name: 'quote-beatles',
	title: 'Quote Beatles',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	innerBlocks: [
		{
			name: 'core/paragraph',
			attributes: {
				content: quote,
			},
		},
	],
	attributes: {
		namespace: 'dh-quote-beatles',
		citation: author,
	},
	isActive: [ 'namespace' ],
} );

registerBlockVariation( 'core/quote', {
	name: 'quote-random',
	title: 'Quote Random',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	innerBlocks: [
		[
			'core/paragraph',
			{
				metadata: {
					bindings: {
						content: {
							source: 'dh/random-quote',
						},
					},
				},
			},
		],
	],
	attributes: {
		namespace: 'dh-quote-random',
	},
	isActive: [ 'namespace' ],
} );

/**
 * Add the attributes needed for button icons.
 *
 * @since 0.1.0
 * @param {Object} settings
 */
function addAttributes( settings ) {
	if ( 'core/quote' !== settings.name ) {
		return settings;
	}

	// Add "namespace" new attribute to the block.
	const quoteExtraAttributes = {
		namespace: {
			type: 'string',
		},
	};

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...quoteExtraAttributes,
		}
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'dh-alternatives-custom-blocks/add-attributes',
	addAttributes
);
