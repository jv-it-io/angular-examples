export interface IRace {
  raceId?: string;
  city?: string;
}

export class Race implements IRace {
  constructor(
    public raceId?: string,
    public city?: string
  ) {}
}
