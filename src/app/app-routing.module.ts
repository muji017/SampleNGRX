import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './component/userlist/userlist.component';
import { PageComponent } from './component/page/page.component';

const routes: Routes = [

  {path:'',component:PageComponent},
  { path:'userlist',component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
