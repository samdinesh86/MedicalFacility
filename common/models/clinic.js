module.exports = function (Clinic) {
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
};
