import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC8lmpumkApkNfAnTFuC9nCF40bW_OWGLU",
      authDomain: "mis-clientes-5cc2a.firebaseapp.com"
    });
  }

  login(){
    return this.loginService.getIdToken();
  }

  logout(){
    this.loginService.logout();
  }
}
