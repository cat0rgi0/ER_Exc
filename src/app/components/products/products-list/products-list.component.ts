import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  list: Array<any>;
  cols;
  constructor(public dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getData('products').subscribe((resp: Array<any>) => {
      this.list = resp;
      if(this.list.length > 0){
        this.cols = Object.keys(resp[0]).map(e => {
          return {field: e, header: e}
          });
      }
    });
    
  }

}