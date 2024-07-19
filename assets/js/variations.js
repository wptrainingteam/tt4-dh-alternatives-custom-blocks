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
 * Determines if the active variation is the one we want.
 *
 * @param {*} props
 * @return {boolean} Is this the correct variation?
 */
// const isQuoteBeatlesVariation2 = ( props ) => {
// 	const {
// 		attributes: { namespace },
// 	} = props;
// 	return namespace && namespace === 'dh-quote-beatles-2';
// };

// const isQuoteBeatlesVariation = ( props ) => {
// 	const {
// 		attributes: { namespace },
// 	} = props;
// 	return namespace && namespace === 'dh-quote-beatles';
// };

// addFilter(
// 	'blockEditor.useBlockProps',
// 	'example/useBlockProps',
// 	( props, blockType, blockAttributes, clientId ) => {
// 		debugger;
// 		if ( isQuoteBeatlesVariation( props ) ) {
// 		}
// 		return props;
// 	}
// );

// /**
//  * Filter the BlockEdit object and add random quote by default.
//  *
//  * @param {Object} BlockEdit
//  */
// function addRandomQuote( BlockEdit ) {
// 	return ( props ) => {
// 		if ( isQuoteBeatlesVariation( props ) ) {
// 			console.log( '--- dh-quote-beatles variation ---' );
// 			console.log( props );
// 			return <BlockEdit { ...props } />;
// 		}

// 		if ( ! isQuoteBeatlesVariation2( props ) ) {
// 			return <BlockEdit { ...props } />;
// 		}

// 		console.log( '--- dh-quote-beatles-2 variation ---' );

// 		const { quote, author } =
// 			beatlesQuotes.quotes[
// 				Math.floor( Math.random() * beatlesQuotes.quotes.length )
// 			];

// 		props.setAttributes( { value: quote, citation: author } );
// 		// const newProps = {
// 		// 	...props,
// 		// 	attributes: {
// 		// 		...props.attributes,
// 		// 		citation: author,
// 		// 	},
// 		// 	innerBlocks: [
// 		// 		{
// 		// 			name: 'core/paragraph',
// 		// 			attributes: {
// 		// 				content: quote,
// 		// 			},
// 		// 		},
// 		// 	],
// 		// };
// 		// console.log( props );
// 		// console.log( newProps );
// 		return (
// 			<>
// 				<BlockEdit { ...props } />
// 			</>
// 		);
// 	};
// }

// addFilter(
// 	'editor.BlockEdit',
// 	'dh-alternatives-custom-blocks/add-random-quote',
// 	addRandomQuote
// );

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

	// Add the block visibility attributes.
	const quoteExtraAttributes = {
		namespace: {
			type: 'string',
		},
	};

	const { quote, author } =
		beatlesQuotes.quotes[
			Math.floor( Math.random() * beatlesQuotes.quotes.length )
		];

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes,
			...quoteExtraAttributes,
		},
		variations: [
			{
				name: 'quote-beatles-2',
				title: 'Quote Beatles-2',
				attributes: {
					namespace: 'dh-quote-beatles-2',
					citation: author,
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							content: quote,
						},
					},
				],
			},
		],
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'dh-alternatives-custom-blocks/add-attributes',
	addAttributes
);
