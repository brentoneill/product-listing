var templates = {};

templates.product = [
"<article data-index='<%= idx %>'>",
"<a href='#'><h3><%= title %></h3></a>", //href=<%= productURL %>
"<h5><%= category %></h5>",
"<a class='image-link'><img src=<%= imageURL %> /></a>",
"<p>Price: <span><%= price %></span></p>",
"<blockquote><%= description %></blockquote>",
//"<div class='add-to-cart'>Add to Cart</div>",
"<button class='open-edit-product'>Edit Product</button>",
"<button class='delete-product'>Delete Product</button>",
"</article>"

].join("");
