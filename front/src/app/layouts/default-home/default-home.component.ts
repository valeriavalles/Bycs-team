import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.css']
})
export class DefaultHomeComponent implements OnInit {
  projects = [];
  // isHidden: boolean=true;
  constructor(private readonly projectService: ProjectService) { }
  // getNoticias() {
  //   this.projectService.getNoticia().subscribe((rest: any) => {
  //     this.projects = rest.data;
  //     console.log(rest)
  //     // console.log(this.projects);
  //   })
  // }


  ngOnInit(): void {
    // this.getNoticias();
  }

}
