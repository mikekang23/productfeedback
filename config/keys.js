//determine which set of credentials to return
if(process.env.NODE_ENV === 'production'){
  //this is prod env
  module.exports = require('./prod');
}else{
  //this is dev env
  module.exports = require('./dev');
}
