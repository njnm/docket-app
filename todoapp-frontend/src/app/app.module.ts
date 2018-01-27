import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './main/app.component';
import { TodoComponent } from './todos/todo.component';

import { TodoService } from './todos/todo.service';
import { HttpService } from './utils/http.service';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2FilterPipeModule
  ],
  providers: [
    TodoService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
