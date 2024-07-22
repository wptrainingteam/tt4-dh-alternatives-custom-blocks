import { createBlock } from '@wordpress/blocks';
import { useDispatch, select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { PanelBody, PanelRow, FormTokenField } from '@wordpress/components';
import { tags } from '../../constants/index.js';

/**
 * Renders the inspector controls for the QuoteAPIFrontend block.
 *
 * @param {Object} props          - The component props.
 * @param {string} props.clientId - The unique identifier of the block.
 * @return {JSX.Element} The rendered inspector controls.
 */

export const QuoteAPIFrontendInspectorControls = ( props ) => {
	const { clientId } = props;
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const { getBlock } = select( 'core/block-editor' );

	const idInnerParagraph = getBlock( clientId ).innerBlocks[ 0 ].clientId;
	const { tags: initialTags } = getBlock( idInnerParagraph ).attributes;

	const [ selectedTags, setSelectedTags ] = useState(
		initialTags ? initialTags.split( '|' ) : []
	);

	const suggestionsTags = tags.map( ( tag ) => tag.name );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Quote settings', 'quote-api' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<FormTokenField
						__nextHasNoMarginBottom
						label="Type a Tag"
						onChange={ ( token ) => {
							setSelectedTags( token );
							const newInnerParagraphWithQuote = [
								createBlock( 'core/paragraph', {
									metadata: {
										bindings: {
											content: {
												source: 'qa/random-quote-tags',
												args: {
													tags: token.join( '|' ),
												},
											},
										},
									},
									tags: token.join( '|' ),
									content:
										'This content will be replaced in the frontend with a random quote from either of the tags: ' +
										token.join( ', ' ),
								} ),
							];
							replaceInnerBlocks(
								clientId,
								newInnerParagraphWithQuote
							);
						} }
						suggestions={ suggestionsTags }
						value={ selectedTags }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};
