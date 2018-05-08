import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpModule, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GoogleImageService {

  constructor(private http: HttpClient) { }

  getGoogleImageInformation(body) {

    var uri = environment.googleApiHost;
    var key = environment.googleQuery
    return this.http.post(uri, body, {
      params: {
        "key": "AIzaSyDUZKynjx3NmfSh7XDLE0_GAM-wPxBuX2I"
      }
    });

  }

}
