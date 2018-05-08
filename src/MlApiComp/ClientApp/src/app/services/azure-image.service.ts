import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpModule, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AzureImageService {

  constructor(private http: HttpClient) { }

  getInformation(formData: any) {
    var headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': environment.apiKey,
      "Content-Type": "application/octet-stream"
    });

    var uri = environment.apiHost;
    return this.http.post(uri, formData, {
      headers: headers,
      params: {
        "visualFeatures": "Categories,Description,Color,Tags,Adult,Faces",
        "details": "Celebrities,Landmarks",
        "language": "en",
      }
    });

  }

}
