<nav class='nav'>
	<ul class='nav_pri'>
	<% loop Menu(1) %>
	<li class="nav_pri_item $LinkingMode <% if Children %>dropdown<% end_if %>">
		<a class='nav_pri_anchor' href="$Link">$MenuTitle</a>
		<% if Children %>
			<ul class="container_dropdown">
				<% loop Children %>
				<li ><a href="$Link">$MenuTitle</a></li>
				<% end_loop %>
			</ul>
		<% end_if %>
	</li>
	<% end_loop %>
	</ul>
</nav>