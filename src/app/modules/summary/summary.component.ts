import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  public data = [
    {
      title: 'Supermercado',
      icon: 'cart',
      details: [
        {
          date: '13/12/2021',
          amount: 234.33
        },
        {
          date: '25/12/2021',
          amount: 2346.44
        },
      ]
    }, {
      title: 'FCI',
      icon: 'podium',
      details: [
        {
          date: '13/12/2021',
          amount: 234.33
        },
        {
          date: '25/12/2021',
          amount: 2346.44
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {}

}
