import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { IProduct } from "src/app/interfaces/product.model";
import { LoaderService } from "../loader/loader.service";

@Injectable({
    providedIn: 'root'
})

export class PubSubService {

    public cartItems: BehaviorSubject<any> = new BehaviorSubject({}); // capable of storing old and latest values
    public something: BehaviorSubject<any> = new BehaviorSubject({}); // capable of only relaying latest value

    constructor(
        private loaderService: LoaderService
    ) {
    }

    public broadcastSpinner(spinnerStatus: boolean) {
        spinnerStatus ? this.loaderService.showLoader() : this.loaderService.hideLoader();
    }

    public addItemsToCart(value: IProduct) {
        this.cartItems.next(value);
    }
}