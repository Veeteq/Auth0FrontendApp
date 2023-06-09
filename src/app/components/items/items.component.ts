import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { Message } from 'src/app/model/message';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Observable<Item[]>;
  message: string;
  status: string;
  errMsg: string;

  constructor(private itemService: ItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.getMessage();
    this.items = this.itemService.getAll();
  }

  private getMessage() {
    this.itemService.getMessage().subscribe({
      next: (data: Message) => {
        this.message = data.message;
      },
      error: error => {
          console.error('There was an error!', error);
      }
    });
    
  }

  addItem() {
    this.router.navigate(['add']);
  }

  editItem(id: number) {
    this.router.navigate(['edit', id]);
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe({
      next: data => {
          this.status = 'Delete successful';
          this.reloadData();
      },
      error: error => {
          this.errMsg = error.message;
          console.error('There was an error!', error);
      }
    });
  }
}
