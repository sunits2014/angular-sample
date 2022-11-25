import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class ErrorHandlerService {

    constructor(
        private _snackBar: MatSnackBar
    ) {}

    public handleError(error) {
        this._snackBar.open(error.message);
    }

}