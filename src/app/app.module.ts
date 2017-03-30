import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LabelComponent } from './go-label/src/app/go-label/component/label.component';
import { TextareaComponent } from './go-textarea/src/app/go-textarea/component/textarea.component';
import { TextareaDocument } from './go-textarea/src/app/go-textarea/doc/textarea.document';
import { CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective } from './go-directive/component/index';

const appRoutes: Routes = [
  {path: '', component: TextareaDocument}
]

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule. forRoot(appRoutes, {useHash: true}),
  ],
  declarations: [ 
    AppComponent,
    LabelComponent,
    TextareaComponent,
    TextareaDocument,
    CustomCheckDirective, CustomDisabledDirective, CustomMaxlengthDirective, CustomReadonlyDirective,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
