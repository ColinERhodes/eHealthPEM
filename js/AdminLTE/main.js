//
//  Main ehealth module
//
var baseURI = "https://referralapi-c9-colinrhodes.c9.io/api/";

var theViewModel  = new ViewModel();

var builder = new ModelBuilder(baseURI);
ko.track(theViewModel);

ko.bindingHandlers.sortTable = {
    init: function(element, valueAccessor) {
        setTimeout( function() {
            $(element).addClass('tablesorter');
            $(element).tablesorter({widgets: ['zebra']});
        }, 0);
    }
};

ko.applyBindings(theViewModel);

// Bind from the Web Services ... 
builder.BuildUsingSearch(theViewModel, "Demo", "Rhodes", "user");
