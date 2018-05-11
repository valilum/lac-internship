import { Component, OnInit } from '@angular/core';
import { MlService } from '../services/ml.service';

@Component({
  selector: 'app-ml-demo',
  templateUrl: './ml-demo.component.html',
  styleUrls: ['./ml-demo.component.scss']
})
export class MlDemoComponent implements OnInit {

  status: string;
  image: string;
  selected: Blob;


  googleResponse: string;
  azureResponse: string;

  stringList: Array<string>;
  anotherList: Array<string>;

  constructor(private service: MlService) {
    this.status = "Not selected";
    this.stringList = new Array<string>();
    this.anotherList = new Array<string>();
    this.anotherList.push("Hello1");
    this.anotherList.push("Hello2");
  }



  ngOnInit() {
  }

  onFileSelected($event) {
    this.selected = $event.target.files[0];
    let reader = new FileReader();
    
   
    
    reader.onload = (e) => {
      this.image = reader.result;
      this.stringList.push(this.image);
    };
    
    reader.readAsDataURL($event.target.files[0]);

  }

  onCallApi() {
    this.service.predictGoogle(this.selected)
      .subscribe(response => this.googleResponse = response);
    this.service.predictAzure(this.selected)
      .subscribe(response => this.azureResponse = response);
  }


}
