import { registerBlockVariation } from '@wordpress/blocks';
import { quotes } from '../json/beatles-quotes.json';

registerBlockVariation( 'core/quote', {
	name: 'quote-beatles',
	title: 'Quote Beatles',
	scope: [ 'block', 'inserter', 'transform' ],
	keywords: [ 'quote' ],
	innerBlocks: [
		[
			'core/paragraph',
			{
				metadata: {
					bindings: {
						content: {
							source: 'core/post-meta',
							args: {
								key: 'quote-content',
							},
						},
					},
				},
				content:
					quotes[ Math.floor( Math.random() * quotes.length ) ].quote,
			},
		],
	],
	attributes: {
		namespace: 'dh-quote-beatles',
		citation: 'The Beatles',
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
