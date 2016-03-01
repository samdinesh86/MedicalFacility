module.exports = function (Clinic) {
  var loopback = require('loopback');
  Clinic.greet = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  }

  Clinic.remoteMethod(
    'greet',
    {
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    }
  );

 //Post Method Example Using Remote Method
  Clinic.addclinic = function(data,cb) {
    debugger;
       Clinic.on('attached',function(){
        var override = Clinic.find;
        var Doctor = Clinic.app.models.Doctor;
       console.log(Doctor);
        });
       Clinic.create({
        ClinicName:data.ClinicName,
        Address:data.Address,
        Phone:data.Phone
       },function(err){
        cb(null, err);
       });

      
  };

  Clinic.remoteMethod(
    'addclinic',
    {
      accepts: { arg: 'data', type: 'object', http: { source: 'body' } } ,
      returns: { arg: 'Data', type: 'string'}
    
    }
  );

};

