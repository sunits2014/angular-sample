import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { IProduct } from "src/app/interfaces/product.model";
import { LoaderService } from "../loader/loader.service";

@Injectable({
    providedIn: 'root'
})

export class PubSubService {

    public storedItemsInCart: Array<any>;
    public cartItems: BehaviorSubject<any> = new BehaviorSubject({}); // capable of storing old and latest values
    public something: BehaviorSubject<any> = new BehaviorSubject({}); // capable of only relaying latest value

    constructor(
        private loaderService: LoaderService
    ) {
        this.storedItemsInCart = [];
    }

    public broadcastSpinner(spinnerStatus: boolean) {
        spinnerStatus ? this.loaderService.showLoader() : this.loaderService.hideLoader();
    }

    public addCartIcon(value: IProduct) {
        this.cartItems.next(value);
        this.addItemsToCart(value);
    }

    public addItemsToCart(value: IProduct) {
        this.storedItemsInCart.push(value);
        const existingKey = sessionStorage.getItem('cartItems');
        if (existingKey) {
            sessionStorage.removeItem('cartItems');
        };
        sessionStorage.setItem('cartItems', JSON.stringify(this.storedItemsInCart));
    }
}