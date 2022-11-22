import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { PubSubService } from '../common/publish-subscribe.service';

@Injectable()
export class HttpCallsInterceptor implements HttpInterceptor {

    constructor(
        private pubSubService: PubSubService
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.pubSubService.broadcastSpinner(true);
        return next.handle(request)
            .pipe(catchError((err) => {
                this.pubSubService.broadcastSpinner(false);
                throw err;
            }))
            .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    this.pubSubService.broadcastSpinner(false);
                }
                return evt;
            }));
    }
}