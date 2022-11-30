import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../httpService/http-service.service";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(
        private httpService: HttpService
    ) {}

    public login(email, userPassword) {
        const url = environment.login;
        const bodyObj = {
            userid: email,
            password: userPassword
        };
        return this.httpService.postData(url, JSON.stringify(bodyObj));
    }
}