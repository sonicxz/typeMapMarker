import User from "./User";
import { Comp } from "./Company";
import CustomMap from "./CustomMaps";
const user = new User();

const comp = new Comp();

const customMap = new CustomMap("maps");

// CustomMap.addMarker won't work
customMap.addMarker(user);
customMap.addMarker(comp);
