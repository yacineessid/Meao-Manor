import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/models/catModel';
import { CatService } from 'src/services/cat.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent {
  cat: Cat | undefined;
  showSuccessAlert:boolean=false
  @ViewChild('adoptionModal') adoptionModal: any;
adoptionForm: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit(): void {
    const catId = Number(this.route.snapshot.paramMap.get('id'));
    this.catService.getCatById(catId).subscribe(cat => this.cat = cat);
  }

 

  openModal() {
    this.adoptionModal.show();
  }
  closeModal() {
    this.adoptionModal.hide();
  }


  showAlert(){
    
    setTimeout(() => {
      this.showSuccessAlert = true;
      }, 2000);
  }
}
