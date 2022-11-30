import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    public getData(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.get(url).subscribe(response => {
                return resolve(response)
            }, error => {
                return reject(error);
            })
        })
    }

    public postData(url: string, payload: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(url,payload).subscribe(response => {
                return resolve(response)
            }, error => {
                return reject(error);
            })
        })
    }
}