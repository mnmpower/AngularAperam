import {Plaats} from "./plaats.model";
import {Melding} from "./melding.model";
import {Type} from "./type.model";

export class Persoon {
  persoonID: number;
  voornaam: String;
  naam: String;
  usernaam: String;
  TypeID: number;
  wachtwoord: String;
  meldingen: Melding[];
  type: Type;

  constructor() {
  }
}
