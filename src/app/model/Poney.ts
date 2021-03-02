export interface IPoney {
  poneyId?: number;
  poneyName?: string;
}

export class Poney implements IPoney {
constructor(
  public poneyId?: number,
  public poneyName?: string
) {}
}
