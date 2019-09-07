document.addEventListener('DOMContentLoaded', function() {

    let app = firebase.app();

	fetch('http://localhost:5001/learningfirebase-1b111/us-central1/api/cat')
	// .then(document.write);
	.then(res => console.log(res))
	.catch(err => console.log(err));

    // const sendText = firebase.functions().httpsCallable('sendText');

    // sendText({ message: 'Hello World!' })
});