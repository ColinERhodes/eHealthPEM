//
//  Build a model (Patient, Clinical Documents etc)
//
function ModelBuilder(urlBase) { 

    var self = this;

    //
    //  Find patient data to match
    //
    self.BuildUsingSearch = function(model, customer, patient, userName, sync) { 
    
        // Demographics
        $.ajax({
          url: baseURI + "Customers/" + customer + "/Patients/" + patient,
          dataType: 'json',
          async: sync,
          success: function(data) {
            model.Patient.Name = data.FullName;
            model.Patient.DateOfBirth  = data.DOB;
            model.Patient.Gender = data.Gender;
            model.Patient.MRN = data.MRN;
          }
        });

        $.ajax({
          url: baseURI + "Customers/" + customer + "/Patients/" + patient + "/Records",
          dataType: 'json',
          async: sync,
          success: function(rd) {
             model.ClinicalDocuments = ko.utils.arrayMap(rd, function(item) {
                return new ClinicalDocument(item.Description, item.Date, item.Status, item.URL, item.isNew);
            })
          }
        });

        $.ajax({
          url: baseURI + "Customers/" + customer + "/Patients/" + patient + "/Images",
          dataType: 'json',
          async: sync,
          success: function(rd) {
             model.ImagingStudies = ko.utils.arrayMap(rd, function(item) {
                return new ImagingStudy(item.Description, item.Date, item.Modality, item.URL, item.iPADURL);
            })
          }
        });

        $.ajax({
          url: baseURI + "Customers/" + customer + "/Patients/" + patient + "/Messages",
          dataType: 'json',
          async: sync,
          success: function(rd) {
            model.Messages = ko.utils.arrayMap(rd, function(item) {
                return new Message(item.Text, item.Date, item.From);
            })
          }
        });
        
        
        $.ajax({
          url: baseURI + "Customers/" + customer + "/Patients/" + patient + "/Appointments",
          dataType: 'json',
          async: sync,
          success: function(rd) {
            model.Appointments = ko.utils.arrayMap(rd, function(item) {
                return new Appointment(item.Location, item.Date, item.Time, item.Provider);
            })
          }
        });
        
        $.ajax({
          url: baseURI + "Users/" + userName,
          dataType: 'json',
          async: sync,
          success: function(user) {
            model.User.UserName = user.UserName;
            model.User.Practice = user.Practice;
          }
        });
        
        
        return self.ViewModel;
    }
}
