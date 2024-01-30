import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PreviousRouteService } from '../../../services/previousRoute.service';
import { GenerateExamForm } from '../../../forms/generateExam.form';
import { ContinentsCheckboxComponent } from '../../../shared/continents/continents-checkbox/continents-checkbox.component';
import { CountryTableComponent } from '../country-table/country-table.component';
import { PaginationComponent } from '../../../../common/pagination/pagination.component';
import { NumberOfCountrySelectComponent } from '../number-of-country-select/number-of-country-select.component';

@Component({
  standalone: true,
  selector: 'app-list-of-countries',
  templateUrl: './list-of-country.component.html',
  imports: [
    CountryTableComponent,
    ContinentsCheckboxComponent,
    NumberOfCountrySelectComponent,
    PaginationComponent,
    RouterLink
  ],
  providers: [GenerateExamForm],
})
export class ListOfCountriesComponent implements OnInit {
  private DEFAULT_NUMBER = 1;
  private previousUrl: string = '';

  public continentsChecked: string[] = ['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
  public currentPage: number = this.DEFAULT_NUMBER;
  public totalPages: number = this.DEFAULT_NUMBER;
  public totalItems: number = 10;
  public itemsPerPage: number = 10;

  constructor(
    private route: ActivatedRoute,
    private previousRouteService: PreviousRouteService
  ) {
  }
  
  ngOnInit(): void {
    this.previousUrl = this.previousRouteService.getPreviousUrl();
    this.continentsChecked = this.setCheckedContinentByDefault();
  }

  getCheckedContinents(continents: string[]){
    this.continentsChecked = continents;
  }

  getContinentsFromPath(){
    let continentsFromPath: string[] = [];
    
    this.route.queryParamMap.subscribe( params => {
      continentsFromPath = params.getAll('continentsChecked');
    });

    return continentsFromPath;
  }

  setCheckedContinentByDefault(): string[]{
    if (this.previousUrl.includes('/country/generateExam')) {
      return this.getContinentsFromPath();
    }

    return this.continentsChecked;
  }

  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
  }

  setTotalPages(totalPages: number) {
    this.totalPages = totalPages;
  }

  setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
  }

  setItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
  }
}
