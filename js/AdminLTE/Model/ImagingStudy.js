//
// An imaging study is a set of data + a link to the actual viewable study
//
function ImagingStudy(description, date, modality, URL,  iPADURL) {
    var self = this;
    self.Description =  description;
    self.Date = date;
    self.Modality = modality;
    self.URL = URL;
    self.iPadURL = iPADURL;
    
    self.correctedURL = ko.computed(function() {
        
        if((navigator.userAgent.match(/iPhone/i)) || 
            (navigator.userAgent.match(/iPad/i)) ||
            (navigator.userAgent.match(/Android/i))) {
                 return self.iPadURL;
        } else {
            return self.URL;
        }
    
    });
    
    ko.track(self);
    return self;
};