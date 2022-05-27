import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ServizioDiTestService} from "../../../core/services/servizio-di-test.service";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit, OnDestroy {

  @Input() public param : string | undefined;

  public name : string | undefined;

  constructor(
    private servizioDiTestService : ServizioDiTestService
  ) { }

  public ngOnInit(): void {
    console.log("On init")
  }

  public ngOnDestroy(): void{
    console.log("On destroy")
  }

}
