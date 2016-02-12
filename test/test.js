const wol = require('../');

wol.wake('d850e63f1afd', function(err, res){
  console.log(res);
});
