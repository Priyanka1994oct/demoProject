import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit() {
  }

  signup() : void {
    if(this.username !== '' && this.password !== ''){
      this.router.navigate(["login"]);
     }else {
       alert("Please fill all fields");
     }
  }

}
