/*jslint browser: true, regexp: true */
/*global jQuery, $, Rainbow */

$(function () {
	'use strict';

	Rainbow.extend('java', [
		{
			name: 'string',
			pattern: /('.*?')/g
		},
		{
			name: 'keyword',
			pattern: /\b(select|from|where|list|testmethod)\b/gi
		},
		{
			name: 'keyword',
			pattern: /(test\.stoptest|test\.starttest)/gi
		}
	]);

	// Deck initialization
	$.deck('.slide');
});