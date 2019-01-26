import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }
  //register user
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://onaty-node-chatapp-api.herokuapp.com/users/register', user, { headers: headers })
      .pipe(map(res => res.json()));
  }
  //authenticateUser
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://onaty-node-chatapp-api.herokuapp.com/users/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  //storeUserData
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userdetails', JSON.stringify(user.username));
    this.authToken = token;
    this.user = user;
  }

  //logout
  logout() {
    //  this.authToken = null;
    //  this.user = null;
    localStorage.clear();
  }

  //get request for profile
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://onaty-node-chatapp-api.herokuapp.com/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  // load Token
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  // are you logged in or not
  loggedIn() {
    return tokenNotExpired('id_token');
  }
  getallusers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://onaty-node-chatapp-api.herokuapp.com/users/getallusers', { headers: headers })
      .pipe(map(res => res.json()));
  }
  //add a new friend user
  addnewfriend(addfriend) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://onaty-node-chatapp-api.herokuapp.com/users/addfriend', addfriend, { headers: headers })
      .pipe(map(res => res.json()));
  }

  //get all of a usersfriend
  myfriends(friendsusername) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://onaty-node-chatapp-api.herokuapp.com/users/myfriends/' + friendsusername, { headers: headers })
      .pipe(map(res => res.json()));
  }

}
