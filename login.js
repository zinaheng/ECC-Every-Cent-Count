
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
// the two function below are to control the animation transition

signUpButton.addEventListener('click',() =>
	container.classList.add('up-panel-active')
	);

signInButton.addEventListener('click',() =>
	container.classList.remove('up-panel-active')
	);

//  to configure firebase


// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#available-libraries -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDMxgBVYWXt7sdUytNOH9EUJk1mlTIXw90",
    authDomain: "ecc-8dd87.firebaseapp.com",
    projectId: "ecc-8dd87",
    storageBucket: "ecc-8dd87.appspot.com",
    messagingSenderId: "1029521072538",
    appId: "1:1029521072538:web:815f2237170ce443929a23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
	 
function signUp(){
	var email2 = document.getElementById("email2");
	var password2 = document.getElementById("password2");
	console.log(email2);

	const promise = auth.createUserWithEmailAndPassword(email2.value, password2.value);
	promise.catch(e => alert(e.message));
	alert("Signed Up");
}

function signIn(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise.catch(e => alert(e.message));
	alert("Signed In");
	// should take the user to homepage

}
// this can be included in the main home page
// function signOut(){
// 	auth.signOut();
// 	alert("Signed out");
// }

// auth.onAuthStateChanged(function(user){

// 	if(user){
// 		var email = user.email;
// 		alert("Active User " + email);
// 	}else{
// 		// no user signed in
// 		alert("Not an Acive User");
	
// 	}
// });

