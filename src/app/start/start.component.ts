import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SharingDataService } from '../country/ui/exam/SharingData.service';
import { ToastrService } from 'ngx-toastr';
import { Toastr } from './toastr';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css',
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class StartComponent implements OnInit {
  private storageName = "Register";
  
  private storageToastr = '';

  constructor(
    private sharingDataService: SharingDataService,
    private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.storageToastr = this.sharingDataService.getData(this.storageName);
    if (this.storageToastr !== undefined){
      this.showToastr(this.storageToastr);
    }
    this.toastrService.success("asdasdasd", "asdasdasd");
  }

  showToastr(jsonToParse: string) {
    var toastr = jsonToParse as unknown as Toastr;

    switch(toastr.type) {
      case 'success': {
        this.toastrService.success(toastr.message, toastr.type);
        this.sharingDataService.clearUserSettings(this.storageName);
        break;
      }
      case 'fail': {
        this.toastrService.error(toastr.message, toastr.type);
        this.sharingDataService.clearUserSettings(this.storageName);
        break;
      }
    }
  }
}
