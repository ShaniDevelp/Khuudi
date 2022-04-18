import { Component, OnInit } from '@angular/core';
import { GULBERGHOUSECARDS, HouseCards, Menu } from '../models';
import { Navigation } from '../navigation';

@Component({
  selector: 'app-Rawalpindi-listing',
  templateUrl: './Rawalpindi-listing.component.html',
  styleUrls: ['./Rawalpindi-listing.component.css']
})
export class RawalpindiListingComponent implements OnInit {

  navigation: Menu[];

  houseCards: HouseCards[]
  newhouseCards: HouseCards[]

  interval: number;
  proportion: number;
  slidess: number;
  limit: number;
  oFFSet: number;
  isClicked: boolean;


  constructor() { 
    this.navigation = Navigation.menu;
    this.houseCards = GULBERGHOUSECARDS;
    this.limit = 5;
		this.oFFSet = 0;
    this.isClicked = false;

    console.log(this.houseCards[0].images[0].image)
   }

  ngOnInit(): void {
    this.newhouseCards=this.houseCards.filter((val,idx)=>{
      if(idx < this.limit) return val
      return null
    })
    for (let index = 0; index < this.newhouseCards.length; index++) {
          console.log(this.houseCards[0].images);
          
    }

  }

  onPageChange(ev: any){

    this.limit = ev.pageSize;
		this.oFFSet = (ev.pageSize  *  (ev.pageIndex + 1));
		this.filterData()

  }

  filterData(){
		this.newhouseCards = this.houseCards.filter((obj, idx)=>{
			if((idx) > (this.oFFSet - (this.limit + 1)) && (idx < this.oFFSet && (idx) < (this.houseCards.length))){
				return obj ;
			} return null
		})
	}

  onToggle(){
    this.isClicked = !this.isClicked;
  }

}
