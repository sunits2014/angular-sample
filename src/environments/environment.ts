// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  login: 'https://fakestoreapi.com/auth/login',
  getAllUsers: 'https://fakestoreapi.com/users',
  singleUser: 'https://fakestoreapi.com/users/',
  getProducts: 'https://fakestoreapi.com/products',
  getCategories: 'https://fakestoreapi.com/products/categories',
  getInCategory: 'https://fakestoreapi.com/products/category',
  addUser: 'https://fakestoreapi.com/users'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
