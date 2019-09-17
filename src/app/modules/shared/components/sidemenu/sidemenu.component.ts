import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {


  public menuItems: Array<IMenuItem> = [
    {
      link: 'users',
      description: 'Users'
    },
    {
      link: '/generic/products',
      description: 'Products'
    },
    {
      link: '/generic/orders',
      description: 'Orders'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage(item: IMenuItem) {
    this.router.navigate([ item.link]);
  }

}

export interface IMenuItem {
  link: string;
  description: string;
}
