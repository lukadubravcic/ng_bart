import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { AuthenticationService } from '../services/authentication.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {

    model: any = {};
    returnUrl: string;
    loading = false;

    constructor(
        private authenticationService: AuthenticationService
    ) {}   
    
    ngOnInit() {
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                }
            ) 
    }

}