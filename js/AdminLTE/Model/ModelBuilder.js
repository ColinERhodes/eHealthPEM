//
//  Build a model (Patient, Clinical Documents etc)
//
function ModelBuilder(urlBase) { 

    var self = this;

    //
    //  Find patient data to match
    //
    self.BuildUsingSearch = function(model, customer, patient, userName) { 
    
        // Demographics
        $.getJSON(baseURI + "Customers/" + customer + "/Patients/" + patient, function(data)  { 
        
            model.Patient.Name = data.FullName;
            model.Patient.DateOfBirth  = data.DOB;
            model.Patient.Gender = data.Gender;
            model.Patient.MRN = data.MRN;
            
        })
       .error(function() { alert("An error occurred retrieving patient data!"); });

        // Clinical documents
       $.getJSON(baseURI + "Customers/" + customer + "/Patients/" + patient + "/Records", function(rd)  { 
        
            model.ClinicalDocuments = ko.utils.arrayMap(rd, function(item) {
                return new ClinicalDocument(item.Description, item.Date, item.Status, item.URL, item.isNew);
            })
        })
       .error(function() { alert("An error occurred retrieving clinical data!"); });

        // Imaging Studies
       $.getJSON(baseURI + "Customers/" + customer + "/Patients/" + patient + "/Images", function(rd)  { 
        
            model.ImagingStudies = ko.utils.arrayMap(rd, function(item) {
                return new ImagingStudy(item.Description, item.Date, item.Modality, item.URL);
            })
        })
       .error(function() { alert("An error occurred retrieving imaging data!"); });

        // Messages
       $.getJSON(baseURI + "Customers/" + customer + "/Patients/" + patient + "/Messages", function(rd)  { 
        
            model.Messages = ko.utils.arrayMap(rd, function(item) {
                return new Message(item.Text, item.Date, item.From);
            })
        })
       .error(function() { alert("An error occurred retrieving imaging data!"); });
       
        // User data
       $.getJSON(baseURI + "Users/" + userName , function(user)  { 
        
            model.User.UserName = user.UserName;
            model.User.Practice = user.Practice;
        })
       .error(function() { alert("An error occurred retrieving user data!"); });
    

        return self.ViewModel;
    }
}
