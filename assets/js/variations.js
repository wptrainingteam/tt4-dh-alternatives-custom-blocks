import {
	registerBlockVariation,
	registerBlockStyle,
	createBlock,
} from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useInnerBlocksProps,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow } from '@wordpress/components';

import { beatlesQuotes } from './beatles-quotes.js';

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
	name: 'quote-api',
	title: 'Quote API',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	attributes: {
		namespace: 'dh-quote-api',
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
		},
	};

	return newSettings;
}

addFilter(
	'blocks.registerBlockType',
	'dh-alternatives-custom-blocks/add-attributes',
	addAttributes
);

const isQuoteAPIVariation = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === 'dh-quote-api';
};

/**
 * Filter the BlockEdit object and add icon inspector controls to button blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
 */
function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		if (
			props.name !== 'core/quote' ||
			( props.name === 'core/quote' && ! isQuoteAPIVariation( props ) )
		) {
			return <BlockEdit { ...props } />;
		}

		console.log( props );
		const { setAttributes } = props;
		// const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

		const onClickUpdateData = () => {
			fetch( 'https://api.quotable.io/random' )
				.then( ( response ) => response.json() )
				.then( ( data ) => {
					setAttributes( {
						citation: data.author,
					} );
					// const newInnerParagraphWithQuote = [
					// 	createBlock( 'core/paragraph', {
					// 		content: data.quote,
					// 	} ),
					// ];
					// replaceInnerBlocks( clientId, newInnerParagraphWithQuote );
				} );
		};

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Quote settings', 'enable-button-icons' ) }
						initialOpen={ true }
					>
						<PanelRow>
							<Button
								label={ __(
									'Update data',
									'enable-button-icons'
								) }
								onClick={ onClickUpdateData }
							>
								{ __( 'Update data', 'enable-button-icons' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'enable-button-icons/add-inspector-controls',
	addInspectorControls
);
