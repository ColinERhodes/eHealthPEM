//
//  Patients see Physicians.
//
function Patient(name, dob, gender, mrn) {
    var self = this;
    self.Name =  name;
    self.DateOfBirth = dob;
    self.Gender = gender;
    self.MRN = mrn;
    self.URL = "patientView.html?PatientName=" + escape(name);
    ko.track(self);

    return self;
};