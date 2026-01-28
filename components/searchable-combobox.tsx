"use client";

import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";

// Country data
export interface CountryOption {
  code: string;
  value: string | null;
  continent: string;
  label: string;
}

// Updated values to Title Case to ensure pretty display in the components
export const countries: CountryOption[] = [
  {
    code: '',
    continent: '',
    label: 'Select country',
    value: null
  },
  {
    code: 'dz',
    continent: 'Africa',
    label: 'Algeria',
    value: 'Algeria'
  },
  {
    code: 'au',
    continent: 'Oceania',
    label: 'Australia',
    value: 'Australia'
  },
  {
    code: 'at',
    continent: 'Europe',
    label: 'Austria',
    value: 'Austria'
  },
  {
    code: 'bh',
    continent: 'Asia',
    label: 'Bahrain',
    value: 'Bahrain'
  },
  {
    code: 'bd',
    continent: 'Asia',
    label: 'Bangladesh',
    value: 'Bangladesh'
  },
  {
    code: 'be',
    continent: 'Europe',
    label: 'Belgium',
    value: 'Belgium'
  },
  {
    code: 'br',
    continent: 'South America',
    label: 'Brazil',
    value: 'Brazil'
  },
  {
    code: 'bg',
    continent: 'Europe',
    label: 'Bulgaria',
    value: 'Bulgaria'
  },
  {
    code: 'ca',
    continent: 'North America',
    label: 'Canada',
    value: 'Canada'
  },
  {
    code: 'cn',
    continent: 'Asia',
    label: 'China',
    value: 'China'
  },
  {
    code: 'co',
    continent: 'South America',
    label: 'Colombia',
    value: 'Colombia'
  },
  {
    code: 'hr',
    continent: 'Europe',
    label: 'Croatia',
    value: 'Croatia'
  },
  {
    code: 'cy',
    continent: 'Asia',
    label: 'Cyprus',
    value: 'Cyprus'
  },
  {
    code: 'cz',
    continent: 'Europe',
    label: 'Czech Republic',
    value: 'Czech Republic'
  },
  {
    code: 'dk',
    continent: 'Europe',
    label: 'Denmark',
    value: 'Denmark'
  },
  {
    code: 'do',
    continent: 'North America',
    label: 'Dominican Republic',
    value: 'Dominican Republic'
  },
  {
    code: 'ec',
    continent: 'South America',
    label: 'Ecuador',
    value: 'Ecuador'
  },
  {
    code: 'eg',
    continent: 'Africa',
    label: 'Egypt',
    value: 'Egypt'
  },
  {
    code: 'sv',
    continent: 'North America',
    label: 'El Salvador',
    value: 'El Salvador'
  },
  {
    code: 'fr',
    continent: 'Europe',
    label: 'France',
    value: 'France'
  },
  {
    code: 'de',
    continent: 'Europe',
    label: 'Germany',
    value: 'Germany'
  },
  {
    code: 'gh',
    continent: 'Africa',
    label: 'Ghana',
    value: 'Ghana'
  },
  {
    code: 'gr',
    continent: 'Europe',
    label: 'Greece',
    value: 'Greece'
  },
  {
    code: 'hk',
    continent: 'Asia',
    label: 'Hong Kong',
    value: 'Hong Kong'
  },
  {
    code: 'hu',
    continent: 'Europe',
    label: 'Hungary',
    value: 'Hungary'
  },
  {
    code: 'in',
    continent: 'Asia',
    label: 'India',
    value: 'India'
  },
  {
    code: 'id',
    continent: 'Asia',
    label: 'Indonesia',
    value: 'Indonesia'
  },
  {
    code: 'ir',
    continent: 'Asia',
    label: 'Iran',
    value: 'Iran'
  },
  {
    code: 'ie',
    continent: 'Europe',
    label: 'Ireland',
    value: 'Ireland'
  },
  {
    code: 'il',
    continent: 'Asia',
    label: 'Israel',
    value: 'Israel'
  },
  {
    code: 'it',
    continent: 'Europe',
    label: 'Italy',
    value: 'Italy'
  },
  {
    code: 'jp',
    continent: 'Asia',
    label: 'Japan',
    value: 'Japan'
  },
  {
    code: 'kw',
    continent: 'Asia',
    label: 'Kuwait',
    value: 'Kuwait'
  },
  {
    code: 'lb',
    continent: 'Asia',
    label: 'Lebanon',
    value: 'Lebanon'
  },
  {
    code: 'lu',
    continent: 'Europe',
    label: 'Luxembourg',
    value: 'Luxembourg'
  },
  {
    code: 'my',
    continent: 'Asia',
    label: 'Malaysia',
    value: 'Malaysia'
  },
  {
    code: 'mx',
    continent: 'North America',
    label: 'Mexico',
    value: 'Mexico'
  },
  {
    code: 'ma',
    continent: 'Africa',
    label: 'Morocco',
    value: 'Morocco'
  },
  {
    code: 'nl',
    continent: 'Europe',
    label: 'Netherlands',
    value: 'Netherlands'
  },
  {
    code: 'nz',
    continent: 'Oceania',
    label: 'New Zealand',
    value: 'New Zealand'
  },
  {
    code: 'ng',
    continent: 'Africa',
    label: 'Nigeria',
    value: 'Nigeria'
  },
  {
    code: 'pa',
    continent: 'North America',
    label: 'Panama',
    value: 'Panama'
  },
  {
    code: 'pe',
    continent: 'South America',
    label: 'Peru',
    value: 'Peru'
  },
  {
    code: 'pl',
    continent: 'Europe',
    label: 'Poland',
    value: 'Poland'
  },
  {
    code: 'pt',
    continent: 'Europe',
    label: 'Portugal',
    value: 'Portugal'
  },
  {
    code: 'ro',
    continent: 'Europe',
    label: 'Romania',
    value: 'Romania'
  },
  {
    code: 'ru',
    continent: 'Europe',
    label: 'Russia',
    value: 'Russia'
  },
  {
    code: 'sa',
    continent: 'Asia',
    label: 'Saudi Arabia',
    value: 'Saudi Arabia'
  },
  {
    code: 'rs',
    continent: 'Europe',
    label: 'Serbia',
    value: 'Serbia'
  },
  {
    code: 'sg',
    continent: 'Asia',
    label: 'Singapore',
    value: 'Singapore'
  },
  {
    code: 'si',
    continent: 'Europe',
    label: 'Slovenia',
    value: 'Slovenia'
  },
  {
    code: 'za',
    continent: 'Africa',
    label: 'South Africa',
    value: 'South Africa'
  },
  {
    code: 'kr',
    continent: 'Asia',
    label: 'South Korea',
    value: 'South Korea'
  },
  {
    code: 'es',
    continent: 'Europe',
    label: 'Spain',
    value: 'Spain'
  },
  {
    code: 'ch',
    continent: 'Europe',
    label: 'Switzerland',
    value: 'Switzerland'
  },
  {
    code: 'tw',
    continent: 'Asia',
    label: 'Taiwan',
    value: 'Taiwan'
  },
  {
    code: 'th',
    continent: 'Asia',
    label: 'Thailand',
    value: 'Thailand'
  },
  {
    code: 'tn',
    continent: 'Africa',
    label: 'Tunisia',
    value: 'Tunisia'
  },
  {
    code: 'tr',
    continent: 'Asia',
    label: 'Turkey',
    value: 'Turkey'
  },
  {
    code: 'ae',
    continent: 'Asia',
    label: 'UAE',
    value: 'UAE'
  },
  {
    code: 'gb',
    continent: 'Europe',
    label: 'UK',
    value: 'UK'
  },
  {
    code: 'us',
    continent: 'North America',
    label: 'USA',
    value: 'USA'
  },
  {
    code: 'ua',
    continent: 'Europe',
    label: 'Ukraine',
    value: 'Ukraine'
  },
  {
    code: 'uy',
    continent: 'South America',
    label: 'Uruguay',
    value: 'Uruguay'
  },
  {
    code: 'uz',
    continent: 'Asia',
    label: 'Uzbekistan',
    value: 'Uzbekistan'
  },
  {
    code: 'vn',
    continent: 'Asia',
    label: 'Vietnam',
    value: 'Vietnam'
  }
];

// City data - major cities by country
export interface CityOption {
  value: string | null;
  label: string;
  country: string;
}

export const cities: CityOption[] = [
  {
    label: 'Select city',
    value: null,
    country: ''
  },
  {
    label: 'Algiers',
    value: 'Algiers',
    country: 'Algeria'
  },
  {
    label: 'Oran',
    value: 'Oran',
    country: 'Algeria'
  },
  {
    label: 'Constantine',
    value: 'Constantine',
    country: 'Algeria'
  },
  {
    label: 'Annaba',
    value: 'Annaba',
    country: 'Algeria'
  },
  {
    label: 'Tlemcen',
    value: 'Tlemcen',
    country: 'Algeria'
  },
  {
    label: 'Melbourne',
    value: 'Melbourne',
    country: 'Australia'
  },
  {
    label: 'Canberra',
    value: 'Canberra',
    country: 'Australia'
  },
  {
    label: 'Sydney',
    value: 'Sydney',
    country: 'Australia'
  },
  {
    label: 'Adelaide',
    value: 'Adelaide',
    country: 'Australia'
  },
  {
    label: 'Perth',
    value: 'Perth',
    country: 'Australia'
  },
  {
    label: 'Gold Coast',
    value: 'Gold Coast',
    country: 'Australia'
  },
  {
    label: 'Hobart',
    value: 'Hobart',
    country: 'Australia'
  },
  {
    label: 'Newcastle',
    value: 'Newcastle',
    country: 'Australia'
  },
  {
    label: 'Wollongong',
    value: 'Wollongong',
    country: 'Australia'
  },
  {
    label: 'Darwin',
    value: 'Darwin',
    country: 'Australia'
  },
  {
    label: 'Townsville',
    value: 'Townsville',
    country: 'Australia'
  },
  {
    label: 'Sunshine Coast',
    value: 'Sunshine Coast',
    country: 'Australia'
  },
  {
    label: 'Armidale',
    value: 'Armidale',
    country: 'Australia'
  },
  {
    label: 'Brisbane',
    value: 'Brisbane',
    country: 'Australia'
  },
  {
    label: 'Toowoomba',
    value: 'Toowoomba',
    country: 'Australia'
  },
  {
    label: 'Ballarat',
    value: 'Ballarat',
    country: 'Australia'
  },
  {
    label: 'Lismore',
    value: 'Lismore',
    country: 'Australia'
  },
  {
    label: 'Vienna',
    value: 'Vienna',
    country: 'Austria'
  },
  {
    label: 'Graz',
    value: 'Graz',
    country: 'Austria'
  },
  {
    label: 'Linz',
    value: 'Linz',
    country: 'Austria'
  },
  {
    label: 'Salzburg',
    value: 'Salzburg',
    country: 'Austria'
  },
  {
    label: 'Innsbruck',
    value: 'Innsbruck',
    country: 'Austria'
  },
  {
    label: 'Klagenfurt',
    value: 'Klagenfurt',
    country: 'Austria'
  },
  {
    label: 'Leoben',
    value: 'Leoben',
    country: 'Austria'
  },
  {
    label: 'Dornbirn',
    value: 'Dornbirn',
    country: 'Austria'
  },
  {
    label: 'Manama',
    value: 'Manama',
    country: 'Bahrain'
  },
  {
    label: 'Riffa',
    value: 'Riffa',
    country: 'Bahrain'
  },
  {
    label: 'Isa Town',
    value: 'Isa Town',
    country: 'Bahrain'
  },
  {
    label: 'Sakhir',
    value: 'Sakhir',
    country: 'Bahrain'
  },
  {
    label: 'Muharraq',
    value: 'Muharraq',
    country: 'Bahrain'
  },
  {
    label: 'Dhaka',
    value: 'Dhaka',
    country: 'Bangladesh'
  },
  {
    label: 'Chittagong',
    value: 'Chittagong',
    country: 'Bangladesh'
  },
  {
    label: 'Khulna',
    value: 'Khulna',
    country: 'Bangladesh'
  },
  {
    label: 'Rajshahi',
    value: 'Rajshahi',
    country: 'Bangladesh'
  },
  {
    label: 'Sylhet',
    value: 'Sylhet',
    country: 'Bangladesh'
  },
  {
    label: 'Brussels',
    value: 'Brussels',
    country: 'Belgium'
  },
  {
    label: 'Leuven',
    value: 'Leuven',
    country: 'Belgium'
  },
  {
    label: 'Ghent',
    value: 'Ghent',
    country: 'Belgium'
  },
  {
    label: 'Antwerp',
    value: 'Antwerp',
    country: 'Belgium'
  },
  {
    label: 'Louvain',
    value: 'Louvain',
    country: 'Belgium'
  },
  {
    label: 'Hasselt',
    value: 'Hasselt',
    country: 'Belgium'
  },
  {
    label: 'Liege',
    value: 'Liege',
    country: 'Belgium'
  },
  {
    label: 'Mons',
    value: 'Mons',
    country: 'Belgium'
  },
  {
    label: 'Rio de Janeiro',
    value: 'Rio de Janeiro',
    country: 'Brazil'
  },
  {
    label: 'Sofia',
    value: 'Sofia',
    country: 'Bulgaria'
  },
  {
    label: 'Plovdiv',
    value: 'Plovdiv',
    country: 'Bulgaria'
  },
  {
    label: 'Varna',
    value: 'Varna',
    country: 'Bulgaria'
  },
  {
    label: 'Burgas',
    value: 'Burgas',
    country: 'Bulgaria'
  },
  {
    label: 'Ruse',
    value: 'Ruse',
    country: 'Bulgaria'
  },
  {
    label: 'Toronto',
    value: 'Toronto',
    country: 'Canada'
  },
  {
    label: 'Ottawa',
    value: 'Ottawa',
    country: 'Canada'
  },
  {
    label: 'Waterloo',
    value: 'Waterloo',
    country: 'Canada'
  },
  {
    label: 'Edmonton',
    value: 'Edmonton',
    country: 'Canada'
  },
  {
    label: 'Vancouver',
    value: 'Vancouver',
    country: 'Canada'
  },
  {
    label: 'Hamilton',
    value: 'Hamilton',
    country: 'Canada'
  },
  {
    label: 'London ON',
    value: 'London ON',
    country: 'Canada'
  },
  {
    label: 'Halifax',
    value: 'Halifax',
    country: 'Canada'
  },
  {
    label: 'Victoria',
    value: 'Victoria',
    country: 'Canada'
  },
  {
    label: 'Quebec City',
    value: 'Quebec City',
    country: 'Canada'
  },
  {
    label: 'Winnipeg',
    value: 'Winnipeg',
    country: 'Canada'
  },
  {
    label: 'Regina',
    value: 'Regina',
    country: 'Canada'
  },
  {
    label: 'St. John\'s',
    value: 'St. John\'s',
    country: 'Canada'
  },
  {
    label: 'Saskatoon',
    value: 'Saskatoon',
    country: 'Canada'
  },
  {
    label: 'Sherbrooke',
    value: 'Sherbrooke',
    country: 'Canada'
  },
  {
    label: 'Calgary',
    value: 'Calgary',
    country: 'Canada'
  },
  {
    label: 'Montreal',
    value: 'Montreal',
    country: 'Canada'
  },
  {
    label: 'London',
    value: 'London',
    country: 'Canada'
  },
  {
    label: 'Kingston',
    value: 'Kingston',
    country: 'Canada'
  },
  {
    label: 'Windsor',
    value: 'Windsor',
    country: 'Canada'
  },
  {
    label: 'Moncton',
    value: 'Moncton',
    country: 'Canada'
  },
  {
    label: 'Trois-Rivieres',
    value: 'Trois-Rivieres',
    country: 'Canada'
  },
  {
    label: 'Thunder Bay',
    value: 'Thunder Bay',
    country: 'Canada'
  },
  {
    label: 'Sudbury',
    value: 'Sudbury',
    country: 'Canada'
  },
  {
    label: 'Prince George',
    value: 'Prince George',
    country: 'Canada'
  },
  {
    label: 'Beijing',
    value: 'Beijing',
    country: 'China'
  },
  {
    label: 'Shenzhen',
    value: 'Shenzhen',
    country: 'China'
  },
  {
    label: 'Shanghai',
    value: 'Shanghai',
    country: 'China'
  },
  {
    label: 'Hangzhou',
    value: 'Hangzhou',
    country: 'China'
  },
  {
    label: 'Nanjing',
    value: 'Nanjing',
    country: 'China'
  },
  {
    label: 'Guangzhou',
    value: 'Guangzhou',
    country: 'China'
  },
  {
    label: 'Wuhan',
    value: 'Wuhan',
    country: 'China'
  },
  {
    label: 'Xi\'an',
    value: 'Xi\'an',
    country: 'China'
  },
  {
    label: 'Chengdu',
    value: 'Chengdu',
    country: 'China'
  },
  {
    label: 'Bogota',
    value: 'Bogota',
    country: 'Colombia'
  },
  {
    label: 'Medellin',
    value: 'Medellin',
    country: 'Colombia'
  },
  {
    label: 'Cali',
    value: 'Cali',
    country: 'Colombia'
  },
  {
    label: 'Barranquilla',
    value: 'Barranquilla',
    country: 'Colombia'
  },
  {
    label: 'Bucaramanga',
    value: 'Bucaramanga',
    country: 'Colombia'
  },
  {
    label: 'Cartagena',
    value: 'Cartagena',
    country: 'Colombia'
  },
  {
    label: 'Zagreb',
    value: 'Zagreb',
    country: 'Croatia'
  },
  {
    label: 'Split',
    value: 'Split',
    country: 'Croatia'
  },
  {
    label: 'Rijeka',
    value: 'Rijeka',
    country: 'Croatia'
  },
  {
    label: 'Osijek',
    value: 'Osijek',
    country: 'Croatia'
  },
  {
    label: 'Zadar',
    value: 'Zadar',
    country: 'Croatia'
  },
  {
    label: 'Dubrovnik',
    value: 'Dubrovnik',
    country: 'Croatia'
  },
  {
    label: 'Nicosia',
    value: 'Nicosia',
    country: 'Cyprus'
  },
  {
    label: 'Limassol',
    value: 'Limassol',
    country: 'Cyprus'
  },
  {
    label: 'Larnaca',
    value: 'Larnaca',
    country: 'Cyprus'
  },
  {
    label: 'Famagusta',
    value: 'Famagusta',
    country: 'Cyprus'
  },
  {
    label: 'Paphos',
    value: 'Paphos',
    country: 'Cyprus'
  },
  {
    label: 'Girne',
    value: 'Girne',
    country: 'Cyprus'
  },
  {
    label: 'Prague',
    value: 'Prague',
    country: 'Czech Republic'
  },
  {
    label: 'Copenhagen',
    value: 'Copenhagen',
    country: 'Denmark'
  },
  {
    label: 'Aarhus',
    value: 'Aarhus',
    country: 'Denmark'
  },
  {
    label: 'Aalborg',
    value: 'Aalborg',
    country: 'Denmark'
  },
  {
    label: 'Santo Domingo',
    value: 'Santo Domingo',
    country: 'Dominican Republic'
  },
  {
    label: 'Santiago',
    value: 'Santiago',
    country: 'Dominican Republic'
  },
  {
    label: 'La Romana',
    value: 'La Romana',
    country: 'Dominican Republic'
  },
  {
    label: 'San Pedro',
    value: 'San Pedro',
    country: 'Dominican Republic'
  },
  {
    label: 'Puerto Plata',
    value: 'Puerto Plata',
    country: 'Dominican Republic'
  },
  {
    label: 'Quito',
    value: 'Quito',
    country: 'Ecuador'
  },
  {
    label: 'Guayaquil',
    value: 'Guayaquil',
    country: 'Ecuador'
  },
  {
    label: 'Cuenca',
    value: 'Cuenca',
    country: 'Ecuador'
  },
  {
    label: 'Loja',
    value: 'Loja',
    country: 'Ecuador'
  },
  {
    label: 'Ambato',
    value: 'Ambato',
    country: 'Ecuador'
  },
  {
    label: 'Cairo',
    value: 'Cairo',
    country: 'Egypt'
  },
  {
    label: 'Alexandria',
    value: 'Alexandria',
    country: 'Egypt'
  },
  {
    label: 'Giza',
    value: 'Giza',
    country: 'Egypt'
  },
  {
    label: 'Port Said',
    value: 'Port Said',
    country: 'Egypt'
  },
  {
    label: 'Mansoura',
    value: 'Mansoura',
    country: 'Egypt'
  },
  {
    label: 'Aswan',
    value: 'Aswan',
    country: 'Egypt'
  },
  {
    label: 'San Salvador',
    value: 'San Salvador',
    country: 'El Salvador'
  },
  {
    label: 'Santa Ana',
    value: 'Santa Ana',
    country: 'El Salvador'
  },
  {
    label: 'San Miguel',
    value: 'San Miguel',
    country: 'El Salvador'
  },
  {
    label: 'Sonsonate',
    value: 'Sonsonate',
    country: 'El Salvador'
  },
  {
    label: 'Santa Tecla',
    value: 'Santa Tecla',
    country: 'El Salvador'
  },
  {
    label: 'Paris',
    value: 'Paris',
    country: 'France'
  },
  {
    label: 'Toulouse',
    value: 'Toulouse',
    country: 'France'
  },
  {
    label: 'Lyon',
    value: 'Lyon',
    country: 'France'
  },
  {
    label: 'Grenoble',
    value: 'Grenoble',
    country: 'France'
  },
  {
    label: 'Nice',
    value: 'Nice',
    country: 'France'
  },
  {
    label: 'Bordeaux',
    value: 'Bordeaux',
    country: 'France'
  },
  {
    label: 'Lille',
    value: 'Lille',
    country: 'France'
  },
  {
    label: 'Rennes',
    value: 'Rennes',
    country: 'France'
  },
  {
    label: 'Strasbourg',
    value: 'Strasbourg',
    country: 'France'
  },
  {
    label: 'Montpellier',
    value: 'Montpellier',
    country: 'France'
  },
  {
    label: 'Marseille',
    value: 'Marseille',
    country: 'France'
  },
  {
    label: 'Munich',
    value: 'Munich',
    country: 'Germany'
  },
  {
    label: 'Heidelberg',
    value: 'Heidelberg',
    country: 'Germany'
  },
  {
    label: 'Dresden',
    value: 'Dresden',
    country: 'Germany'
  },
  {
    label: 'Stuttgart',
    value: 'Stuttgart',
    country: 'Germany'
  },
  {
    label: 'Hamburg',
    value: 'Hamburg',
    country: 'Germany'
  },
  {
    label: 'Aachen',
    value: 'Aachen',
    country: 'Germany'
  },
  {
    label: 'Karlsruhe',
    value: 'Karlsruhe',
    country: 'Germany'
  },
  {
    label: 'Darmstadt',
    value: 'Darmstadt',
    country: 'Germany'
  },
  {
    label: 'Braunschweig',
    value: 'Braunschweig',
    country: 'Germany'
  },
  {
    label: 'Jena',
    value: 'Jena',
    country: 'Germany'
  },
  {
    label: 'Hannover',
    value: 'Hannover',
    country: 'Germany'
  },
  {
    label: 'Freiburg',
    value: 'Freiburg',
    country: 'Germany'
  },
  {
    label: 'Accra',
    value: 'Accra',
    country: 'Ghana'
  },
  {
    label: 'Kumasi',
    value: 'Kumasi',
    country: 'Ghana'
  },
  {
    label: 'Cape Coast',
    value: 'Cape Coast',
    country: 'Ghana'
  },
  {
    label: 'Tamale',
    value: 'Tamale',
    country: 'Ghana'
  },
  {
    label: 'Ho',
    value: 'Ho',
    country: 'Ghana'
  },
  {
    label: 'Athens',
    value: 'Athens',
    country: 'Greece'
  },
  {
    label: 'Hong Kong',
    value: 'Hong Kong',
    country: 'Hong Kong'
  },
  {
    label: 'Budapest',
    value: 'Budapest',
    country: 'Hungary'
  },
  {
    label: 'Debrecen',
    value: 'Debrecen',
    country: 'Hungary'
  },
  {
    label: 'Szeged',
    value: 'Szeged',
    country: 'Hungary'
  },
  {
    label: 'Pecs',
    value: 'Pecs',
    country: 'Hungary'
  },
  {
    label: 'Gyor',
    value: 'Gyor',
    country: 'Hungary'
  },
  {
    label: 'Miskolc',
    value: 'Miskolc',
    country: 'Hungary'
  },
  {
    label: 'Veszprem',
    value: 'Veszprem',
    country: 'Hungary'
  },
  {
    label: 'Kecskemet',
    value: 'Kecskemet',
    country: 'Hungary'
  },
  {
    label: 'Bangalore',
    value: 'Bangalore',
    country: 'India'
  },
  {
    label: 'Mumbai',
    value: 'Mumbai',
    country: 'India'
  },
  {
    label: 'Delhi',
    value: 'Delhi',
    country: 'India'
  },
  {
    label: 'Chennai',
    value: 'Chennai',
    country: 'India'
  },
  {
    label: 'Hyderabad',
    value: 'Hyderabad',
    country: 'India'
  },
  {
    label: 'Pune',
    value: 'Pune',
    country: 'India'
  },
  {
    label: 'Kanpur',
    value: 'Kanpur',
    country: 'India'
  },
  {
    label: 'Jakarta',
    value: 'Jakarta',
    country: 'Indonesia'
  },
  {
    label: 'Bandung',
    value: 'Bandung',
    country: 'Indonesia'
  },
  {
    label: 'Yogyakarta',
    value: 'Yogyakarta',
    country: 'Indonesia'
  },
  {
    label: 'Surabaya',
    value: 'Surabaya',
    country: 'Indonesia'
  },
  {
    label: 'Malang',
    value: 'Malang',
    country: 'Indonesia'
  },
  {
    label: 'Semarang',
    value: 'Semarang',
    country: 'Indonesia'
  },
  {
    label: 'Denpasar',
    value: 'Denpasar',
    country: 'Indonesia'
  },
  {
    label: 'Tehran',
    value: 'Tehran',
    country: 'Iran'
  },
  {
    label: 'Isfahan',
    value: 'Isfahan',
    country: 'Iran'
  },
  {
    label: 'Mashhad',
    value: 'Mashhad',
    country: 'Iran'
  },
  {
    label: 'Shiraz',
    value: 'Shiraz',
    country: 'Iran'
  },
  {
    label: 'Tabriz',
    value: 'Tabriz',
    country: 'Iran'
  },
  {
    label: 'Dublin',
    value: 'Dublin',
    country: 'Ireland'
  },
  {
    label: 'Galway',
    value: 'Galway',
    country: 'Ireland'
  },
  {
    label: 'Cork',
    value: 'Cork',
    country: 'Ireland'
  },
  {
    label: 'Limerick',
    value: 'Limerick',
    country: 'Ireland'
  },
  {
    label: 'Maynooth',
    value: 'Maynooth',
    country: 'Ireland'
  },
  {
    label: 'Waterford',
    value: 'Waterford',
    country: 'Ireland'
  },
  {
    label: 'Sligo',
    value: 'Sligo',
    country: 'Ireland'
  },
  {
    label: 'Athlone',
    value: 'Athlone',
    country: 'Ireland'
  },
  {
    label: 'Tel Aviv',
    value: 'Tel Aviv',
    country: 'Israel'
  },
  {
    label: 'Milan',
    value: 'Milan',
    country: 'Italy'
  },
  {
    label: 'Rome',
    value: 'Rome',
    country: 'Italy'
  },
  {
    label: 'Turin',
    value: 'Turin',
    country: 'Italy'
  },
  {
    label: 'Bologna',
    value: 'Bologna',
    country: 'Italy'
  },
  {
    label: 'Florence',
    value: 'Florence',
    country: 'Italy'
  },
  {
    label: 'Naples',
    value: 'Naples',
    country: 'Italy'
  },
  {
    label: 'Pisa',
    value: 'Pisa',
    country: 'Italy'
  },
  {
    label: 'Padua',
    value: 'Padua',
    country: 'Italy'
  },
  {
    label: 'Tokyo',
    value: 'Tokyo',
    country: 'Japan'
  },
  {
    label: 'Osaka',
    value: 'Osaka',
    country: 'Japan'
  },
  {
    label: 'Kyoto',
    value: 'Kyoto',
    country: 'Japan'
  },
  {
    label: 'Nagoya',
    value: 'Nagoya',
    country: 'Japan'
  },
  {
    label: 'Sendai',
    value: 'Sendai',
    country: 'Japan'
  },
  {
    label: 'Fukuoka',
    value: 'Fukuoka',
    country: 'Japan'
  },
  {
    label: 'Sapporo',
    value: 'Sapporo',
    country: 'Japan'
  },
  {
    label: 'Tsukuba',
    value: 'Tsukuba',
    country: 'Japan'
  },
  {
    label: 'Kobe',
    value: 'Kobe',
    country: 'Japan'
  },
  {
    label: 'Kanazawa',
    value: 'Kanazawa',
    country: 'Japan'
  },
  {
    label: 'Hiroshima',
    value: 'Hiroshima',
    country: 'Japan'
  },
  {
    label: 'Kuwait City',
    value: 'Kuwait City',
    country: 'Kuwait'
  },
  {
    label: 'Hawalli',
    value: 'Hawalli',
    country: 'Kuwait'
  },
  {
    label: 'Al Jahra',
    value: 'Al Jahra',
    country: 'Kuwait'
  },
  {
    label: 'Salmiya',
    value: 'Salmiya',
    country: 'Kuwait'
  },
  {
    label: 'Al Ahmadi',
    value: 'Al Ahmadi',
    country: 'Kuwait'
  },
  {
    label: 'Beirut',
    value: 'Beirut',
    country: 'Lebanon'
  },
  {
    label: 'Byblos',
    value: 'Byblos',
    country: 'Lebanon'
  },
  {
    label: 'Tripoli',
    value: 'Tripoli',
    country: 'Lebanon'
  },
  {
    label: 'Jounieh',
    value: 'Jounieh',
    country: 'Lebanon'
  },
  {
    label: 'Sidon',
    value: 'Sidon',
    country: 'Lebanon'
  },
  {
    label: 'Luxembourg City',
    value: 'Luxembourg City',
    country: 'Luxembourg'
  },
  {
    label: 'Esch-sur-Alzette',
    value: 'Esch-sur-Alzette',
    country: 'Luxembourg'
  },
  {
    label: 'Belval',
    value: 'Belval',
    country: 'Luxembourg'
  },
  {
    label: 'Kirchberg',
    value: 'Kirchberg',
    country: 'Luxembourg'
  },
  {
    label: 'Differdange',
    value: 'Differdange',
    country: 'Luxembourg'
  },
  {
    label: 'Walferdange',
    value: 'Walferdange',
    country: 'Luxembourg'
  },
  {
    label: 'Bertrange',
    value: 'Bertrange',
    country: 'Luxembourg'
  },
  {
    label: 'Kuala Lumpur',
    value: 'Kuala Lumpur',
    country: 'Malaysia'
  },
  {
    label: 'Penang',
    value: 'Penang',
    country: 'Malaysia'
  },
  {
    label: 'Johor Bahru',
    value: 'Johor Bahru',
    country: 'Malaysia'
  },
  {
    label: 'Kuching',
    value: 'Kuching',
    country: 'Malaysia'
  },
  {
    label: 'Cyberjaya',
    value: 'Cyberjaya',
    country: 'Malaysia'
  },
  {
    label: 'Bangi',
    value: 'Bangi',
    country: 'Malaysia'
  },
  {
    label: 'Melaka',
    value: 'Melaka',
    country: 'Malaysia'
  },
  {
    label: 'Shah Alam',
    value: 'Shah Alam',
    country: 'Malaysia'
  },
  {
    label: 'Nilai',
    value: 'Nilai',
    country: 'Malaysia'
  },
  {
    label: 'Mexico City',
    value: 'Mexico City',
    country: 'Mexico'
  },
  {
    label: 'Monterrey',
    value: 'Monterrey',
    country: 'Mexico'
  },
  {
    label: 'Guadalajara',
    value: 'Guadalajara',
    country: 'Mexico'
  },
  {
    label: 'Puebla',
    value: 'Puebla',
    country: 'Mexico'
  },
  {
    label: 'Queretaro',
    value: 'Queretaro',
    country: 'Mexico'
  },
  {
    label: 'Merida',
    value: 'Merida',
    country: 'Mexico'
  },
  {
    label: 'Tijuana',
    value: 'Tijuana',
    country: 'Mexico'
  },
  {
    label: 'San Luis Potosi',
    value: 'San Luis Potosi',
    country: 'Mexico'
  },
  {
    label: 'Rabat',
    value: 'Rabat',
    country: 'Morocco'
  },
  {
    label: 'Casablanca',
    value: 'Casablanca',
    country: 'Morocco'
  },
  {
    label: 'Fez',
    value: 'Fez',
    country: 'Morocco'
  },
  {
    label: 'Marrakech',
    value: 'Marrakech',
    country: 'Morocco'
  },
  {
    label: 'Tangier',
    value: 'Tangier',
    country: 'Morocco'
  },
  {
    label: 'Oujda',
    value: 'Oujda',
    country: 'Morocco'
  },
  {
    label: 'Amsterdam',
    value: 'Amsterdam',
    country: 'Netherlands'
  },
  {
    label: 'Delft',
    value: 'Delft',
    country: 'Netherlands'
  },
  {
    label: 'Rotterdam',
    value: 'Rotterdam',
    country: 'Netherlands'
  },
  {
    label: 'Eindhoven',
    value: 'Eindhoven',
    country: 'Netherlands'
  },
  {
    label: 'Enschede',
    value: 'Enschede',
    country: 'Netherlands'
  },
  {
    label: 'Groningen',
    value: 'Groningen',
    country: 'Netherlands'
  },
  {
    label: 'Maastricht',
    value: 'Maastricht',
    country: 'Netherlands'
  },
  {
    label: 'Nijmegen',
    value: 'Nijmegen',
    country: 'Netherlands'
  },
  {
    label: 'Tilburg',
    value: 'Tilburg',
    country: 'Netherlands'
  },
  {
    label: 'Utrecht',
    value: 'Utrecht',
    country: 'Netherlands'
  },
  {
    label: 'Leiden',
    value: 'Leiden',
    country: 'Netherlands'
  },
  {
    label: 'Wageningen',
    value: 'Wageningen',
    country: 'Netherlands'
  },
  {
    label: 'Auckland',
    value: 'Auckland',
    country: 'New Zealand'
  },
  {
    label: 'Wellington',
    value: 'Wellington',
    country: 'New Zealand'
  },
  {
    label: 'Christchurch',
    value: 'Christchurch',
    country: 'New Zealand'
  },
  {
    label: 'Dunedin',
    value: 'Dunedin',
    country: 'New Zealand'
  },
  {
    label: 'Hamilton',
    value: 'Hamilton',
    country: 'New Zealand'
  },
  {
    label: 'Palmerston North',
    value: 'Palmerston North',
    country: 'New Zealand'
  },
  {
    label: 'Lagos',
    value: 'Lagos',
    country: 'Nigeria'
  },
  {
    label: 'Panama City',
    value: 'Panama City',
    country: 'Panama'
  },
  {
    label: 'David',
    value: 'David',
    country: 'Panama'
  },
  {
    label: 'Santiago',
    value: 'Santiago',
    country: 'Panama'
  },
  {
    label: 'Chitré',
    value: 'Chitré',
    country: 'Panama'
  },
  {
    label: 'La Chorrera',
    value: 'La Chorrera',
    country: 'Panama'
  },
  {
    label: 'Lima',
    value: 'Lima',
    country: 'Peru'
  },
  {
    label: 'Arequipa',
    value: 'Arequipa',
    country: 'Peru'
  },
  {
    label: 'Trujillo',
    value: 'Trujillo',
    country: 'Peru'
  },
  {
    label: 'Cusco',
    value: 'Cusco',
    country: 'Peru'
  },
  {
    label: 'Piura',
    value: 'Piura',
    country: 'Peru'
  },
  {
    label: 'Chiclayo',
    value: 'Chiclayo',
    country: 'Peru'
  },
  {
    label: 'Warsaw',
    value: 'Warsaw',
    country: 'Poland'
  },
  {
    label: 'Krakow',
    value: 'Krakow',
    country: 'Poland'
  },
  {
    label: 'Wroclaw',
    value: 'Wroclaw',
    country: 'Poland'
  },
  {
    label: 'Poznan',
    value: 'Poznan',
    country: 'Poland'
  },
  {
    label: 'Gdansk',
    value: 'Gdansk',
    country: 'Poland'
  },
  {
    label: 'Lodz',
    value: 'Lodz',
    country: 'Poland'
  },
  {
    label: 'Katowice',
    value: 'Katowice',
    country: 'Poland'
  },
  {
    label: 'Lisbon',
    value: 'Lisbon',
    country: 'Portugal'
  },
  {
    label: 'Porto',
    value: 'Porto',
    country: 'Portugal'
  },
  {
    label: 'Coimbra',
    value: 'Coimbra',
    country: 'Portugal'
  },
  {
    label: 'Braga',
    value: 'Braga',
    country: 'Portugal'
  },
  {
    label: 'Aveiro',
    value: 'Aveiro',
    country: 'Portugal'
  },
  {
    label: 'Faro',
    value: 'Faro',
    country: 'Portugal'
  },
  {
    label: 'Vila Real',
    value: 'Vila Real',
    country: 'Portugal'
  },
  {
    label: 'Funchal',
    value: 'Funchal',
    country: 'Portugal'
  },
  {
    label: 'Bucharest',
    value: 'Bucharest',
    country: 'Romania'
  },
  {
    label: 'Cluj-Napoca',
    value: 'Cluj-Napoca',
    country: 'Romania'
  },
  {
    label: 'Timisoara',
    value: 'Timisoara',
    country: 'Romania'
  },
  {
    label: 'Iasi',
    value: 'Iasi',
    country: 'Romania'
  },
  {
    label: 'Brasov',
    value: 'Brasov',
    country: 'Romania'
  },
  {
    label: 'Constanta',
    value: 'Constanta',
    country: 'Romania'
  },
  {
    label: 'Craiova',
    value: 'Craiova',
    country: 'Romania'
  },
  {
    label: 'Moscow',
    value: 'Moscow',
    country: 'Russia'
  },
  {
    label: 'Saint Petersburg',
    value: 'Saint Petersburg',
    country: 'Russia'
  },
  {
    label: 'Novosibirsk',
    value: 'Novosibirsk',
    country: 'Russia'
  },
  {
    label: 'Kazan',
    value: 'Kazan',
    country: 'Russia'
  },
  {
    label: 'Tomsk',
    value: 'Tomsk',
    country: 'Russia'
  },
  {
    label: 'Yekaterinburg',
    value: 'Yekaterinburg',
    country: 'Russia'
  },
  {
    label: 'Samara',
    value: 'Samara',
    country: 'Russia'
  },
  {
    label: 'Rostov-on-Don',
    value: 'Rostov-on-Don',
    country: 'Russia'
  },
  {
    label: 'Riyadh',
    value: 'Riyadh',
    country: 'Saudi Arabia'
  },
  {
    label: 'Jeddah',
    value: 'Jeddah',
    country: 'Saudi Arabia'
  },
  {
    label: 'Dhahran',
    value: 'Dhahran',
    country: 'Saudi Arabia'
  },
  {
    label: 'Medina',
    value: 'Medina',
    country: 'Saudi Arabia'
  },
  {
    label: 'Dammam',
    value: 'Dammam',
    country: 'Saudi Arabia'
  },
  {
    label: 'Taif',
    value: 'Taif',
    country: 'Saudi Arabia'
  },
  {
    label: 'Tabuk',
    value: 'Tabuk',
    country: 'Saudi Arabia'
  },
  {
    label: 'Makkah',
    value: 'Makkah',
    country: 'Saudi Arabia'
  },
  {
    label: 'Al-Ahsa',
    value: 'Al-Ahsa',
    country: 'Saudi Arabia'
  },
  {
    label: 'Belgrade',
    value: 'Belgrade',
    country: 'Serbia'
  },
  {
    label: 'Novi Sad',
    value: 'Novi Sad',
    country: 'Serbia'
  },
  {
    label: 'Nis',
    value: 'Nis',
    country: 'Serbia'
  },
  {
    label: 'Kragujevac',
    value: 'Kragujevac',
    country: 'Serbia'
  },
  {
    label: 'Subotica',
    value: 'Subotica',
    country: 'Serbia'
  },
  {
    label: 'Singapore',
    value: 'Singapore',
    country: 'Singapore'
  },
  {
    label: 'Ljubljana',
    value: 'Ljubljana',
    country: 'Slovenia'
  },
  {
    label: 'Maribor',
    value: 'Maribor',
    country: 'Slovenia'
  },
  {
    label: 'Koper',
    value: 'Koper',
    country: 'Slovenia'
  },
  {
    label: 'Nova Gorica',
    value: 'Nova Gorica',
    country: 'Slovenia'
  },
  {
    label: 'Celje',
    value: 'Celje',
    country: 'Slovenia'
  },
  {
    label: 'Cape Town',
    value: 'Cape Town',
    country: 'South Africa'
  },
  {
    label: 'Seoul',
    value: 'Seoul',
    country: 'South Korea'
  },
  {
    label: 'Busan',
    value: 'Busan',
    country: 'South Korea'
  },
  {
    label: 'Daejeon',
    value: 'Daejeon',
    country: 'South Korea'
  },
  {
    label: 'Daegu',
    value: 'Daegu',
    country: 'South Korea'
  },
  {
    label: 'Gwangju',
    value: 'Gwangju',
    country: 'South Korea'
  },
  {
    label: 'Ulsan',
    value: 'Ulsan',
    country: 'South Korea'
  },
  {
    label: 'Pohang',
    value: 'Pohang',
    country: 'South Korea'
  },
  {
    label: 'Incheon',
    value: 'Incheon',
    country: 'South Korea'
  },
  {
    label: 'Suwon',
    value: 'Suwon',
    country: 'South Korea'
  },
  {
    label: 'Cheongju',
    value: 'Cheongju',
    country: 'South Korea'
  },
  {
    label: 'Barcelona',
    value: 'Barcelona',
    country: 'Spain'
  },
  {
    label: 'Madrid',
    value: 'Madrid',
    country: 'Spain'
  },
  {
    label: 'Valencia',
    value: 'Valencia',
    country: 'Spain'
  },
  {
    label: 'Seville',
    value: 'Seville',
    country: 'Spain'
  },
  {
    label: 'Bilbao',
    value: 'Bilbao',
    country: 'Spain'
  },
  {
    label: 'Granada',
    value: 'Granada',
    country: 'Spain'
  },
  {
    label: 'Zaragoza',
    value: 'Zaragoza',
    country: 'Spain'
  },
  {
    label: 'Salamanca',
    value: 'Salamanca',
    country: 'Spain'
  },
  {
    label: 'Zurich',
    value: 'Zurich',
    country: 'Switzerland'
  },
  {
    label: 'Basel',
    value: 'Basel',
    country: 'Switzerland'
  },
  {
    label: 'Lausanne',
    value: 'Lausanne',
    country: 'Switzerland'
  },
  {
    label: 'Geneva',
    value: 'Geneva',
    country: 'Switzerland'
  },
  {
    label: 'Bern',
    value: 'Bern',
    country: 'Switzerland'
  },
  {
    label: 'St. Gallen',
    value: 'St. Gallen',
    country: 'Switzerland'
  },
  {
    label: 'Lugano',
    value: 'Lugano',
    country: 'Switzerland'
  },
  {
    label: 'Fribourg',
    value: 'Fribourg',
    country: 'Switzerland'
  },
  {
    label: 'Neuchatel',
    value: 'Neuchatel',
    country: 'Switzerland'
  },
  {
    label: 'Lucerne',
    value: 'Lucerne',
    country: 'Switzerland'
  },
  {
    label: 'Winterthur',
    value: 'Winterthur',
    country: 'Switzerland'
  },
  {
    label: 'Taipei',
    value: 'Taipei',
    country: 'Taiwan'
  },
  {
    label: 'Bangkok',
    value: 'Bangkok',
    country: 'Thailand'
  },
  {
    label: 'Chiang Mai',
    value: 'Chiang Mai',
    country: 'Thailand'
  },
  {
    label: 'Khon Kaen',
    value: 'Khon Kaen',
    country: 'Thailand'
  },
  {
    label: 'Phuket',
    value: 'Phuket',
    country: 'Thailand'
  },
  {
    label: 'Hat Yai',
    value: 'Hat Yai',
    country: 'Thailand'
  },
  {
    label: 'Nakhon Ratchasima',
    value: 'Nakhon Ratchasima',
    country: 'Thailand'
  },
  {
    label: 'Songkhla',
    value: 'Songkhla',
    country: 'Thailand'
  },
  {
    label: 'Tunis',
    value: 'Tunis',
    country: 'Tunisia'
  },
  {
    label: 'Sfax',
    value: 'Sfax',
    country: 'Tunisia'
  },
  {
    label: 'Sousse',
    value: 'Sousse',
    country: 'Tunisia'
  },
  {
    label: 'Monastir',
    value: 'Monastir',
    country: 'Tunisia'
  },
  {
    label: 'Gabes',
    value: 'Gabes',
    country: 'Tunisia'
  },
  {
    label: 'Bizerte',
    value: 'Bizerte',
    country: 'Tunisia'
  },
  {
    label: 'Istanbul',
    value: 'Istanbul',
    country: 'Turkey'
  },
  {
    label: 'Ankara',
    value: 'Ankara',
    country: 'Turkey'
  },
  {
    label: 'Izmir',
    value: 'Izmir',
    country: 'Turkey'
  },
  {
    label: 'Eskisehir',
    value: 'Eskisehir',
    country: 'Turkey'
  },
  {
    label: 'Bursa',
    value: 'Bursa',
    country: 'Turkey'
  },
  {
    label: 'Antalya',
    value: 'Antalya',
    country: 'Turkey'
  },
  {
    label: 'Kayseri',
    value: 'Kayseri',
    country: 'Turkey'
  },
  {
    label: 'Konya',
    value: 'Konya',
    country: 'Turkey'
  },
  {
    label: 'Dubai',
    value: 'Dubai',
    country: 'UAE'
  },
  {
    label: 'Abu Dhabi',
    value: 'Abu Dhabi',
    country: 'UAE'
  },
  {
    label: 'Sharjah',
    value: 'Sharjah',
    country: 'UAE'
  },
  {
    label: 'Ajman',
    value: 'Ajman',
    country: 'UAE'
  },
  {
    label: 'Al Ain',
    value: 'Al Ain',
    country: 'UAE'
  },
  {
    label: 'Ras Al Khaimah',
    value: 'Ras Al Khaimah',
    country: 'UAE'
  },
  {
    label: 'Fujairah',
    value: 'Fujairah',
    country: 'UAE'
  },
  {
    label: 'London',
    value: 'London',
    country: 'UK'
  },
  {
    label: 'Bristol',
    value: 'Bristol',
    country: 'UK'
  },
  {
    label: 'Oxford',
    value: 'Oxford',
    country: 'UK'
  },
  {
    label: 'Cambridge',
    value: 'Cambridge',
    country: 'UK'
  },
  {
    label: 'Glasgow',
    value: 'Glasgow',
    country: 'UK'
  },
  {
    label: 'Manchester',
    value: 'Manchester',
    country: 'UK'
  },
  {
    label: 'Leeds',
    value: 'Leeds',
    country: 'UK'
  },
  {
    label: 'Warwick',
    value: 'Warwick',
    country: 'UK'
  },
  {
    label: 'Sheffield',
    value: 'Sheffield',
    country: 'UK'
  },
  {
    label: 'Birmingham',
    value: 'Birmingham',
    country: 'UK'
  },
  {
    label: 'Southampton',
    value: 'Southampton',
    country: 'UK'
  },
  {
    label: 'Nottingham',
    value: 'Nottingham',
    country: 'UK'
  },
  {
    label: 'Cardiff',
    value: 'Cardiff',
    country: 'UK'
  },
  {
    label: 'Belfast',
    value: 'Belfast',
    country: 'UK'
  },
  {
    label: 'Newcastle',
    value: 'Newcastle',
    country: 'UK'
  },
  {
    label: 'Edinburgh',
    value: 'Edinburgh',
    country: 'UK'
  },
  {
    label: 'Durham',
    value: 'Durham',
    country: 'UK'
  },
  {
    label: 'Liverpool',
    value: 'Liverpool',
    country: 'UK'
  },
  {
    label: 'Aberdeen',
    value: 'Aberdeen',
    country: 'UK'
  },
  {
    label: 'Leicester',
    value: 'Leicester',
    country: 'UK'
  },
  {
    label: 'Reading',
    value: 'Reading',
    country: 'UK'
  },
  {
    label: 'Sussex',
    value: 'Sussex',
    country: 'UK'
  },
  {
    label: 'Essex',
    value: 'Essex',
    country: 'UK'
  },
  {
    label: 'Bath',
    value: 'Bath',
    country: 'UK'
  },
  {
    label: 'Surrey',
    value: 'Surrey',
    country: 'UK'
  },
  {
    label: 'Exeter',
    value: 'Exeter',
    country: 'UK'
  },
  {
    label: 'Kent',
    value: 'Kent',
    country: 'UK'
  },
  {
    label: 'Dundee',
    value: 'Dundee',
    country: 'UK'
  },
  {
    label: 'Strathclyde',
    value: 'Strathclyde',
    country: 'UK'
  },
  {
    label: 'Heriot-Watt',
    value: 'Heriot-Watt',
    country: 'UK'
  },
  {
    label: 'Loughborough',
    value: 'Loughborough',
    country: 'UK'
  },
  {
    label: 'Brunel',
    value: 'Brunel',
    country: 'UK'
  },
  {
    label: 'Queen Mary',
    value: 'Queen Mary',
    country: 'UK'
  },
  {
    label: 'Royal Holloway',
    value: 'Royal Holloway',
    country: 'UK'
  },
  {
    label: 'Lancaster',
    value: 'Lancaster',
    country: 'UK'
  },
  {
    label: 'Swansea',
    value: 'Swansea',
    country: 'UK'
  },
  {
    label: 'Aston',
    value: 'Aston',
    country: 'UK'
  },
  {
    label: 'Hull',
    value: 'Hull',
    country: 'UK'
  },
  {
    label: 'Keele',
    value: 'Keele',
    country: 'UK'
  },
  {
    label: 'Plymouth',
    value: 'Plymouth',
    country: 'UK'
  },
  {
    label: 'Portsmouth',
    value: 'Portsmouth',
    country: 'UK'
  },
  {
    label: 'Size',
    value: 'Size',
    country: 'UK'
  },
  {
    label: 'Ulster',
    value: 'Ulster',
    country: 'UK'
  },
  {
    label: 'Northumbria',
    value: 'Northumbria',
    country: 'UK'
  },
  {
    label: 'Coventry',
    value: 'Coventry',
    country: 'UK'
  },
  {
    label: 'Oxford Brookes',
    value: 'Oxford Brookes',
    country: 'UK'
  },
  {
    label: 'De Montfort',
    value: 'De Montfort',
    country: 'UK'
  },
  {
    label: 'Westminster',
    value: 'Westminster',
    country: 'UK'
  },
  {
    label: 'Greenwich',
    value: 'Greenwich',
    country: 'UK'
  },
  {
    label: 'Kingston',
    value: 'Kingston',
    country: 'UK'
  },
  {
    label: 'Cambridge',
    value: 'Cambridge',
    country: 'USA'
  },
  {
    label: 'Ann Arbor',
    value: 'Ann Arbor',
    country: 'USA'
  },
  {
    label: 'Atlanta',
    value: 'Atlanta',
    country: 'USA'
  },
  {
    label: 'Austin',
    value: 'Austin',
    country: 'USA'
  },
  {
    label: 'Stanford',
    value: 'Stanford',
    country: 'USA'
  },
  {
    label: 'Boston',
    value: 'Boston',
    country: 'USA'
  },
  {
    label: 'San Diego',
    value: 'San Diego',
    country: 'USA'
  },
  {
    label: 'Seattle',
    value: 'Seattle',
    country: 'USA'
  },
  {
    label: 'Berkeley',
    value: 'Berkeley',
    country: 'USA'
  },
  {
    label: 'Philadelphia',
    value: 'Philadelphia',
    country: 'USA'
  },
  {
    label: 'Chicago',
    value: 'Chicago',
    country: 'USA'
  },
  {
    label: 'Baltimore',
    value: 'Baltimore',
    country: 'USA'
  },
  {
    label: 'Nashville',
    value: 'Nashville',
    country: 'USA'
  },
  {
    label: 'Durham',
    value: 'Durham',
    country: 'USA'
  },
  {
    label: 'Madison',
    value: 'Madison',
    country: 'USA'
  },
  {
    label: 'Tempe',
    value: 'Tempe',
    country: 'USA'
  },
  {
    label: 'Boulder',
    value: 'Boulder',
    country: 'USA'
  },
  {
    label: 'Minneapolis',
    value: 'Minneapolis',
    country: 'USA'
  },
  {
    label: 'Davis',
    value: 'Davis',
    country: 'USA'
  },
  {
    label: 'Pittsburgh',
    value: 'Pittsburgh',
    country: 'USA'
  },
  {
    label: 'Urbana-Champaign',
    value: 'Urbana-Champaign',
    country: 'USA'
  },
  {
    label: 'New York',
    value: 'New York',
    country: 'USA'
  },
  {
    label: 'Ithaca',
    value: 'Ithaca',
    country: 'USA'
  },
  {
    label: 'New Haven',
    value: 'New Haven',
    country: 'USA'
  },
  {
    label: 'Princeton',
    value: 'Princeton',
    country: 'USA'
  },
  {
    label: 'Los Angeles',
    value: 'Los Angeles',
    country: 'USA'
  },
  {
    label: 'Urbana',
    value: 'Urbana',
    country: 'USA'
  },
  {
    label: 'Columbus',
    value: 'Columbus',
    country: 'USA'
  },
  {
    label: 'West Lafayette',
    value: 'West Lafayette',
    country: 'USA'
  },
  {
    label: 'Gainesville',
    value: 'Gainesville',
    country: 'USA'
  },
  {
    label: 'Raleigh',
    value: 'Raleigh',
    country: 'USA'
  },
  {
    label: 'College Station',
    value: 'College Station',
    country: 'USA'
  },
  {
    label: 'Corvallis',
    value: 'Corvallis',
    country: 'USA'
  },
  {
    label: 'San Francisco',
    value: 'San Francisco',
    country: 'USA'
  },
  {
    label: 'Denver',
    value: 'Denver',
    country: 'USA'
  },
  {
    label: 'Portland',
    value: 'Portland',
    country: 'USA'
  },
  {
    label: 'MIT',
    value: 'MIT',
    country: 'USA'
  },
  {
    label: 'Kyiv',
    value: 'Kyiv',
    country: 'Ukraine'
  },
  {
    label: 'Lviv',
    value: 'Lviv',
    country: 'Ukraine'
  },
  {
    label: 'Kharkiv',
    value: 'Kharkiv',
    country: 'Ukraine'
  },
  {
    label: 'Odesa',
    value: 'Odesa',
    country: 'Ukraine'
  },
  {
    label: 'Dnipro',
    value: 'Dnipro',
    country: 'Ukraine'
  },
  {
    label: 'Salto',
    value: 'Salto',
    country: 'Uruguay'
  },
  {
    label: 'Maldonado',
    value: 'Maldonado',
    country: 'Uruguay'
  },
  {
    label: 'Tashkent',
    value: 'Tashkent',
    country: 'Uzbekistan'
  },
  {
    label: 'Samarkand',
    value: 'Samarkand',
    country: 'Uzbekistan'
  },
  {
    label: 'Bukhara',
    value: 'Bukhara',
    country: 'Uzbekistan'
  },
  {
    label: 'Namangan',
    value: 'Namangan',
    country: 'Uzbekistan'
  },
  {
    label: 'Andijan',
    value: 'Andijan',
    country: 'Uzbekistan'
  },
  {
    label: 'Ho Chi Minh City',
    value: 'Ho Chi Minh City',
    country: 'Vietnam'
  }
];

// Generic searchable combobox props
interface SearchableComboboxProps<T extends { label: string; value: string | null }> {
  items: T[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  size?: "sm" | "default";
  hideIcon?: boolean;
  variant?: "outline" | "ghost" | "secondary" | "link";
}

export function SearchableCombobox<T extends { label: string; value: string | null }>({
  items,
  value,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  className,
  size = "default",
  hideIcon = false,
  variant = "outline",
}: SearchableComboboxProps<T>) {
  const selectedItem = items.find(item => item.value === value) || items[0];

  return (
    <Combobox
      value={selectedItem}
      items={items}
      onValueChange={(item) => {
        if (item && item.value && onValueChange) {
          onValueChange(item.value);
        }
      }}
    >
      <ComboboxTrigger
        render={
          <Button
            className={`w-full justify-between font-normal ${size === "sm" ? "h-8 text-xs" : ""} ${className || ""}`}
            variant={variant}
          />
        }
      >
        <ComboboxValue />
        {!hideIcon && <ChevronsUpDownIcon className="-me-1!" />}
      </ComboboxTrigger>
      <ComboboxPopup aria-label={placeholder}>
        <div className="border-b p-2">
          <ComboboxInput
            className="rounded-md before:rounded-[calc(var(--radius-md)-1px)]"
            placeholder={searchPlaceholder}
            showTrigger={false}
            startAddon={<SearchIcon />}
          />
        </div>
        <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
        <ComboboxList>
          {(item: T) => (
            <ComboboxItem key={item.value || "empty"} value={item}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}

// Country-specific combobox
interface CountryComboboxProps {
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  size?: "sm" | "default";
  hideIcon?: boolean;
  variant?: "outline" | "ghost" | "secondary" | "link";
}

export function CountryCombobox({ value, onValueChange, className, size, hideIcon, variant }: CountryComboboxProps) {
  return (
    <SearchableCombobox
      items={countries}
      value={value}
      onValueChange={onValueChange}
      placeholder="Select country"
      searchPlaceholder="e.g. United Kingdom"
      emptyMessage="No countries found."
      className={className}
      size={size}
      hideIcon={hideIcon}
      variant={variant}
    />
  );
}

// City-specific combobox
interface CityComboboxProps {
  value?: string;
  onValueChange?: (value: string) => void;
  countryFilter?: string; // Optional: filter cities by country
  className?: string;
  size?: "sm" | "default";
  hideIcon?: boolean;
  variant?: "outline" | "ghost" | "secondary" | "link";
}

export function CityCombobox({ value, onValueChange, countryFilter, className, size, hideIcon, variant }: CityComboboxProps) {
  const filteredCities = countryFilter
    ? cities.filter(city => city.country === countryFilter || city.value === null)
    : cities;

  return (
    <SearchableCombobox
      items={filteredCities}
      value={value}
      onValueChange={onValueChange}
      placeholder="Select city"
      searchPlaceholder="e.g. London"
      emptyMessage="No cities found."
      className={className}
      size={size}
      hideIcon={hideIcon}
      variant={variant}
    />
  );
}

// Program-specific combobox
interface ProgramComboboxProps {
  items?: { label: string; value: string | null }[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  size?: "sm" | "default";
  hideIcon?: boolean;
  variant?: "outline" | "ghost" | "secondary" | "link";
}

export function ProgramCombobox({ items, value, onValueChange, className, size, hideIcon, variant }: ProgramComboboxProps) {
  return (
    <SearchableCombobox
      items={items || []}
      value={value}
      onValueChange={onValueChange}
      placeholder="Select program"
      searchPlaceholder="e.g. Computer Science"
      emptyMessage="No programs found."
      className={className}
      size={size}
      hideIcon={hideIcon}
      variant={variant}
    />
  );
}
