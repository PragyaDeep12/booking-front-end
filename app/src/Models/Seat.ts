export interface Seat {
  row: String;
  columns: {
    booked: boolean;
    column: number;
  }[];
}
