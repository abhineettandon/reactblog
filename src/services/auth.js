const auth = {
  isLoggedIn: localStorage.getItem("api_token") ? true : false,
  user: JSON.parse(localStorage.getItem("user"))
};

export default auth;
