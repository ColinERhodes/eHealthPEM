//
//  Appointment
//
function Appointment(location,date,time,provider) {
    var self = this;
    
    self.Location =  location;
    self.AppointmentDate = date;
    self.AppointmentTime = time;
    self.Provider = provider;
    
    self.AppointmentDateTime = ko.computed(function()  {
        return date + " " + time;  
    });
    
    ko.track(self);
    return self;
};