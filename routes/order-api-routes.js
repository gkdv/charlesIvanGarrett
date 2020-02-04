var db = require("../models");

module.exports = function(app){
    app.get("/api/orders", function(req, res){
        db.Order.findall({include: db.product}).then(function(dbOrder){
            res.json(dbOrder);
        });
    });

    app.get("/api/orders/:id", function(req, res){
        db.Order.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbOrder){
            res.json(dbOrder);
        });
    })

    app.post("/api/orders", function(req, res){
        db.Order.create(req.body).then(function(dbOrder){
            res.json(dbOrder);
        });
    })


}