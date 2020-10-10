import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blight',
  templateUrl: './blight.component.html',
  styleUrls: ['./blight.component.scss']
})
export class BlightComponent implements OnInit {
  // tiles: Tile[] = [
  //   { text: 'text', cols: 1, rows: 1, color: 'lightblue'},
  // ];
  selected: string[] = [];
  maxOil = 0;
  imgTypeSelected: string = "../../../../assets/png/exile/blight/unselected.png"

  constructor() { }

  ngOnInit(): void {
  }

  // Toggles
  // --------------------------------------------------------------------------
  //
  ringToggle() {
    this.maxOil = 2;
    console.log("[DEBUG] maxOil = " + this.maxOil)
    this.imgTypeSelected = "../../../../assets/png/exile/blight/Unset_Ring_inventory_icon.png"
  }

  amuletToggle() {
    this.maxOil = 3;
    console.log("[DEBUG] maxOil = " + this.maxOil)
    this.imgTypeSelected = "../../../../assets/png/exile/blight/Onyx_Amulet_inventory_icon.png"
  }

  mapToggle() {
    this.maxOil = 3;
    console.log("[DEBUG] maxOil = " + this.maxOil)
    this.imgTypeSelected = "../../../../assets/png/exile/blight/Overgrown_Ruin_Map_(Heist)_inventory_icon.png"
  }

  // selected unselect
  // --------------------------------------------------------------------------
  //

  unselectFirstOil() {
    console.log("Removed " + this.selected[0]);
    this.selected.splice(0, 1);
    console.log(this.selected);
  }

  unselectSecondOil() {
    console.log("Removed " + this.selected[1]);
    this.selected.splice(1, 1);
    console.log(this.selected);
  }

  unselectThirdOil() {
    console.log("Removed " + this.selected[2]);
    this.selected.splice(2, 1);
    console.log(this.selected);
  }

  // Oil selects
  // --------------------------------------------------------------------------
  //
  clearOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("clear");
      console.log(this.selected);

    }
  }

  sepiaOilClick() {
    
  }

  amberOilClick() {

  }
  verdantOilClick() {

  }
  tealOilClick() {

  }
  azureOilClick() {

  }
  indigoOilClick() {

  }

  violetOilClick() {

  }

  crimsonOilClick() {

  }

  blackOilClick() {
    
  }

  opalescentOilClick() {

  }

  silverOilClick() {

  }

  goldenOilClick() {

  }
}
