import {Melding} from './melding.model';
import {Type} from './type.model';

export class Persoon {
  persoonID: number;
  voornaam: string;
  naam: string;
  usernaam: string;
  typeID: number;
  wachtwoord: string;
  meldingen: Melding[];
  type: Type;
  token: string;

  constructor() {
  }
}
