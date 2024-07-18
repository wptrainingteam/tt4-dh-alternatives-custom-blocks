import { registerBlockVariation } from '@wordpress/blocks';

console.log( 'Var___iations.js loaded' );

// registerBlockVariation( 'core/paragraph', {
// 	name: 'custom-paragraph',
// 	title: 'Custom Paragraph',
// 	scope: [ 'block', 'inserter', 'transform' ],
// 	keywords: [ 'paragraph' ],
// 	attributes: {
// 		namespace: 'custom',
// 	},
// 	isActive: [ 'namespace' ],
// } );

// const paragraphBlock = getBlockType( 'core/paragraph' );
// console.log( paragraphBlock );

// registerBlockType( 'custom/paragraph', {
// 	title: __( 'My First Block' ),
// 	edit: () => <div>{ __( 'Hello from the editor!' ) }</div>,
// 	save: () => <div>Hello from the saved content!</div>,
// } );

wp.blocks.registerBlockVariation( 'core/quote', {
	name: 'custom-quote',
	title: 'Custom Quote',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	innerBlocks: [
		{
			blockName: 'core/paragraph',
		},
	],
	attributes: {
		namespace: 'custom',
	},
	isActive: [ 'namespace' ],
} );
