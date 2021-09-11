import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nserviceService } from './Services/i18nservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminPanel';
  currentLang: string = ''
  constructor(translate: TranslateService, private i18nService: I18nserviceService) {
    this.currentLang = localStorage.getItem('lang') || 'en'
    translate.setDefaultLang(this.currentLang);
    translate.use(this.currentLang);
    this.i18nService.changeDirection(this.currentLang)
  }

}
