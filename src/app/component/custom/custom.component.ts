import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { custom, increment, reset } from 'src/app/shared/store/counter.action';
import { counterModel } from 'src/app/shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getname } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit,OnDestroy{
  
  countorSubscription!:Subscription
  myName!:string
  constructor(private store:Store<{counter:counterModel}>)
  { }
  
  ngOnInit(): void {
   
 
    this.countorSubscription=this.store.select(getname).subscribe(data=>{
      this.myName=data
      console.log("inside custom")
   })
  }
 ngOnDestroy(): void {
   if(this.countorSubscription){
    this.countorSubscription.unsubscribe()
   }
 }

  
  labelInput!:number
  actiontype="add"
   onCustom(){
    this.store.dispatch(custom({value:+this.labelInput,action:this.actiontype}))
   }
}
