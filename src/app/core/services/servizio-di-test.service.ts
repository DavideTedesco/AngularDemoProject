import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioDiTestService {
  public callMethod(param: string) : void{
    console.log(param);
  }
}
