setInterval(run, 4000);

function run() {
	function sendData( url, data ) {
	  console.log( 'Sending data' );

	  const XHR = new XMLHttpRequest();

	  let urlEncodedData = "",
		  urlEncodedDataPairs = [],
		  name;

	  for( name in data ) {
		urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
	  }

	  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

	  XHR.addEventListener( 'load', function(event) {
		console.warn( 'Yeah! Data sent and response loaded.' );
	  } );

	  XHR.addEventListener( 'error', function(event) {
		console.error( 'Oops! Something went wrong.' );
	  } );

	  XHR.open( 'POST', url );

	  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

	  XHR.send( urlEncodedData );
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

	t = new Date();
	ext = t.getTime();
	var userLogin = "user" + ext;
	var userEmail = "email" + ext + "@gmail.com";

	sendData('https://www.pharmanewsonline.com/wp-login.php?action=register',
	{
		"user_login": userLogin,
		"user_email": userEmail,
		"first_name": "joker",
		"wp-submi": "Register",
		"action": "register"
	});


	sendData('https://www.pharmanewsonline.com/vote-for-the-pharmanews-young-pharmacist-of-the-year-2019/',
	{
		"totalpoll[choices][1d98a678-676f-4ef1-8abd-d1c31a19e88e][]": "5dcd69f8-21c9-4908-b4ea-9d86849879a8",
		"totalpoll[screen]": "vote",
		"totalpoll[action]": "vote",
		"totalpoll[pollId]": "20589"
	});
	
	deleteAllCookies();

}

