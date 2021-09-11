import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nserviceService {

  localeEvent = new Subject<string>();
  constructor(private translate: TranslateService) { }

  changeLocale(locale: string) {

    this.translate.use(locale);
    this.localeEvent.next(locale);
    localStorage.setItem('lang', locale)
    this.changeDirection(locale);
  }
  changeDirection(locale) {
    if (locale == 'ar') {
      document.getElementById('Lang').setAttribute('href', './assets/css/bootstrap.rtl.css');
      document.body.dir = 'rtl'

    } else {
      document.getElementById('Lang').setAttribute('href', './assets/css/bootstrap.css');
      document.body.dir = 'ltr'
    }
  }
}
