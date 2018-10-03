

var fname = document.getElementById("fullname");
var medid = document.getElementById("medical_id");
var City = document.getElementById("city");
var Age = document.getElementById("age");
var Specialization = document.getElementById("s_area");
var Mobile = document.getElementById("m_number");
var useremail = document.getElementById("email_field");
var userpass = document.getElementById("password_field");
var conpass = document.getElementById("c_password_field");
var submitbtn = document.getElementById("submit");


function mysave() {


    var f_name = fname.value;
    var med_id = medid.value;
    var city = City.value;
    var age = Age.value;
    var s_area = Specialization.value;
    var m_number = Mobile.value;
    var email = useremail.value;
    var password = userpass.value;
    var confirmpass = conpass.value;
    var firebaseRef = firebase.database().ref().child("Doctor").push();
    
    //age = parseInt(age, 10);
    //m_number = parseInt(m_number, 10);


    if (f_name.length > 0) {

        if (med_id.length > 0) {


            if (city.length > 0) {

                if ( age > 1 && age < 100) {

                    if (s_area.length > 0) {

                        if (m_number.length == 10) {

                            if (password.length > 5) {

                                if (password == confirmpass)
                                {
                                    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

                                        firebaseRef.child("Fullname").set(f_name);
                                        firebaseRef.child("Medical_Id_No").set(med_id);
                                        firebaseRef.child("City").set(city);
                                        firebaseRef.child("Age").set(age);
                                        firebaseRef.child("Specialization").set(s_area);
                                        firebaseRef.child("Mobile_No").set(m_number);

                                        alert("You have Successfully Registered to the site");

                                    }).catch(function (error) {
                                        var errorCode = error.code;
                                        var errorMessage = error.message;
                                        alert(errorMessage);
                                    });
                                } else {

                                    alert("Please Confirm Your Password , They are not match");
                                }

                            } else {
                                alert("Please Enter a Strong password with 6 Characters");
                            }

                        } else {

                            alert("Please Enter a valid Mobile Number");

                        }
                    } else {

                        alert("Please Enter Your Specialized Area");
                    }

                } else {
                    alert("Age is Baddly Formatted");
                }
            } else {
                alert("Please Enter your City");
            }
        } else {
            alert("Please Enter Your Medical Id number");
        }
    } else {
        alert("Please Enter Your FullName");
    }





}







