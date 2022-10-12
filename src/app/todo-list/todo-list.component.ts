import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private api: ApiService) { 
    
    this.fetchToDoList();
  }

  fetchToDoList() {this.api.getToDoList().subscribe((data)=>{this.getToDoS=data})}
  
  getToDoS: any = [];

  ngOnInit(): void {
  }

}
