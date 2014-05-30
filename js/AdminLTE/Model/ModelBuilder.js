//
//  Build a model (Patient, Clinical Documents etc)
//
function ModelBuilder(urlBase) { 

    var self = this;
    
    //
    //  Find patient data to match
    //
    self.BuildUsingSearch = function(name) { 
    
        //var data = $.getJSON(baseURI + "Patients", self.Documents);
        
        return new ViewModel();
    }
    
    return self;
  
}