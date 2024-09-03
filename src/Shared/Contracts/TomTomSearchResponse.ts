export interface TomTomSearchResponse {
  summary: Summary;
  results: Result[];
}

interface Result {
  type: string;
  id: string;
  score: number;
  info: string;
  poi: Poi;
  address: Address;
  position: Position;
  viewport: Viewport;
  entryPoints: EntryPoint[];
}

interface Summary {
  query: string;
  queryType: string;
  queryTime: number;
  numResults: number;
  offset: number;
  totalResults: number;
  fuzzyLevel: number;
  queryIntent: string[];
}

interface CategorySet {
  id: number;
}

interface ClassificationName {
  nameLocale: string;
  name: string;
}

interface Classification {
  code: string;
  names: ClassificationName[];
}

interface Poi {
  name: string;
  categorySet: CategorySet[];
  categories: string[];
  classifications: Classification[];
}

interface Address {
  streetName: string;
  municipality: string;
  neighbourhood: string;
  countrySecondarySubdivision: string;
  countrySubdivision: string;
  countrySubdivisionName: string;
  countrySubdivisionCode: string;
  postalCode: string;
  extendedPostalCode: string;
  countryCode: string;
  country: string;
  countryCodeISO3: string;
  freeformAddress: string;
  localName: string;
}

interface Position {
  lat: number;
  lon: number;
}

interface Viewport {
  topLeftPoint: Position;
  btmRightPoint: Position;
}

interface EntryPoint {
  type: string;
  position: Position;
}
