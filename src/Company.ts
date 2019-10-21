import fakeComp from "faker";
import { Mappable } from "./CustomMaps";

export class Comp implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = fakeComp.company.companyName();
    this.catchPhrase = fakeComp.company.catchPhrase();
    this.location = {
      lat: parseFloat(fakeComp.address.latitude()),
      long: parseFloat(fakeComp.address.longitude())
    };
  }
  markerContent = () => {
    return `<h2>Company Name: ${this.name}</h2>
            <h3>${this.catchPhrase}</h3>`;
  };
}
