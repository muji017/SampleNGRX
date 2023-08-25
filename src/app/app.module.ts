import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { PageComponent } from './component/page/page.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { CustomComponent } from './component/custom/custom.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NavbarComponent } from './component/navbar/navbar.component';
import { userReducer } from './shared/store/users/user.reducer';
import { UserlistComponent } from './component/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PageComponent,
    CustomComponent,
    NavbarComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({counter:counterReducer,user:userReducer}),
    BrowserAnimationsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
