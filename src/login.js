"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var hebe_fireBase_login_1 = require("../../hebe-fireBase-login");
var app_1 = require("@firebase/app");
require("@firebase/auth");
app_1["default"].initializeApp(hebe_fireBase_login_1.firebaseConfig);
var firebaseEmailAuth = app_1["default"].auth();
var firebaseDatabase = app_1["default"].database();
var userInfo;
jquery_1["default"](document).ready(function () {
    jquery_1["default"](document).on('click', '.join', function () {
        var email = jquery_1["default"]('#email').val();
        var password = jquery_1["default"]('#pwd').val();
        var name = jquery_1["default"]('#name').val();
        firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function (user) {
            userInfo = user;
            logUser();
        }, function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
        function logUser() {
            var ref = firebaseDatabase.ref("users/" + userInfo.uid);
            var obj = {
                name: name
            };
            ref.set(obj);
            alert("가입성공");
            window.location.href = "/index.html";
        }
    });
});
