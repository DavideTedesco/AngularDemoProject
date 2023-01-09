import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServizioDiTestService} from "../../core/services/servizio-di-test.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private servizioDiTestService : ServizioDiTestService
  ) { }

  public ngOnInit(): void {
    console.log("On init");
  }

  public ngOnDestroy(): void{
    console.log("On destroy");
  }

  public test(): void{
    console.warn(data: "Eccomi");
  }

}
