import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: any[] = [];

  constructor(private resourceService: ResourceService, private router: Router) { }

  ngOnInit() {
    this.resources = this.resourceService.getResources();
  }

  viewDetail(id: number) {
    this.router.navigate(['/resource-detail', id]);
  }
}
