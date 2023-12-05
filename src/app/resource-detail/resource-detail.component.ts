import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resourceDetail: any;

  constructor(private route: ActivatedRoute, private resourceService: ResourceService) { }

  ngOnInit() {
    const resourceId = this.route.snapshot.params['id'];
    this.resourceDetail = this.resourceService.getResourceDetail(resourceId);
    // Resource detail logic to be implemented
  }
}
