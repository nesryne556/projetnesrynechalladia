import { Component, Input, OnInit } from '@angular/core';
import { Commentaires } from 'src/app/models/commentaires';

@Component({
  selector: 'nes-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input() comment:Commentaires;
  constructor() { }

  ngOnInit(): void {
  }

}
