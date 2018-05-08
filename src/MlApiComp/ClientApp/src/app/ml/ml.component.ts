import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AzureImageService } from '../services/azure-image.service';
import { GoogleImageService } from '../services/google-image.service'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.scss']
})
export class MlComponent implements OnInit {

  path: string;
  formData: any;
  fileDetails: any;
  form: FormGroup;
  imgBinary: any;
  googleImginfo: any;

  constructor(private azure: AzureImageService,
    private google: GoogleImageService) { }



  ngOnInit() {
  }

  onFileSelected(event) {
    this.path = event.target.files[0];
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.path = e.target.result;

    }

    reader.readAsDataURL(event.target.files[0]);

    let reader2 = new FileReader();
    reader2.onloadend = () => {
      console.log(reader2.result)
      this.imgBinary = reader2.result;
    }
    reader2.readAsArrayBuffer(event.target.files[0])

  }

  getImageInformation() {
    console.log("Triggered")
    this.azure.getInformation(this.imgBinary).subscribe(response => {
      this.fileDetails = JSON.stringify(response);
      console.log(this.fileDetails)
    });
    this.getGoogleImgInfo();

  }

  getGoogleImgInfo() {

    var body: any;
    var photo = this.path.substring(23);
    body = {
      "requests": [
        {
          "image": {
            "content": photo
          },
          "features": [
            {
              "type": "LABEL_DETECTION",
            },

            {
              "type": "FACE_DETECTION"
            },

            {
              "type": "LANDMARK_DETECTION"
            },

            {
              "type": "SAFE_SEARCH_DETECTION"
            }
          ]
        }
      ]

    }

    this.google.getGoogleImageInformation(JSON.stringify(body)).subscribe(response => {
      this.googleImginfo = JSON.stringify(response)
      console.log(this.googleImginfo);
    })

  }

}
