import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/shared/store/counter.action';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
      
  value!:number
  constructor(private store:Store<{counter:{counter:number}}>){}

  
  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.select('counter').subscribe(data=>{
      this.value=data.counter
    })
    if(this.value>0){
    this.store.dispatch(decrement())
    }
  }

  onReset(){
    this.store.dispatch(reset())
  }
}
