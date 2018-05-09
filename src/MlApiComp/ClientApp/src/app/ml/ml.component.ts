import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MlService } from '../services/ml.service';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent {

  previewPath: string;
  googleApiResponse: string;
  azureApiResponse: string;
  file: Blob;

  constructor(private mlservice: MlService) { }

  onFileSelected(event) {

    this.file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewPath = e.target.result;
    }

    reader.readAsDataURL(this.file);
  }

  getImageInformation() {
    this.mlservice.predictGoogle(this.file)
      .subscribe(x => this.googleApiResponse = x);

    this.mlservice.predictAzure(this.file)
      .subscribe(x => this.azureApiResponse = x);
  }
}
