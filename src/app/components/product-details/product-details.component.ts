import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() id = '';

  ngOnInit() { 
    console.log(this.id);
  }

}
