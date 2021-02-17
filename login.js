
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// const signUpButton = document.getElementById('signUp');
// const signUpButton = document.getElementById('signUp');
// the two function below are to control the animation transition

// signUpButton.addEventListener('click',() =>
// 	container.classList.add('up-panel-active')
// 	);

// signInButton.addEventListener('click',() =>
// 	container.classList.remove('up-panel-active')
// 	);

//  to configure firebase
	var firebaseConfig = {
		apiKey: "AIzaSyDQjxHBgTlS2c8SY_Oaej49ka7yaD8WcNM",
		authDomain: "ecc-every-cent-count.firebaseapp.com",
	   projectId: "ecc-every-cent-count",
	   storageBucket: "ecc-every-cent-count.appspot.com",
	   messagingSenderId: "181623300107",
	   appId: "1:181623300107:web:7158b835cef503b57c670e"
	   };
		   
	   firebase.initializeApp(firebaseConfig);
   
	   const auth = firebase.auth();
	
	   
function signUp(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
	promise.catch(e => alert(e.message));
	alert("Signed Up");


}

function signIn(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");

	const promise = auth.signInWithEmailAndPassword(email.value,password.value);
	promise.catch(e => alert(e.message));
	

}
// this can be included in the main home page
// function signOut(){
// 	auth.signOut();
// 	alert("Signed out");
// }

auth.onAuthStateChanged(function(user){

	if(user){
		var email = user.email;
		alert("Active User " + email);
	}else{
		// no user signed in
		alert("Not an Acive User");
	}
});

