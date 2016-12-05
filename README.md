Meteor Facebook Catalog for Dynamic Ads
=========================

Create a catalog (CSV format) for Facebook dynamic ads based on your products.

Installation  
------------

``` sh
meteor add semeano:meteor-fb-catalog
```

Methods
-------

**catalog.addLine(string)**

Adds a line to the csv file.
**Note:** the first line must be a comma-separated values of the headers.

```javascript
if (Meteor.isServer) {
	// Header
	catalog.addLine('id,availability,condition,description,image_link,link,title,price,brand');

	// Products
	let products = Products.find({ hidden: false }).fetch();
  _.each(products, function (product) {
  	// add a line for each product
  }
}
```
