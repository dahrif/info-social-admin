import { CategoryService } from './../../services/category.service';
import { CategoriesComponent } from './../../categories/categories.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  permalink : string = '';
  imgSrc : any = './assets/img-preview.jpg';
  selectedImg: any;
  categories !: any[];
  postForm: FormGroup;

  constructor(private categoryService : CategoryService, private fb: FormBuilder) {

    this.postForm = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(10)]],
      permalink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      category: ['',Validators.required],
      postImage: ['',Validators.required],
      content: ['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val =>{
      this.categories = val
    })
  }

  get fc(){
    return this.postForm.controls
  }


  titleChanged($event: any){
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');    
    
  }

  showPreview(event:any){
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc =  (e.target as any).result;
    }

    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg = event.target.files[0];
  }

  onSubmit(){
    console.log(this.postForm.value);
    
  }
}
