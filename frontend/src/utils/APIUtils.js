import {API_BASE_URL,ACCESS_TOKEN} from '../Constants';

const request = (option) => {
    const headers = new Headers({
      'Content-Type':'application/json',
    })
    if(localStorage.getItem(ACCESS_TOKEN)){
      headers.append('Authorization','Bearer '+localStorage.getItem(ACCESS_TOKEN));
    }
    const defaults = {headers: headers};
    option = Object.assign({}, defaults,option);

    return fetch(option.url, option)
    .then(response =>
      response.json.then(json => {
        if(!response.ok){
          return Promise.reject(json);
        }
        return json;
      })
    );
};


export function login(loginRequest) {
  return request({
    url:API_BASE_URL+"/auth/login",
    method:'POST',
    body:JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL +"/auth/register",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

export function addToCart(itemRequest){
  return request({
    url: API_BASE_URL+"/auth/shopping/addtocart",
    method: 'POST',
    body: JSON.stringify(itemRequest)
  });
}

//Get Current user profile
export function getUserProfile() {
  if(!checkHasLogin()){
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL +"/user/profile",
    method: 'GET'
  });
}

export function checkUserPassword(passwordRequest) {
  if(!checkHasLogin()){
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL+"/user/checkUserPassword",
    method: 'POST',
    body: JSON.stringify(passwordRequest)
  });
}

export function getOrderHistory() {
  if(!checkHasLogin()){
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL+"/user/orderhistory",
    method: 'GET'
  });
}

export function changeProfile(modifiedProfileRequest){
  if(!checkHasLogin()){
    return Promise.reject("No access token set.");
  }
  return request({
    url: API_BASE_URL+"/user/update",
    method: 'POST',
    body: JSON.stringify(modifiedProfileRequest)
  });
}

export function getItemInCart(){
  if(!checkHasLogin()){
    return Promise("No acccess token set")
  }
  return request({
    url: API_BASE_URL+"shopping",
    method: 'GET'
  });
}
export function getItem(ISBN){
  return request({
    url: API_BASE_URL+"/book/"+ISBN,
    method: 'GET'
  })
}

function checkHasLogin(){
  if(!localStorage.getItem(ACCESS_TOKEN)){
    return false;
  }
  return true;
}
