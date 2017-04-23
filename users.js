var http = require('http');

http.createServer(function(req,res){

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/userdb', function (err, db) {
    if (err) {
        console.error(err);
        res.end("Error");
        return;
    } 

    var collection = db.collection('users');
    collection.findOne({},function(err,results){
    	if (err) {
        console.error(err);
        res.end("Error 404");
        return;
    } 
    	db.close();
    	res.end(JSON.stringify(results));
    });
});
}).listen(3000);