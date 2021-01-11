"use strict";
exports.__esModule = true;
var hebe_fireBase_login_1 = require("../../hebe-fireBase-login");
var app_1 = require("@firebase/app");
require("@firebase/auth");
require("@firebase/database");
var jsdom = require('jsdom');
var window = jsdom.jsdom().createWindow();
var $ = require('jquery')(window);
app_1["default"].initializeApp(hebe_fireBase_login_1.firebaseConfig);
var firebaseEmailAuth = app_1["default"].auth();
var firebaseDatabase = app_1["default"].database();
var userInfo;
$(document).ready(function () {
    $(document).on('click', '.join', function () {
        var email = $('#email').val();
        var password = $('#pwd').val();
        var name = $('#name').val();
        console.log(email + "    " + password);
        firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function (user) {
            userInfo = user;
            var ref = firebaseDatabase.ref("users/" + userInfo.uid);
            var obj = {
                name: name
            };
            ref.set(obj);
            alert("가입을 축하드립니다! 🎉");
            window.location.href = "/index.html";
        }, function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    });
});
