//
// An imaging study is a set of data + a link to the actual viewable study
//
function ImagingStudy(description, date, modality, provider, URL,  iPADURL) {
    var self = this;
    self.Description =  description;
    self.Date = date;
    self.Modality = modality;
    self.URL = URL;
    self.iPadURL = iPADURL;
    self.Provider = provider;
    
    self.correctedURL = ko.computed(function() {
        
        if((navigator.userAgent.match(/iPhone/i)) || 
            (navigator.userAgent.match(/iPad/i)) ||
            (navigator.userAgent.match(/Android/i))) {
                 return self.iPadURL + " target='_blank';
        } else {
            return self.URL;
        }
    
    });
    
    ko.track(self);
    return self;
};