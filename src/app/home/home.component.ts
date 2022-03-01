import { Component, OnInit } from '@angular/core';
import { Card, CARDS, Menu, PROCESS, Process } from '../models';
import { Navigation } from '../navigation';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NewListingComponent } from '../new-listing/new-listing.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navigation: Menu[];
  process: Process[];
  cards: Card[];

  constructor(private router: Router,
              private dialog: MatDialog) { 
    this.navigation = Navigation.menu
    this.process = PROCESS
    this.cards = CARDS
   }

  ngOnInit(): void {
  }

  onClick(url: string){
    console.log(url)
    this.router.navigateByUrl(url);
  }

  onBtnClick(){
    
    const config = {
      width: '50vw',
      maxWidth: '50vw',
      height: '50vh',
      panelClass: 'full-dialog-container'
    }
    const dialogRef = this.dialog.open(NewListingComponent, config);

  }

}

