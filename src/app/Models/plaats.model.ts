import {Melding} from './melding.model';

export class Plaats {

  plaatsID: number;
  naam: string;
  xcord: number;
  ycord: number;

  meldingen: Melding[];
  constructor() {
  }
}
