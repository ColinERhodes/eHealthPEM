//
//  Information about the model for the web page bindings.
//
function ViewModel() { 
    
    var self = this;
    self.ClinicalDocuments = new ko.observableArray(
       [
           new ClinicalDocument('Clinical Summary', '7/1/2013', 'Viewed', '../../../PDFs/Sample_Clinical_Summary.pdf', false),
           new ClinicalDocument('Consultation', '7/23/2013', 'Viewed', '../../../PDFs/cardionote.pdf', false),
           new ClinicalDocument('Progress Note', '7/23/2013', 'Viewed', '../../../PDFs/prognote.pdf', true)         
           ]);
     
    self.Messages = new ko.observableArray(
        [
            new Message('3 new patients added today', 'patient'),
            new Message('new data for rhodes (192641)', 'patient')
        ]
    );
    
    self.NumberOfMessagesText = function()  {
        return "You have " + self.Messages().length + " messages";  
    }
        
    self.NumberOfMessages = function ()  {
        return self.Messages().length;
    }
  
    
    self.ImagingStudies = new ko.observableArray(
        [
            new ImagingStudy('Cardiac Angiogram', '5/23/2013', 'XA', 'https://iwerp-demo.ehgt.com/eunityServer/eunityViewer?studyUID=1.2.250.1.59.453.859.2960729188.3728.1274191976.2.1.1&user=TestUser&CLOAccessKeyID=UtqOAZHwVvMqJCKzVvVh&expiry=1402328733&enableRelatedStudies=true&signature=mocrKyKv3q%2f9FPtNs4qLJ5KkvhY%3d') 
        ]);
    
    this.User = ko.observable(new User('Colin Rhodes','Midtown Family Practice'));
    
    this.Patient = ko.observable(new Patient(
        "Michael Moeller", "1/1/1970", "Male", "12327627"));
    
    return self;
};



