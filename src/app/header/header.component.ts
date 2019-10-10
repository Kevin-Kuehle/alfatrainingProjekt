import {Component, OnInit} from '@angular/core';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
} )
export class HeaderComponent implements OnInit {
  logo = 'Kevin Kühle';
  public showLogin = true;
  private isLoggedIn: boolean | string = false;
  userName = '';
  userPasswort = '';

  constructor() { }

  ngOnInit() {
    if ( sessionStorage.getItem( 'loggedIn' ) !== null ) {
      this.isLoggedIn = JSON.parse( sessionStorage.getItem( 'loggedIn' ) );
    } else {
      this.isLoggedIn = false;
    }
  }

  checkLoginSubmit() {
    if ( this.userName == 'admin' && this.userPasswort == '12345' ) {
      this.isLoggedIn = true;
      this.showLogin = true;
      sessionStorage.setItem( 'loggedIn', 'true' );
      window.location.reload();
    } else {
      this.isLoggedIn = false;
      sessionStorage.setItem( 'loggedIn', 'false' )
    }
  }

  logMeOut() {
    this.isLoggedIn = false;
    sessionStorage.removeItem( 'loggedIn' );
    window.location.reload();
  }
}
