export interface IPoney {
studentId?: number;
studentName?: string;
}

export class Poney implements IPoney {
constructor(
  public studentId?: number,
  public studentName?: string
) {}
}
