import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreService } from './services/store.service';
import { StoresComponent } from './Store/stores/stores.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { ListComponent } from './Maintenanace/list/list.component';

import { NewmaintComponent } from './Maintenanace/newmaint/newmaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaintenanceService } from './services/maintenance.service';


@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    NavbarComponent,
    
    ListComponent,
    NewmaintComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoreService, MaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
