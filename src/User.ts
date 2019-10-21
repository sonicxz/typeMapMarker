import fakeUser from "faker";
import { Mappable } from "./CustomMaps";

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  //   if we don't use contructor here , we won't be able to initialise again
  constructor() {
    this.name = fakeUser.name.firstName();
    this.location = {
      lat: parseFloat(fakeUser.address.latitude()),
      long: parseFloat(fakeUser.address.longitude())
    };
  }
  markerContent = () => {
    return `<h3>Name: ${this.name}</h3>`;
  };
}
export default User;
