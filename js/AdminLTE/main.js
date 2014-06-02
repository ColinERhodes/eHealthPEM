//
//  Main ehealth module
//

// Globals.
var baseURI = "https://referralapi-c9-colinrhodes.c9.io/api/";
var builder = new ModelBuilder(baseURI);
var theViewModel  = new ViewModel();

// Setup periodic call backs.
function refreshUI() { 
    builder.BuildUsingSearch(theViewModel, "Demo", "Rhodes", "user");
    setTimeout(refreshUI, 30 * 1000);
};

 // Document ready ...
$(document).ready(function() {
     
    ko.track(theViewModel);
    ko.applyBindings(theViewModel);

    refreshUI();

    var dtOptions = {
                    "bPaginate": false,
                    "bLengthChange": false,
                    "bFilter": false,
                    "bInfo": false,
                    bJQueryUI: true              
            };
            
    var dt = $('#documentTable').dataTable(dtOptions);
    var it = $('#imageTable').dataTable(dtOptions);      

});

// Ajax activity indicator bound to ajax start/stop document events
$(document).ajaxStart(function () {
    $('#ajaxBusy').show();
});

$(document).ajaxStop(function (){
    $('#ajaxBusy').hide();
});
    