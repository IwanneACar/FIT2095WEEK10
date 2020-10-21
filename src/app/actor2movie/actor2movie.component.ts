import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actor2movie',
  templateUrl: './actor2movie.component.html',
  styleUrls: ['./actor2movie.component.css']
})
export class Actor2movieComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  name: string= "";
  title:string ="";

  constructor(private dbservice:DatabaseService,private router:Router) { }
  selectActor(item){
    this.name=item.name;

  }
  selectMovie(item){
    this.title = item.title;

  }
  onAddActToMov(){
    this.dbservice.addActor(this.name,this.title).subscribe(result=>{
      this.router.navigate(['/listmovies']);
    });
  }

  ngOnInit(): void {
    console.log('A2M WORK');
    //get all actors
    this.dbservice.getActors().subscribe((data: any[])=>{
      this.actorsDB=data;
    });
    //get all movies
    this.dbservice.getMovies().subscribe((data: any[])=>{
      this.moviesDB=data;
    })
  }

}
