import DateTimeFormat = Intl.DateTimeFormat;

export class Tabel {

  tagnummer: number;
  naam: string;
  voornaam: string;
  type: string;
  overtredingen: number;
  recentste: DateTimeFormat;
  locatie: string;

  constructor() {
  }


}
