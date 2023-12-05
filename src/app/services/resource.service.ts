import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor() { }

  getResources() {
    // Return mock resource data
    return [
      { id: 1, name: 'Resource 1' },
      { id: 2, name: 'Resource 2' },
      // Add more mock resources
    ];
  }

  // Method to be implemented for fetching specific resource details
  getResourceDetail(id: number) {
    // To be implemented
  }
}
