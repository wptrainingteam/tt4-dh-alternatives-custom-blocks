/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/authors.js":
/*!**********************************!*\
  !*** ./src/constants/authors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authors: () => (/* binding */ authors)
/* harmony export */ });
const authors = [{
  name: 'The Buddha',
  slug: 'the-buddha',
  link: 'https://en.wikipedia.org/wiki/The_Buddha'
}, {
  name: 'Ralph Waldo Emerson',
  slug: 'ralph-waldo-emerson',
  link: 'https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson'
}, {
  name: 'Albert Einstein',
  slug: 'albert-einstein',
  link: 'https://en.wikipedia.org/wiki/Albert_Einstein'
}, {
  name: 'Confucius',
  slug: 'confucius',
  link: 'https://en.wikipedia.org/wiki/Confucius'
}, {
  name: 'Laozi',
  slug: 'laozi',
  link: 'https://en.wikipedia.org/wiki/Laozi'
}, {
  name: 'Winston Churchill',
  slug: 'winston-churchill',
  link: 'https://en.wikipedia.org/wiki/Winston_Churchill'
}, {
  name: 'Abraham Lincoln',
  slug: 'abraham-lincoln',
  link: 'https://en.wikipedia.org/wiki/Abraham_Lincoln'
}, {
  name: 'Richard Bach',
  slug: 'richard-bach',
  link: 'https://en.wikipedia.org/wiki/Richard_Bach'
}, {
  name: 'Napoleon Hill',
  slug: 'napoleon-hill',
  link: 'https://en.wikipedia.org/wiki/Napoleon_Hill'
}, {
  name: 'Thomas Edison',
  slug: 'thomas-edison',
  link: 'https://en.wikipedia.org/wiki/Thomas_Edison'
}, {
  name: 'Dalai Lama',
  slug: 'dalai-lama',
  link: 'https://en.wikipedia.org/wiki/Dalai_Lama'
}, {
  name: 'Wayne Dyer',
  slug: 'wayne-dyer',
  link: 'https://en.wikipedia.org/wiki/Wayne_Dyer'
}, {
  name: 'Epictetus',
  slug: 'epictetus',
  link: 'https://en.wikipedia.org/wiki/Epictetus'
}, {
  name: 'Johann Wolfgang von Goethe',
  slug: 'johann-wolfgang-von-goethe',
  link: 'https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe'
}, {
  name: 'Alan Watts',
  slug: 'alan-watts',
  link: 'https://en.wikipedia.org/wiki/Alan_Watts'
}, {
  name: 'Aristotle',
  slug: 'aristotle',
  link: 'https://en.wikipedia.org/wiki/Aristotle'
}, {
  name: 'Tony Robbins',
  slug: 'tony-robbins',
  link: 'https://en.wikipedia.org/wiki/Tony_Robbins'
}, {
  name: 'Henry David Thoreau',
  slug: 'henry-david-thoreau',
  link: 'https://en.wikipedia.org/wiki/Henry_David_Thoreau'
}, {
  name: 'Benjamin Franklin',
  slug: 'benjamin-franklin',
  link: 'https://en.wikipedia.org/wiki/Benjamin_Franklin'
}, {
  name: 'Bruce Lee',
  slug: 'bruce-lee',
  link: 'https://en.wikipedia.org/wiki/Bruce_Lee'
}, {
  name: 'Marcus Aurelius',
  slug: 'marcus-aurelius',
  link: 'https://en.wikipedia.org/wiki/Marcus_Aurelius'
}, {
  name: 'Kahlil Gibran',
  slug: 'kahlil-gibran',
  link: 'https://en.wikipedia.org/wiki/Kahlil_Gibran'
}, {
  name: 'William Shakespeare',
  slug: 'william-shakespeare',
  link: 'https://en.wikipedia.org/wiki/William_Shakespeare'
}, {
  name: 'Woody Allen',
  slug: 'woody-allen',
  link: 'https://en.wikipedia.org/wiki/Woody_Allen'
}, {
  name: 'Seneca the Younger',
  slug: 'seneca-the-younger',
  link: 'https://en.wikipedia.org/wiki/Seneca_the_Younger'
}, {
  name: 'Eleanor Roosevelt',
  slug: 'eleanor-roosevelt',
  link: 'https://en.wikipedia.org/wiki/Eleanor_Roosevelt'
}, {
  name: 'Carl Jung',
  slug: 'carl-jung',
  link: 'https://en.wikipedia.org/wiki/Carl_Jung'
}, {
  name: 'Mark Twain',
  slug: 'mark-twain',
  link: 'https://en.wikipedia.org/wiki/Mark_Twain'
}, {
  name: 'Elbert Hubbard',
  slug: 'elbert-hubbard',
  link: 'https://en.wikipedia.org/wiki/Elbert_Hubbard'
}, {
  name: 'Mahatma Gandhi',
  slug: 'mahatma-gandhi',
  link: 'https://en.wikipedia.org/wiki/Mahatma_Gandhi'
}];

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_ENDPOINTS: () => (/* binding */ API_ENDPOINTS),
/* harmony export */   authors: () => (/* reexport safe */ _authors__WEBPACK_IMPORTED_MODULE_0__.authors),
/* harmony export */   tags: () => (/* reexport safe */ _tags__WEBPACK_IMPORTED_MODULE_1__.tags)
/* harmony export */ });
/* harmony import */ var _authors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authors */ "./src/constants/authors.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ "./src/constants/tags.js");
const QUOTABLE_API_URL = 'https://api.quotable.io';
const URL_RANDOM_QUOTE = `${QUOTABLE_API_URL}/quotes/random`;
const URL_RANDOM_BY_AUTHOR = `${QUOTABLE_API_URL}/quotes?author=<%AUTHOR%>`;
const AUTHOR_TAG = '<%AUTHOR%>';
const API_ENDPOINTS = {
  QUOTABLE_API_URL,
  URL_RANDOM_QUOTE,
  URL_RANDOM_BY_AUTHOR,
  AUTHOR_TAG
};




/***/ }),

/***/ "./src/constants/tags.js":
/*!*******************************!*\
  !*** ./src/constants/tags.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
const tags = [{
  name: 'Famous Quotes',
  slug: 'famous-quotes'
}, {
  name: 'Wisdom',
  slug: 'wisdom'
}, {
  name: 'Friendship',
  slug: 'friendship'
}, {
  name: 'Inspirational',
  slug: 'inspirational'
}, {
  name: 'Success',
  slug: 'success'
}, {
  name: 'Technology',
  slug: 'technology'
}, {
  name: 'Sports',
  slug: 'sports'
}, {
  name: 'Life',
  slug: 'life'
}, {
  name: 'Competition',
  slug: 'competition'
}, {
  name: 'Change',
  slug: 'change'
}, {
  name: 'Motivational',
  slug: 'motivational'
}, {
  name: 'Business',
  slug: 'business'
}, {
  name: 'Future',
  slug: 'future'
}, {
  name: 'Love',
  slug: 'love'
}, {
  name: 'Happiness',
  slug: 'happiness'
}, {
  name: 'History',
  slug: 'history'
}, {
  name: 'Character',
  slug: 'character'
}, {
  name: 'Humorous',
  slug: 'humorous'
}, {
  name: 'Philosophy',
  slug: 'philosophy'
}, {
  name: 'Politics',
  slug: 'politics'
}, {
  name: 'Science',
  slug: 'science'
}, {
  name: 'Film',
  slug: 'film'
}, {
  name: 'Virtue',
  slug: 'virtue'
}, {
  name: 'Freedom',
  slug: 'freedom'
}, {
  name: 'Education',
  slug: 'education'
}, {
  name: 'Truth',
  slug: 'truth'
}, {
  name: 'Religion',
  slug: 'religion'
}, {
  name: 'Self',
  slug: 'self'
}, {
  name: 'Honor',
  slug: 'honor'
}, {
  name: 'Self Help',
  slug: 'self-help'
}, {
  name: 'Faith',
  slug: 'faith'
}, {
  name: 'Spirituality',
  slug: 'spirituality'
}, {
  name: 'Social Justice',
  slug: 'social-justice'
}, {
  name: 'War',
  slug: 'war'
}, {
  name: 'Knowledge',
  slug: 'knowledge'
}, {
  name: 'Work',
  slug: 'work'
}, {
  name: 'Nature',
  slug: 'nature'
}, {
  name: 'Courage',
  slug: 'courage'
}, {
  name: 'Family',
  slug: 'family'
}, {
  name: 'Power Quotes',
  slug: 'power-quotes'
}, {
  name: 'Imagination',
  slug: 'imagination'
}, {
  name: 'Perseverance',
  slug: 'perseverance'
}, {
  name: 'Literature',
  slug: 'literature'
}, {
  name: 'Conservative',
  slug: 'conservative'
}, {
  name: 'Time',
  slug: 'time'
}, {
  name: 'Pain',
  slug: 'pain'
}, {
  name: 'Leadership',
  slug: 'leadership'
}, {
  name: 'Mathematics',
  slug: 'mathematics'
}, {
  name: 'Ethics',
  slug: 'ethics'
}, {
  name: 'Society',
  slug: 'society'
}, {
  name: 'Tolerance',
  slug: 'tolerance'
}, {
  name: 'Stupidity',
  slug: 'stupidity'
}, {
  name: 'Weakness',
  slug: 'weakness'
}, {
  name: 'Generosity',
  slug: 'generosity'
}, {
  name: 'Gratitude',
  slug: 'gratitude'
}, {
  name: 'Age',
  slug: 'age'
}, {
  name: 'Sadness',
  slug: 'sadness'
}, {
  name: 'Opportunity',
  slug: 'opportunity'
}, {
  name: 'Failure',
  slug: 'failure'
}, {
  name: 'Health',
  slug: 'health'
}, {
  name: 'Wellness',
  slug: 'wellness'
}, {
  name: 'Creativity',
  slug: 'creativity'
}, {
  name: 'Genius',
  slug: 'genius'
}, {
  name: 'Proverb',
  slug: 'proverb'
}, {
  name: 'Humor',
  slug: 'humor'
}, {
  name: 'Athletics',
  slug: 'athletics'
}];

/***/ }),

/***/ "./src/variations/quote-api-editor/index.js":
/*!**************************************************!*\
  !*** ./src/variations/quote-api-editor/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerQuoteAPIEditorVariation: () => (/* binding */ registerQuoteAPIEditorVariation)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorControls.js */ "./src/variations/quote-api-editor/inspectorControls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const quoteApiEditorVariationSettings = {
  name: 'quote-api-editor',
  description: 'A "core/quote" block variation that displays a random quote from the Quotable API',
  title: 'Quote API Editor',
  scope: ['block', 'inserter', 'transform'],
  keywords: ['quote'],
  icon: 'universal-access',
  attributes: {
    namespace: 'quote-api-editor'
  },
  isActive: ['namespace']
};

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIEditorVariation = props => {
  const {
    attributes: {
      namespace
    }
  } = props;
  return namespace && namespace === 'quote-api-editor';
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls(BlockEdit) {
  return props => {
    if (!isQuoteAPIEditorVariation(props)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__.QuoteAPIEditorInspectorControls, {
        ...props
      })]
    });
  };
}

/**
 * Register the "quote-api" block variation
 */
const registerQuoteAPIEditorVariation = () => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/quote', quoteApiEditorVariationSettings);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'quote-api-editor/add-inspector-controls', addInspectorControls);
};

/***/ }),

/***/ "./src/variations/quote-api-editor/inspectorControls.js":
/*!**************************************************************!*\
  !*** ./src/variations/quote-api-editor/inspectorControls.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteAPIEditorInspectorControls: () => (/* binding */ QuoteAPIEditorInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/index.js */ "./src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const {
  URL_RANDOM_QUOTE,
  URL_RANDOM_BY_AUTHOR,
  AUTHOR_TAG
} = _constants_index_js__WEBPACK_IMPORTED_MODULE_6__.API_ENDPOINTS;

/**
 * Renders the inspector controls for the QuoteAPIEditor block.
 *
 * @param {Object}   props               - The component props.
 * @param {string}   props.clientId      - The unique identifier of the block.
 * @param {Function} props.setAttributes - The function to set block attributes.
 * @return {JSX.Element} The rendered inspector controls.
 */

const QuoteAPIEditorInspectorControls = props => {
  const {
    clientId,
    setAttributes
  } = props;
  const [selectedAuthor, setSelectedAuthor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const DEFAULT_OPTION = {
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Any Author', 'quote-api')
  };
  const onClickUpdateData = () => {
    fetch(selectedAuthor ? URL_RANDOM_BY_AUTHOR.replace(AUTHOR_TAG, selectedAuthor) : URL_RANDOM_QUOTE).then(response => response.json()).then(data => {
      let author, content;
      if (selectedAuthor) {
        ({
          author,
          content
        } = data.results[Math.floor(Math.random() * data.results.length)]);
      } else {
        ({
          author,
          content
        } = data[0]);
      }
      setAttributes({
        citation: author
      });
      const newInnerParagraphWithQuote = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
        content
      })];
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).replaceInnerBlocks(clientId, newInnerParagraphWithQuote);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote settings', 'quote-api'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter by Author', 'quote-api'),
          __next40pxDefaultSize: true,
          options: [DEFAULT_OPTION, ..._constants_index_js__WEBPACK_IMPORTED_MODULE_6__.authors.map(({
            slug: value,
            name: label
          }) => ({
            value,
            label
          }))],
          value: DEFAULT_OPTION.key,
          onChange: value => {
            setSelectedAuthor(value);
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Update data', 'quote-api'),
          onClick: onClickUpdateData,
          icon: "update",
          iconPosition: "left",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get random quote', '')
        })
      })]
    })
  });
};

/***/ }),

/***/ "./src/variations/quote-api-frontend/index.js":
/*!****************************************************!*\
  !*** ./src/variations/quote-api-frontend/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerQuoteAPIFrontendVariation: () => (/* binding */ registerQuoteAPIFrontendVariation)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorControls.js */ "./src/variations/quote-api-frontend/inspectorControls.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const quoteApiFrontendVariationSettings = {
  name: 'quote-api-frontend',
  description: 'A "core/quote" block variation that displays a random quote from the Quotable API in the Frontend',
  title: 'Quote API Frontend',
  scope: ['block', 'inserter', 'transform'],
  icon: 'universal-access-alt',
  keywords: ['quote'],
  innerBlocks: [{
    name: 'core/paragraph',
    attributes: {
      content: 'This content will be replaced in the frontend with a random quote'
    }
  }],
  attributes: {
    namespace: 'quote-api-frontend'
  },
  isActive: ['namespace']
};

/**
 * Check if the block is the "quote-api" variation
 * @param {Object} props
 */
const isQuoteAPIFrontendVariation = props => {
  const {
    attributes: {
      namespace
    }
  } = props;
  return namespace && namespace === 'quote-api-frontend';
};

/**
 * Adds inspector controls to the BlockEdit component.
 *
 * @param {Function} BlockEdit - The BlockEdit component.
 * @return {Function} - A modified version of the BlockEdit component with added inspector controls.
 */
function addInspectorControls(BlockEdit) {
  return props => {
    if (!isQuoteAPIFrontendVariation(props)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inspectorControls_js__WEBPACK_IMPORTED_MODULE_2__.QuoteAPIFrontendInspectorControls, {
        ...props
      })]
    });
  };
}

/**
 * Register the "quote-api" block variation
 */
const registerQuoteAPIFrontendVariation = () => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockVariation)('core/quote', quoteApiFrontendVariationSettings);
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'quote-api-editor/add-inspector-controls', addInspectorControls);
};

/***/ }),

/***/ "./src/variations/quote-api-frontend/inspectorControls.js":
/*!****************************************************************!*\
  !*** ./src/variations/quote-api-frontend/inspectorControls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuoteAPIFrontendInspectorControls: () => (/* binding */ QuoteAPIFrontendInspectorControls)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/index.js */ "./src/constants/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








/**
 * Renders the inspector controls for the QuoteAPIFrontend block.
 *
 * @param {Object} props          - The component props.
 * @param {string} props.clientId - The unique identifier of the block.
 * @return {JSX.Element} The rendered inspector controls.
 */

const QuoteAPIFrontendInspectorControls = props => {
  const {
    clientId,
    setAttributes,
    attributes: {
      tags: initialTags
    }
  } = props;
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)('core/block-editor');
  const [selectedTags, setSelectedTags] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(initialTags ? initialTags.split('|') : []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Quote settings', 'quote-api'),
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FormTokenField, {
          __nextHasNoMarginBottom: true,
          label: "Type a Tag",
          onChange: token => {
            setSelectedTags(token);
            const newInnerParagraphWithQuote = [(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {
              metadata: {
                bindings: {
                  content: {
                    source: 'qa/random-quote-tags',
                    args: {
                      tags: token.join('|')
                    }
                  }
                }
              },
              content: 'This content will be replaced in the frontend with a random quote from either of the tags: ' + token.join(', ')
            })];
            replaceInnerBlocks(clientId, newInnerParagraphWithQuote);
            setAttributes({
              tags: token.join('|')
            });
          },
          suggestions: _constants_index_js__WEBPACK_IMPORTED_MODULE_6__.tags.map(tag => tag.name),
          value: selectedTags
        })
      })
    })
  });
};

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations_quote_api_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations/quote-api-editor */ "./src/variations/quote-api-editor/index.js");
/* harmony import */ var _variations_quote_api_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations/quote-api-frontend */ "./src/variations/quote-api-frontend/index.js");




/**
 * Add the "namespace" attribute to "core/quote" block
 * @param {Object} settings
 */
function addAttributes(settings) {
  if ('core/quote' !== settings.name) {
    return settings;
  }
  const extraAttributes = {
    namespace: {
      type: 'string'
    },
    tags: {
      type: 'string'
    }
  };
  const __experimentalBorder = {
    color: true,
    radius: true,
    style: true,
    width: true,
    __experimentalDefaultControls: {
      color: true,
      radius: true,
      style: true,
      width: true
    }
  };
  const newSettings = {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...extraAttributes
    },
    supports: {
      ...settings.supports
      // __experimentalBorder,
      // shadow: true
    }
  };
  return newSettings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'quote-api/add-attributes', addAttributes);

// registerQuoteAPIEditorVariation();
// registerQuoteAPIFrontendVariation();
/******/ })()
;
//# sourceMappingURL=index.js.map