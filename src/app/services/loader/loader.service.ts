import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoaderService {

    public showLoader() {
        const loader = document.createElement('div');
        loader.setAttribute('id', 'loader');
        loader.classList.add('d-flex');
        loader.classList.add('justify-content-center');
        loader.classList.add('align-items-center');
        loader.classList.add('bg-black-alpha');
        loader.classList.add('position-fixed');
        // adding the svg
        const img = document.createElement('img');
        img.setAttribute('src', '../../../assets/loader.svg');
        loader.appendChild(img);
        document.body.appendChild(loader);
    }

    public hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            document.body.removeChild(loader);
        }
    }
}