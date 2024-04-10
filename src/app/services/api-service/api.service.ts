import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  sendForm(formValues: Object) {
    this.httpClient.post(
      'http://example.com/send-form-data',
      JSON.stringify(formValues),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
