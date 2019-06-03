module.exports = {
	evaluate: 'function (node, options, virtualNode, context) {\n<%=source%>\n}',
	after: 'function (results, options) {\n<%=source%>\n}',
	gather: 'function (context, options) {\n<%=source%>\n}',
	matches: 'function (node, virtualNode, context) {\n<%=source%>\n}',
	before: 'function (context, options) {\n<%=source%>\n}',
	source: '(function () {\n<%=source%>\n}())',
	commons: '<%=source%>'
};
