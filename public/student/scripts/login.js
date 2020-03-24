

function login() {
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var birthday = document.getElementById('birthday').value

  var email = fname + "_" + lname + "@codeoneprogramming.com"

  var bday_individuals = birthday.split("/")
  birthday = bday_individuals[0] + bday_individuals[1] + bday_individuals[2]

  firebase.auth().signInWithEmailAndPassword(email, birthday)
    .catch(function(err) {
      console.log(err)
  });

  user = firebase.auth().currentUser

  console.log(user.email)
}
