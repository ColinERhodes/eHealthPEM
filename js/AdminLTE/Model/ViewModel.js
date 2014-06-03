//
//  Information about the model for the web page bindings.
//
function ViewModel() { 
    
    var self = this;
    self.ClinicalDocuments = new ko.observableArray([]);
    self.ImagingStudies = new ko.observableArray([]);
    self.User = new User("","");
    self.Patient = new Patient("", "", "", "");
    
    self.Messages =  new ko.observableArray([]);
    self.Appointments = new ko.observableArray([]);
    
    self.NumberOfMessagesText = function()  {
        return "You have " + self.Messages.length + " messages";  
    }
        
    self.NumberOfMessages = function ()  {
        return self.Messages.length;
    }

    return self;
};



