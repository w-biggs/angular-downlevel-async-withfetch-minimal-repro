import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  constructor() {

  }

  handleError(error: Error | any): void {
    console.error('Global error handler caught an error:', error);
  }
}
