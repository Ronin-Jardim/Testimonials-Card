import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from '../service/testimonials.service';
import { Interface } from '../interfaces/interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit{
items: Interface[] = [];

constructor(public testimonialsService: TestimonialsService) {

}
  ngOnInit() {
    this.items = this.testimonialsService.getData();
    // Use the data as needed
  }
}
