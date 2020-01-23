import DateTimeFormat = Intl.DateTimeFormat;
import {Plaats} from './plaats.model';
import {Persoon} from './persoon.model';

export class Melding {
  meldingID: number;
  persoonID: number;
  plaatsID: number;
  tijdstip: DateTimeFormat;
  plaats: Plaats;
  persoon: Persoon;

  constructor() {
  }
}
