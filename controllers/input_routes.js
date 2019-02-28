const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { parse } = require("querystring");

router.post("/addSite", (request, response) => {
    console.log(request.body);

    response.render("home.hbs", {
        loggedIn: request.session.loggedIn
    });
});

router.post("/addKLR", (request, response) => {
    request.session.loggedIn = false;
    var login_data_dict = request.body;
    console.log(request);
    console.log(request.body);
    console.log(login_data_dict);

    response.render("home.hbs", {
        loggedIn: request.session.loggedIn
    });
});

module.exports = router;