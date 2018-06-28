import { API_BASE_URL, ACCESS_TOKEN } from './Constants';


const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  }) 
  console.log(localStorage.getItem(ACCESS_TOKEN));
  // if (localStorage.getItem(ACCESS_TOKEN)) {
  //   headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
  // }
  if (localStorage.ACCESS_TOKEN) {
    headers.append('Authorization', 'Bearer ' + localStorage.ACCESS_TOKEN)
  }
  
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  const iterate = options.headers.values();
  for (let n in iterate){
    console.log("dude" + n.value);
  }

  return fetch(options.url, options)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
};


export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/auth/register",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

export function addToCart(itemRequest) {
  return request({
    url: API_BASE_URL+"/shopping/addtocart",
    method: 'POST',
    body: JSON.stringify(itemRequest)
  });
}

//Get Current user profile
export function getUserProfile() {
  if (!checkHasLogin()) {
    console.log("login check fail")
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL + "/user/profile",
    method: 'GET'
  });
}

export function checkUserPassword(passwordRequest) {
  if (!checkHasLogin()) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL + "/user/checkUserPassword",
    method: 'POST',
    body: JSON.stringify(passwordRequest)
  });
}

export function getOrderHistory() {
  if (!checkHasLogin()) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL + "/user/orderhistory",
    method: 'GET'
  });
}

export function changeProfile(modifiedProfileRequest) {
  if (!checkHasLogin()) {
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL + "/user/update",
    method: 'POST',
    body: JSON.stringify(modifiedProfileRequest)
  });
}

export function getItemInCart() {
  if (!checkHasLogin()) {
    return Promise("No acccess token set")
  }
  return request({
    url: API_BASE_URL + "/shopping",
    method: 'GET'
  });
}
export function getItem(ISBN) {
  return request({
    url: API_BASE_URL+"/books/"+ISBN,
    method: 'GET'
  })
}

export function getBooks(){
  return request({
    url: API_BASE_URL+"/books/",
    method: 'GET'
  })
}

function checkHasLogin(){
  if(!localStorage.ACCESS_TOKEN){
    return false;
  }
  return true;
}
