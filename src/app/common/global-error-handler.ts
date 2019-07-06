import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler{
    handleError() {
        alert('Unexpected error');
    }
}