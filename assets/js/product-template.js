var templates = {};

templates.product = [
"<article>",
"<a href=<%= productURL %> ><h3><%= title %></h3></a>",
"<h5><%= category %></h5>",
"<a class='image-link' href=<%= productURL %> ><img src=<%= imageURL %> /></a>",
"<p>Price: <span><%= price %></span></p>",
"<blockquote><%= description %></blockquote>",
"<div class='add-to-cart'>Add to Cart</div>",
"</article>"

].join("");
