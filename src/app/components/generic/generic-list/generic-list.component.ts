import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent implements OnInit {


  public isLoading: boolean = false;
  list: Array<any>;
  cols;
  constructor(public dataService: DataServiceService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      this.dataService.getData(params['params']['name']).subscribe((resp: Array<any>) => {
        this.list = resp;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000) 
        if(this.list.length > 0){
          this.cols = Object.keys(resp[0]).map(e => {
            return {field: e, header: e}
            });
        }
      });
      
    },
    error => {
      this.isLoading = false;
      alert(JSON.stringify(error))
    });
  }

}
