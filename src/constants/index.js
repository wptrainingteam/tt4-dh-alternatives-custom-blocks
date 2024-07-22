const QUOTABLE_API_URL = 'https://api.quotable.io';
const URL_RANDOM_QUOTE = `${ QUOTABLE_API_URL }/quotes/random`;
const URL_RANDOM_BY_AUTHOR = `${ QUOTABLE_API_URL }/quotes?author=<%AUTHOR%>`;

const AUTHOR_TAG = '<%AUTHOR%>';

const API_ENDPOINTS = {
	QUOTABLE_API_URL,
	URL_RANDOM_QUOTE,
	URL_RANDOM_BY_AUTHOR,
	AUTHOR_TAG,
};

export { API_ENDPOINTS };
export { authors } from './authors';
export { tags } from './tags';
