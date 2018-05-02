import { Component, OnInit } from '@angular/core';
import { Experiment } from '../models/experiment';
import { ExperimentService } from '../services/experiment.service';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.scss']
})
export class ExperimentComponent implements OnInit {

  experiment: Experiment = new Experiment;
  newExperiment: Experiment = new Experiment;

  constructor(
    private expService: ExperimentService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let form = <HTMLFormElement>document.getElementById('create-form');
    this.experiment.name = (<HTMLInputElement>document.getElementById('ExperimentName')).value;
    this.experiment.executorName = (<HTMLInputElement>document.getElementById("ExecutorName")).value;
    this.experiment.eventDate = new Date((<HTMLInputElement>document.getElementById('Date')).valueAsDate);
    this.experiment.cost = (<HTMLInputElement>document.getElementById("Cost")).valueAsNumber;

    this.expService.createExperiment(this.experiment)
    .subscribe( data => {
      this.newExperiment.cost = data.cost;
      this.newExperiment.eventDate = data.eventDate;
      this.newExperiment.executorName = data.executorName;
      this.newExperiment.name = data.name;

      console.log(this.newExperiment.name, this.newExperiment.eventDate, this.newExperiment.executorName, this.newExperiment.cost)

    })
    //form.submit();
 }

}
