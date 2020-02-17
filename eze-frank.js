function start() {
	deleteAllCookies();
	t = new Date();
	ext = t.getTime();
	var userLogin = "user" + ext;
	var userEmail = "email" + ext + "@gmail.com";

	var url = 'https://www.pharmanewsonline.com/wp-login.php?action=register'

	var formData = new FormData();
	formData.append('user_login', userLogin);
	formData.append('user_email', userEmail);
	formData.append('first_name', 'joker');
	formData.append('submi', 'Register');
	formData.append('action', 'register');

	var otherParam = {
		"content-type": "application/x-www-form-urlencode",
		"method": "post",
		"body": formData
	}

	fetch(url, otherParam)
	.then(data => {vote()})
	.catch(error => {console.log(error)})
}


function vote() {
	var url = 'https://www.pharmanewsonline.com/vote-for-the-pharmanews-young-pharmacist-of-the-year-2019/'

	var formData = new FormData();
	formData.append('totalpoll[choices][1d98a678-676f-4ef1-8abd-d1c31a19e88e][]', '5dcd69f8-21c9-4908-b4ea-9d86849879a8');
	formData.append('totalpoll[screen]', 'vote');
	formData.append('totalpoll[action]', 'vote');
	formData.append('totalpoll[pollId]', '20589');

	var otherParam = {
		"content-type": "application/x-www-form-urlencode",
		"method": "post",
		"body": formData
	}

	fetch(url, otherParam)
	.then(data => {
		console.warn('done'); 
		console.log(data);
		start();
	})
	.catch(error => {console.log(error)})
}

function deleteAllCookies() {
	var cookies = document.cookie.split(";");

	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}
}

start()