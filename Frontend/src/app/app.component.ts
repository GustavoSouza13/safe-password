import { Component, OnInit } from '@angular/core';
import { ContractService } from './services/contract/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularDapp';
  constructor(private teste: ContractService) {

  }
  ngOnInit(): void {
    this.teste.connectAccount()
  }
}
