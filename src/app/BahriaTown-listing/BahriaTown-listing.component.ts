import { Component, OnInit } from '@angular/core';
import { HOUSECARDS, HouseCards, Menu } from '../models';
import { Navigation } from '../navigation';

@Component({
  selector: 'app-BahriaTown-listing',
  templateUrl: './BahriaTown-listing.component.html',
  styleUrls: ['./BahriaTown-listing.component.css']
})
export class BahriaTownListingComponent implements OnInit {

  navigation: Menu[];

  houseCards: HouseCards[]
  newhouseCards: HouseCards[]

  interval: number
  proportion: number
  slidess: number
  limit: number;
  oFFSet: number;
  isClicked: boolean

  constructor() { 
    this.navigation = Navigation.menu
    this.houseCards = HOUSECARDS
    this.limit = 3
		this.oFFSet = 0
    this.isClicked = false

    console.log(this.houseCards[0].images[0].image)
   }

  ngOnInit(): void {
    this.newhouseCards=this.houseCards.filter((val,idx)=>{
      if(idx < this.limit) return val
      return null
    })
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
