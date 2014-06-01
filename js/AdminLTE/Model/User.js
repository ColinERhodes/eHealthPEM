//
//  Users who can login.
//
function User(name, practice) {
    
    var self = this;
    self.UserName =  name;
    self.Practice = practice;
    ko.track(self);
    return self;
};