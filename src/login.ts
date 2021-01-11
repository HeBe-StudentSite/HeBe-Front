
import {firebaseConfig} from "../../hebe-fireBase-login";
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

var jsdom = require('jsdom'); 
var window = jsdom.jsdom().createWindow(); 
var $ = require('jquery')(window);

firebase.initializeApp(firebaseConfig);
var firebaseEmailAuth = firebase.auth();
var firebaseDatabase = firebase.database();
var userInfo; 

$(document).ready(function(){
  
    $(document).on('click','.join',function(){ 
      var email = $('#email').val();
      var password = $('#pwd').val();
      var name = $('#name').val();

      console.log(email +"    "+password);
        

        firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function(user) {
            userInfo = user; 
        
            var ref = firebaseDatabase.ref("users/"+userInfo.uid); 
            var obj = {
                name: name,
            };
        
            ref.set(obj); 
            alert("가입을 축하드립니다! 🎉");
            window.location.href = "/index.html"
        
        }, function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
            
        });
   
   
    });
  });