import { Component, OnInit } from '@angular/core';
import {Furniture} from "../../models/furniture";
import {ActivatedRoute} from "@angular/router";
import {FurnitureService} from "../furniture.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<Array<Furniture>>;

  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getUserFurniture();
  }

}
