import { registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { QuoteAPIFrontendInspectorControls } from './inspectorControls.js';

const quoteApiFrontendVariationSettings = {
	name: 'quote-api-frontend',
	description:
		'A "core/quote" block variation that displays a random quote from the Quotable API in the Frontend',
	title: 'Quote API Frontend',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	innerBlocks: [
		{
			name: 'core/paragraph',
			attributes: {
				content:
					'This content will be replaced in the frontend with a random quote',
			},
		},
	],
	attributes: {
		namespace: 'quote-api-frontend',
	},
	isActive: [ 'namespace' ],
};

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIFrontendVariation = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === 'quote-api-frontend';
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		if ( ! isQuoteAPIFrontendVariation( props ) ) {
			return <BlockEdit { ...props } />;
		}
		return (
			<>
				<BlockEdit { ...props } />
				<QuoteAPIFrontendInspectorControls { ...props } />
			</>
		);
	};
}

/**
 * Register the "quote-api" block variation
 */
export const registerQuoteAPIFrontendVariation = () => {
	registerBlockVariation( 'core/quote', quoteApiFrontendVariationSettings );
	addFilter(
		'editor.BlockEdit',
		'quote-api-editor/add-inspector-controls',
		addInspectorControls
	);
};
