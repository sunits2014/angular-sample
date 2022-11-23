import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getProducts(): Promise<any> {
    const url = environment.getProducts;
    return new Promise((resolve, reject) => {
      this.httpService.getData(url).then(response => {
        return resolve(response);
      }).catch(error => {
        return reject(error);
      });
    })
  }

  public getCategories(): Promise<any> {
    const url = environment.getCategories;
    return new Promise((resolve, reject) => {
      this.httpService.getData(url).then(response => {
        return resolve(response)
      }).catch(error => {
        return reject(error);
      })
    })
  }

  public getProductWithId(id: number) {
    const url = environment.getProducts + `/${id}`;
    return new Promise((resolve, reject) => {
      this.httpService.getData(url).then(response => {
        return resolve(response)
      }).catch(error => {
        return reject(error);
      })
    })
  }

  public getInCategory(category: string) {
    const url = environment.getInCategory + `/${category}`;
    return new Promise((resolve, reject) => {
      this.httpService.getData(url).then(response => {
        return resolve(response)
      }).catch(error => {
        return reject(error);
      })
    })
  }

}
