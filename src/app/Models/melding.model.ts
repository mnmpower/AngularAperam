import DateTimeFormat = Intl.DateTimeFormat;
import {Plaats} from "./plaats.model";
import {Persoon} from "./persoon.model";

export class Melding {
  numberID: number;
  overtrederID: number;
  plaatsID: number;
  tijdstip: DateTimeFormat;
  plaats: Plaats;
  persoon: Persoon;

  constructor() {
  }
}
