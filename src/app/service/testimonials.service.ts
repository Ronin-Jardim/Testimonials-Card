import { Injectable } from '@angular/core';
import { Interface } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  public data: Interface[] = [
    {
      name: 'Sarah Dole',
      userName: '@sarahdole',
      imageUrl: '/assets/images/profile.png',
      userTestimonial: 'Ive been searching for high-quality abstract images for my design projects, and Im thrilled to have found this platform. The variety and depth of creativity are astounding!'
    }
  ];
  constructor() { }
  getData(): Interface[] {
    return this.data;
  }
}
