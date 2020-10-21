import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddactorComponent implements OnInit {
  fullName:String="";
  bYear: number=0;
  actorId:String="";
  constructor(private dbService:DatabaseService, private router:Router) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onSaveActor(){
    let obj = { name: this.fullName, bYear: this.bYear };
    this.dbService.createActor(obj).subscribe(result => {
      this.router.navigate( ["/listactors"]);
    });
  }

}
