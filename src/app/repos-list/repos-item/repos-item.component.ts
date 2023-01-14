import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-repos-item',
  templateUrl: './repos-item.component.html',
  styleUrls: ['./repos-item.component.css']
})
export class ReposItemComponent implements OnInit {
  @Input() repos=[]
  ngOnInit(): void {
    console.log(this.repos)
  }
  
}
