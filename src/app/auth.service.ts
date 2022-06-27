import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(){
    localStorage.setItem('ACCESS_TOKEN',"acess_token");

  }

  public isLoggedIn(){
    return localStorage.getItem('ACCES_TOKEN')!==null;
  }

  public logout(){
    localStorage.removeItem('ACESS_TOKEN');
  }


}
