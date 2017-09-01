import { Component, OnInit } from "@angular/core";

// import { AlertService } from '../services/user.service';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

import { User } from "../models/user";


@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {

    model: any = {};
    loading = false;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {}

    register(){
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // TODO: pokazi login sakrij registraciju
                },
                error => {
                    this.loading = false;
                }
            )
    }

}