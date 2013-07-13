function registerUserApi(app) {
    app.get('/user/find/:uid', function(req, res) {
        findUserFromDb(req.params.uid, function(user) {
            if (user == null) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ uid: 4, name: 'Test User', 'placesVisited': [{ name: 'Raleigh Brewing Company', beersHere: [{ quantity: 5, name: 'Weinstephaner Vitus'}]}] }));
            }
            else {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: 'USER_NOT_FOUND', message: 'Could not find user with id: ' + req.params.uid}));
            }
        });
    });
    
    app.post('/user/update/:uid', function(req, res) {
       // Save user to mongodb with uid 
    });
    
    console.log('User Api Registered.')
}

function findUserFromDb(uid, callback) {
    var userObj = null;
    
    callback(userObj);
}

module.exports.start = registerUserApi;