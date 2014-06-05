//
//  A clinical document is a set of data + a link to a document.
//
function ClinicalDocument(description, date, provider, URL, isNew) {
    var self = this;
    self.Description =  description;
    self.Date = date;
    self.Provider = provider;
    self.URL = URL;

    self.isNew = isNew;
    ko.track(self);
    return self;
};