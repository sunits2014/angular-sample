import { Injectable } from "@angular/core";
import { LoaderService } from "../loader/loader.service";

@Injectable({
    providedIn: 'root'
})

export class PubSubService {

    constructor(
        private loaderService: LoaderService
    ) {
    }

    public broadcastSpinner(spinnerStatus: boolean) {
        spinnerStatus ? this.loaderService.showLoader() : this.loaderService.hideLoader();
    }
}