import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/servicio.cls';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detalls-service',
  templateUrl: './detalls-service.component.html',
  styleUrls: ['./detalls-service.component.css']
})
export class DetallsServiceComponent implements OnInit {
 servicio: Servicio
  constructor(private projectservice: ProjectService) { }

  ngOnInit(): void {
  this.servicio= this.projectservice.servicio
  }

}
