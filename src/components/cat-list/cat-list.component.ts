import { Component, OnInit } from '@angular/core';
import { CATS } from 'src/data/catsData';
import { Cat } from 'src/models/catModel';
import { CatService } from 'src/services/cat.service';


@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  cats: Cat[] = [];
  filteredCats: Cat[] = CATS;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    console.log(`cats`, this.cats);
    this.catService.getCats().subscribe(cats => this.cats = cats);
  }

  filterCats(criteria: any): void {
    this.catService.filterCats(criteria).subscribe(cats => this.cats = cats);
  }



  filterByGender(event: any): void {
    const gender = event.target.value;
    if (gender === 'all') {
      this.filteredCats = this.cats;
    } else {
      this.filteredCats = this.cats.filter(cat => cat.gender === gender);
    }
  }
}
