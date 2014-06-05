//
//  Main ehealth module
//

// Globals.
var baseURI = "https://pemrest.azurewebsites.net/api/";
var builder = new ModelBuilder(baseURI);
var theViewModel  = new ViewModel();

// Setup periodic call backs.
function refreshUI(sync) { 
    builder.BuildUsingSearch(theViewModel, "Demo", "Rhodes", "user", sync);
    
    // Always async after the first call
//    setTimeout(function() { refreshUI(true)} , 2 * 60 * 1000);
};

 // Document ready ...
$(document).ready(function() {
         
    $('#ajaxBusy').show();
         
    ko.track(theViewModel);
    ko.applyBindings(theViewModel);

    refreshUI(false);
    
    self.SelectedItem = ko.observable(new Patient());

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
    