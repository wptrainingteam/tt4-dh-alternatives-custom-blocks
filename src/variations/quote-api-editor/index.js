import { registerBlockVariation } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { QuoteAPIEditorInspectorControls } from './inspectorControls.js';

const quoteApiEditorVariationSettings = {
	name: 'quote-api-editor',
	description:
		'A "core/quote" block variation that displays a random quote from the Quotable API',
	title: 'Quote API Editor',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	icon: 'universal-access',
	attributes: {
		namespace: 'quote-api-editor',
	},
	isActive: [ 'namespace' ],
};

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIEditorVariation = ( props ) => {
	const {
		attributes: { namespace },
	} = props;
	return namespace && namespace === 'quote-api-editor';
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		if ( ! isQuoteAPIEditorVariation( props ) ) {
			return <BlockEdit { ...props } />;
		}
		return (
			<>
				<BlockEdit { ...props } />
				<QuoteAPIEditorInspectorControls { ...props } />
			</>
		);
	};
}

/**
 * Register the "quote-api" block variation
 */
export const registerQuoteAPIEditorVariation = () => {
	registerBlockVariation( 'core/quote', quoteApiEditorVariationSettings );
	addFilter(
		'editor.BlockEdit',
		'quote-api-editor/add-inspector-controls',
		addInspectorControls
	);
};
