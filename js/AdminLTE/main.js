//
//  Main ehealth module
//
var baseURI = "https://referralapi-c9-colinrhodes.c9.io/api/Customers/DEMO/";

var builder = new ModelBuilder(baseURI);
var model = builder.BuildUsingSearch("Rhodes");
ko.applyBindings(model);