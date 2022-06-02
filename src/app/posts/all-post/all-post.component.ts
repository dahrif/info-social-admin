import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  postArray!: any[]

  constructor(private postService : PostService) { }

  ngOnInit(): void {

    this.postService.loadData().subscribe(val => {
      console.log(val);
      this.postArray = val;
      
    })
  }

}
