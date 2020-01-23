import {Melding} from './melding.model';
import {Type} from './type.model';

export class Persoon {
  persoonID: number;
  voornaam: String;
  naam: String;
  usernaam: String;
  typeID: number;
  wachtwoord: String;
  meldingen: Melding[];
  type: Type;

  constructor() {
  }
}
