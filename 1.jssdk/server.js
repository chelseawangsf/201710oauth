let express = require('express');
let path = require('path');
let app = express();
app.use(express.static(__dirname));
app.get('/oauth/callback/qqconn',function(req,res){
  res.sendFile(path.resolve('./callback.html'));
});
app.listen(80);