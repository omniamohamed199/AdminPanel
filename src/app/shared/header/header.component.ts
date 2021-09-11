import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nserviceService } from 'src/app/Services/i18nservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today: Date = new Date()
  constructor(public translate: TranslateService, private i18nService: I18nserviceService) {
  }
  ngOnInit(): void {

  }
  changeLocale(locale: string) {
    this.i18nService.changeLocale(locale);
  }

}
