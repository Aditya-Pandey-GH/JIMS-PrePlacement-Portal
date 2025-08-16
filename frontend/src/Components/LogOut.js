const LogOut = () => {
	window.localStorage.setItem("loggedIn", "false");
	window.localStorage.setItem("email", "");
	window.localStorage.setItem("password", "");
	window.localStorage.setItem("pfp", "");
	window.location.href = "/";
};

export default LogOut;
