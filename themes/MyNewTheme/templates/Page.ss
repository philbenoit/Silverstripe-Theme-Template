<!doctype html>
<html class="no_js">
<head>
	<% base_tag %>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><% if MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
    $MetaTags(false)
    <meta name="viewport" content="width=device-width">
    <% require themedCSS(style) %>
    <link rel="shortcut icon" href="$ThemeDir/img/favicon.ico" />
</head>
<body>
	<!-- bypass block -->
	<!-- The bypass block is used by screen readers to skip large blocks of repeating content ie a navigation or header block -->
	<div class="hidden">
		<ul>
			<li><a href="#main_content">Skip to main content</a></li>
			<li><a href="#page_footer">Skip to footer</a></li>
		</ul>
	</div>
		
	<% include header %>

	$Layout
	
	<% include footer %>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<% require javascript(themes/MyNewTheme/scripts/vendor.min.js) %>
	<% require javascript(themes/MyNewTheme/scripts/datenight.min.js) %>
	<script>
		var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview']];
		(function (d, t) {
			var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
			g.src = ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js';
			s.parentNode.insertBefore(g, s)
		} (document, 'script'));
		</script>
</body>
</html>