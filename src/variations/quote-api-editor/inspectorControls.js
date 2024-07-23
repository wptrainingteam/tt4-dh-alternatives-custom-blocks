import { createBlock } from '@wordpress/blocks';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	Button,
	PanelBody,
	PanelRow,
	SelectControl,
} from '@wordpress/components';
import { API_ENDPOINTS, authors, tags } from '../../constants/index.js';

const { URL_RANDOM_QUOTE, URL_RANDOM_BY_AUTHOR, AUTHOR_TAG } = API_ENDPOINTS;

/**
 * Renders the inspector controls for the QuoteAPIEditor block.
 *
 * @param {Object}   props               - The component props.
 * @param {string}   props.clientId      - The unique identifier of the block.
 * @param {Function} props.setAttributes - The function to set block attributes.
 * @return {JSX.Element} The rendered inspector controls.
 */

export const QuoteAPIEditorInspectorControls = ( props ) => {
	const { clientId, setAttributes } = props;
	const [ selectedAuthor, setSelectedAuthor ] = useState( '' );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const DEFAULT_OPTION = {
		value: '',
		label: __( 'Any Author', 'quote-api' ),
	};
	const onClickUpdateData = () => {
		fetch(
			selectedAuthor
				? URL_RANDOM_BY_AUTHOR.replace( AUTHOR_TAG, selectedAuthor )
				: URL_RANDOM_QUOTE
		)
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				let author, content;
				if ( selectedAuthor ) {
					( { author, content } =
						data.results[
							Math.floor( Math.random() * data.results.length )
						] );
				} else {
					( { author, content } = data[ 0 ] );
				}

				setAttributes( {
					citation: author,
				} );
				const newInnerParagraphWithQuote = [
					createBlock( 'core/paragraph', {
						content
					} ),
				];
				replaceInnerBlocks( clientId, newInnerParagraphWithQuote );
			} );
	};

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Quote settings', 'quote-api' ) }
				initialOpen={ true }
			>
				<PanelRow>
					<SelectControl
						label={ __( 'Filter by Author', 'quote-api' ) }
						__next40pxDefaultSize
						options={ [
							DEFAULT_OPTION,
							...authors.map(
								( { slug: value, name: label } ) => ( {
									value,
									label,
								} )
							),
						] }
						value={ DEFAULT_OPTION.key }
						onChange={ ( value ) => {
							setSelectedAuthor( value );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<Button
						variant="primary"
						label={ __( 'Update data', 'quote-api' ) }
						onClick={ onClickUpdateData }
						icon="update"
						iconPosition="left"
					>
						{ __( 'Get random quote', '' ) }
					</Button>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};
