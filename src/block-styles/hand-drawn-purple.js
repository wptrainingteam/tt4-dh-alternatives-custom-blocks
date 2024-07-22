import { registerBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Register the "hand-drawn-purple" style variation
 */
export const registerHandDrawnPurpleStyleVariation = () => {
	registerBlockStyle( 'core/image', {
		name: 'hand-drawn-purple',
		label: __( 'HD Purple', 'tt4-block-styles' ),
	} );
};
