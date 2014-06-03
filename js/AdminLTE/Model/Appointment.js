//
//  Appointment
//
function Appointment(location,date,provider) {
    var self = this;
    self.Location =  location;
    self.AppointmentDate = date;
    self.Provider = provider;
    ko.track(self);
    return self;
};