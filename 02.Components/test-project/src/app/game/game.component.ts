import { Component, OnInit } from '@angular/core';
import {Game} from "../domain/game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<Game>;
  isShown: boolean = false;
  name_user: string;
  constructor() {
    this.games = [{id: 1, title: "Contra", image: "https://media0.mensxp.com/media/content/2013/May/1369382418_61189.jpg"}, {id: 2, title: "Super Mario", image: "https://i.kinja-img.com/gawker-media/image/upload/s--qPViLv1T--/c_scale,f_auto,fl_progressive,q_80,w_800/17g98i3kcj6zpjpg.jpg"}]
  }

  showContacts(){
    this.isShown = !this.isShown;
  }

  showName(name){
    this.name_user = name;
    console.log(name);
  }

  ngOnInit() {
  }

}
