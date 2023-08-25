import { Component , OnInit ,OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeName } from 'src/app/shared/store/counter.action';
import { counterModel } from 'src/app/shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getcountor, getname } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit,OnDestroy {

  pageSubscription!:Subscription
  counterValue!:number
  newName!:string
  constructor(private store:Store<{counter:counterModel}>){}

   counter$ !:Observable<counterModel>
   ngOnInit(): void {
     
    this.changeCounter()
    // this.counter$ =this.store.select('counter');
   }

   changeCounter():void{
     this.pageSubscription=this.store.select(getcountor).subscribe(data=>{
        this.counterValue=data
    console.log("inside page")

     })
     
   }


   changeName():void{
     this.store.dispatch(changeName({myName:this.newName}))
   }
   ngOnDestroy(): void {
    if(this.pageSubscription){
     this.pageSubscription.unsubscribe()
    }
  }
}
