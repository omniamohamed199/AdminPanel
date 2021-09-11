import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { I18nserviceService } from 'src/app/Services/i18nservice.service';
import { Employee } from '../../models/Employee'
import { EmpOperationService } from '../../Services/emp-operation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('AddEmplForm') AddEmplForm: NgForm
  Employee = new Employee()
  EmployeeList: Employee[] = []
  successMessage: String = ''
  CheckedAll: boolean = false
  DepartmentsList: any[] = [{
    Depart_ID: 100,
    Depart_Name: 'Dept100'
  }, {
    Depart_ID: 101,
    Depart_Name: 'Dept101'
  }]
  currentLang: string = ''
  constructor(private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>,
    private EmpServ: EmpOperationService, public translate: TranslateService, private i18nService: I18nserviceService) {
    this.currentLang = localStorage.getItem('lang') || 'en'
    translate.setDefaultLang(this.currentLang);
    translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.Employee.Birthdate = this.dateAdapter.toModel(this.ngbCalendar.getToday())
    this.i18nService.localeEvent.subscribe(locale => { console.log(locale); this.translate.use(locale) });
  }
  AddEmployee() {
    this.EmpServ.AddNew(this.Employee)
    this.successMessage = "Employee Added Successfully!"
    setTimeout(() => {
      this.successMessage = ''
      this.AddEmplForm.reset()
      this.GetAllEmp()
    }, 500);
  }
  GetAllEmp() {
    this.EmployeeList = this.EmpServ.GetAll()
    console.log(this.EmployeeList)
  }
  CheckOrUnCheckAll() {
    this.EmployeeList.forEach((item) => {
      item.Checked = !item.Checked
    })
    this.IsAllChecked()
  }
  IsAllChecked() {
    this.CheckedAll = this.EmployeeList.every(item => item.Checked == true)
  }

}
