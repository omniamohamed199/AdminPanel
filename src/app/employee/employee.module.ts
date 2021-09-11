import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const routes: Routes = [
  {
    path: "Add", component: AddComponent
  }
]

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory:
          EmployeeHttpLoaderFactory
        ,
        deps: [HttpClient]
      }
    })
  ]
})
export class EmployeeModule { }
export function EmployeeHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/Employee/', '.json');
}