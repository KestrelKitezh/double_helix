import { Component, OnInit } from '@angular/core';

export interface Oils{
  name: string;
  src: string;
}

@Component({
  selector: 'app-blight',
  templateUrl: './blight.component.html',
  styleUrls: ['./blight.component.scss']
})
export class BlightComponent implements OnInit {
  // Vars
  // --------------------------------------------------------------------------
  //
  selected: string[] = [];
  oil: Oils[] = [
    {name: "clear", src: "../../../../assets/png/exile/blight/Clear_Oil_inventory_icon.png"},
    {name: "sepia", src: "../../../../assets/png/exile/blight/Sepia_Oil_inventory_icon.png"},
    {name: "amber", src: "../../../../assets/png/exile/blight/Amber_Oil_inventory_icon.png"},
    {name: "verdant", src: "../../../../assets/png/exile/blight/Verdant_Oil_inventory_icon.png"},
    {name: "teal", src: "../../../../assets/png/exile/blight/Teal_Oil_inventory_icon.png"},
    {name: "azure", src: "../../../../assets/png/exile/blight/Azure_Oil_inventory_icon.png"},
    {name: "indigo", src: "../../../../assets/png/exile/blight/Indigo_Oil_inventory_icon.png"},
    {name: "violet", src: "../../../../assets/png/exile/blight/Violet_Oil_inventory_icon.png"},
    {name: "crimson", src: "../../../../assets/png/exile/blight/Crimson_Oil_inventory_icon.png"},
    {name: "black", src: "../../../../assets/png/exile/blight/Black_Oil_inventory_icon.png"},
    {name: "opalescent", src: "../../../../assets/png/exile/blight/Opalescent_Oil_inventory_icon.png"},
    {name: "silver", src: "../../../../assets/png/exile/blight/Silver_Oil_inventory_icon.png"},
    {name: "golden", src: "../../../../assets/png/exile/blight/Golden_Oil_inventory_icon.png"},
    {name: "undefined", src: "../../../../assets/png/exile/blight/unselected.png"},
  ];
  maxOil = 0;
  imgTypeSelected: string = "../../../../assets/png/exile/blight/unselected.png";
  imgSelectedImgOne: string = "../../../../assets/png/exile/blight/unselected.png";
  imgSelectedImgTwo: string = "../../../../assets/png/exile/blight/unselected.png";
  imgSelectedImgThree: string = "../../../../assets/png/exile/blight/unselected.png";


  constructor() { }

  ngOnInit(): void {
    this.amuletToggle();
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

    this.pushImageSource();
    this.checkCombination();
  }

  unselectSecondOil() {
    console.log("Removed " + this.selected[1]);
    this.selected.splice(1, 1);
    console.log(this.selected);

    this.pushImageSource();
    this.checkCombination();
  }

  unselectThirdOil() {
    console.log("Removed " + this.selected[2]);
    this.selected.splice(2, 1);
    console.log(this.selected);
    
    this.pushImageSource();
    this.checkCombination();
  }

  // Oil selects
  // --------------------------------------------------------------------------
  //
  clearOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("clear");
      // console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  sepiaOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("sepia");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  amberOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("amber");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }
  verdantOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("verdant");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }
  tealOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("teal");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }
  azureOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("azure");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }
  indigoOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("indigo");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  violetOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("violet");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  crimsonOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("crimson");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  blackOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("black");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  opalescentOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("opalescent");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  silverOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("silver");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  goldenOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("golden");
      console.log(this.selected);

      this.pushImageSource();
      this.checkCombination();
    }
  }

  // Checking oil combination
  // --------------------------------------------------------------------------
  //
  checkCombination() {}

  // Changing images
  // --------------------------------------------------------------------------
  //
  pushImageSource() {
    let x = this.selected[0];
    let y = this.selected[1];
    let z = this.selected[2];
    
    for(var _i=0; _i < this.oil.length; _i++) {
      if (x == this.oil[_i].name) {
        this.imgSelectedImgOne = this.oil[_i].src
      }
      if (y == this.oil[_i].name) {
        this.imgSelectedImgTwo = this.oil[_i].src
      }
      if (z == this.oil[_i].name) {
        this.imgSelectedImgThree = this.oil[_i].src
      }
    }
  }
}

