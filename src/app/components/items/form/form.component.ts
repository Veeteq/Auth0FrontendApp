import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number;
  item: Item = new Item();
  submitted: boolean = false;

  constructor(private itemService: ItemService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.item = new Item();

    if(this.id) {
      this.findById();
    }

  }

  onSubmit() {
    this.submitted = true;
    if (this.id) {
      this.updateItem();
    } else {
      this.saveItem();    
    }
  }

  private findById() {
    this.itemService.findById(this.id).subscribe({
      next: data => {
        console.log(data)
        this.item = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  private saveItem() {
    this.itemService.saveItem(this.item).subscribe({
      next: data => {
        console.log(data)
        this.item = new Item();
        this.gotoList();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  
  private updateItem() {
    this.itemService.updateItem(this.id, this.item).subscribe({
      next: data => {
        console.log(data);
        this.item = new Item();
        this.gotoList();
      }, 
      error: error => {
        console.log(error);
      }
    });
  }

  private gotoList() {
    this.router.navigate(['/items']);
  }
}
