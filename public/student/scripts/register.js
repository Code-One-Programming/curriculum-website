// checks that need to be done:
//   - capitalize first name if not already
//   - capitalize last name if not already
//   - birthday is in DDMMYY format
//   - remove /'s from birthdays
//
// Before submitting
//   - need to convert email to 'fname-lname@codeoneprogramming.com'


// function raiseError(error) {
//   document.getElementById("error").innerHTML = error;
// }

function register() {
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var birthday = document.getElementById('birthday').value
  var scratch_user = document.getElementById('scratch-user').value
  var scratch_pass = document.getElementById('scratch-pass').value

  var bday_individuals = birthday.split("/")
  birthday = bday_individuals[0] + bday_individuals[1] + bday_individuals[2]

  // if (birthday.length != 6) {
  //   raiseError("Please enter your birthday in the valid format")
  // }

  // var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // if (birthday.toUpperCase().includes(LETTER))

  var email = fname + "_" + lname + "@codeoneprogramming.com"

  firebase.auth().createUserWithEmailAndPassword(email, birthday)
   .catch(function (err) {
     console.log(err)
   });

   // attempt login
   firebase.auth().signInWithEmailAndPassword(email, birthday)
     .catch(function(err) {
       console.log(err)
   });

   user = firebase.auth().currentUser

   window.location.href = 'login.html'

}
