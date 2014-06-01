//
//  Messages are sent to physicians.
//
function Message(text, date,from) {
    var self = this;
    self.Text =  text;
    self.Date  = date;
    self.From = from;
    ko.track(self);
    return self;
};