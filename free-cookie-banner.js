document.addEventListener("DOMContentLoaded", function() {
	// init vars and consts
	const cookieName = 'freecookiebanner';
	let bannerValue = '';
	let bannerValueLS = '';
	// create html
	var divOverlay = document.createElement('div');
	divOverlay.setAttribute("id", "overlay");
	document.body.appendChild(divOverlay);	
	var divModal = document.createElement('div');
	divModal.setAttribute("id", "modal");
	const acceptButton = document.createElement("button");
	acceptButton.innerText = "Accept";
	acceptButton.setAttribute("id", "acceptButton");
	// Create the "Decline" button
	const declineButton = document.createElement("button");
	declineButton.innerText = "Decline";	
	declineButton.setAttribute("id", "declineButton");
	const ccTitle = document.createElement("p");
	ccTitle.innerText = "We are using cookies!";
	divModal.appendChild(ccTitle);
	divModal.appendChild(acceptButton);
	divModal.appendChild(declineButton);	
	document.body.appendChild(divModal);
    // logic to check cookies and show consent
	if (isCookieSet(cookieName)) {
		bannerValue = getCookie(cookieName);
	}
	bannerValueLS = localStorage.getItem(cookieName);
	if (!isCookieSet(cookieName) && bannerValueLS !='yes' && bannerValueLS !='no') {
		showModal();
	} 
	// Functions
	// Show the modal
	function showModal() {
		document.getElementById("overlay").style.display = "block";
		document.getElementById("modal").style.display = "block";
	}
	// Hide the modal
	function hideModal() {
		document.getElementById("overlay").style.display = "none";
		document.getElementById("modal").style.display = "none";
	}
	// Check if the cookie is set
	function isCookieSet(cookieName) {
		const cookies = document.cookie.split(';');
		for (const cookie of cookies) {
			const [name, value] = cookie.trim().split('=');
			if (name === cookieName) {
				return true;
			}
		}
		return false;
	}
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			const c_start = document.cookie.indexOf(c_name + "=");
			if (c_start !== -1) {
				c_start += c_name.length + 1;
				const c_end = document.cookie.indexOf(";", c_start);
				if (c_end === -1) {
					return unescape(document.cookie.substring(c_start));
				} else {
					return unescape(document.cookie.substring(c_start, c_end));
				}
			}
		}
		return null; // Return null if the cookie is not found
	}	
	function setCookie(name, value, days) {
		let expires = "";
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}	
	function acceptCookie()
	{
		setCookie(cookieName, "yes", 30);
		localStorage.setItem(cookieName, "yes");
		hideModal();
	}
	function declineCookie()
	{
		setCookie(cookieName, "no", 30);
		localStorage.setItem(cookieName, "no");
		hideModal();
	}	
	// Event listeners for buttons
	document.getElementById("acceptButton").addEventListener("click", acceptCookie);
	document.getElementById("declineButton").addEventListener("click", declineCookie);
});
