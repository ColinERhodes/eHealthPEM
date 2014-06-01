//
// An imaging study is a set of data + a link to the actual viewable study
//
function ImagingStudy(description, date, modality, URL) {
    var self = this;
    self.Description =  description;
    self.Date = date;
    self.Modality = modality;
    self.URL = URL;
    ko.track(self);
    return self;
};