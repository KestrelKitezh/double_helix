import { Component, OnInit } from '@angular/core';

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
  oils: string[] = [];
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

      this.pushImageSource();
      this.checkCombination();
    }
  }

  sepiaOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("sepia");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  amberOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("amber");
      console.log(this.selected);

      this.checkCombination();
    }
  }
  verdantOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("verdant");
      console.log(this.selected);

      this.checkCombination();
    }
  }
  tealOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("teal");
      console.log(this.selected);

      this.checkCombination();
    }
  }
  azureOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("azure");
      console.log(this.selected);

      this.checkCombination();
    }
  }
  indigoOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("indigo");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  violetOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("violet");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  crimsonOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("crimson");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  blackOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("black");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  opalescentOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("opalescent");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  silverOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("silver");
      console.log(this.selected);

      this.checkCombination();
    }
  }

  goldenOilClick() {
    if (this.selected.length < this.maxOil) {
      this.selected.push("golden");
      console.log(this.selected);

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
    let x,y,z = "";
    

    this.imgSelectedImgOne = "";
    this.selected;
  }
}

