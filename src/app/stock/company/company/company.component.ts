import { IexService } from '../../../shared/iex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {

  constructor(private iexService: IexService) { }

  ngOnInit() {
  }

}
