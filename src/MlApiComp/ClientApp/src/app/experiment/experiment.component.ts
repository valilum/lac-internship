import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let form = <HTMLFormElement>document.getElementById('create-form');
    form.submit();
 }

}
