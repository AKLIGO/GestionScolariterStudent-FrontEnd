import { Component } from '@angular/core';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

  constructor(public authservice:AuthService){

  }
  logout(){
    this.authservice.logout();
  }

}
