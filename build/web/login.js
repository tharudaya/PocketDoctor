

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

        window.location.replace("home.html");

    } else {

      $("#login_btn").click(function(){
          
          
          var email = $("#email_feild").val();
          var password = $("#password_field").val();
          
           firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert(errorMessage);
                // ...
            });
          
          
      })
  
    }
});


      


