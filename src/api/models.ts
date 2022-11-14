export interface Image {
  fileName: string;
  imagePath: string;
  personName: string;
}

export interface FoundResult {
  result: boolean;
  matches: string[];
}
