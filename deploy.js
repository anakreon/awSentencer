const Rsync = require('rsync');
const serverSettings = require('./src/environments/serversettings');
 
const rsync = new Rsync()
    .shell('ssh')
    .flags('azv')
    .set('delete')
    .source('./dist/')
    .exclude('.htaccess')
    .destination(serverSettings.destination);
 
rsync.execute(function(error, code, cmd) {});