var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('3facc68ffe3900295b0e4b768edd375f');

function registerBeerApi(app) {
    app.get('/', function(req, res) {
        res.send(app.routes);
    });
    app.get('/search/beer/:query', function(req, res) {
        brewdb.search.beers({
            q: req.params.query
        }, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/search/brewery/:query', function(req, res) {
        brewdb.search.brewery({
            q: req.params.query
        }, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/search/all/:query', function(req, res) {
        brewdb.search.all({
            q: req.params.query
        }, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/beer/getById/:query', function(req, res) {
        brewdb.beer.getById(req.params.query, {}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });

    app.get('/beer/getById/:query', function(req, res) {
        brewdb.beer.getById(req.params.query, {}, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/brewery/find/:query', function(req, res) {
        brewdb.breweries.find(req.params.query, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/category/getById/:query', function(req, res) {
        brewdb.category.getById(req.params.query, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/category/all', function(req, res) {
        brewdb.category.all(function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/style/all', function(req, res) {
        brewdb.style.all(function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });
    app.get('/style/getById/:query', function(req, res) {
        brewdb.style.getById(req.params.query, function(err, data) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    });

    console.log("Beer Finder Api Registered.")
}

module.exports.start = registerBeerApi;