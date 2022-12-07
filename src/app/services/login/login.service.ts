import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpService } from "../httpService/http-service.service";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor(
        private httpClient: HttpClient,
        private httpService: HttpService
    ) {}

    public login(email, userPassword) {
        const url = environment.login;
        const bodyObj = {
            username: email,
            password: userPassword
        };
        return this.httpService.postData(url, JSON.stringify(bodyObj));
    }

    public adduser(payload): Observable<any> {
        const headers = new HttpHeaders()
        .set('Content', 'application/json')
        .set('access-type', 'private');
        const url = environment.addUser;
        return this.httpClient.post(url, payload, {headers: headers});

    }
}