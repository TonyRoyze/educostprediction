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
  { code: "", continent: "", label: "Select country", value: null },
  { code: "af", continent: "Asia", label: "Afghanistan", value: "Afghanistan" },
  { code: "al", continent: "Europe", label: "Albania", value: "Albania" },
  { code: "dz", continent: "Africa", label: "Algeria", value: "Algeria" },
  { code: "ad", continent: "Europe", label: "Andorra", value: "Andorra" },
  { code: "ao", continent: "Africa", label: "Angola", value: "Angola" },
  { code: "ar", continent: "South America", label: "Argentina", value: "Argentina" },
  { code: "am", continent: "Asia", label: "Armenia", value: "Armenia" },
  { code: "au", continent: "Oceania", label: "Australia", value: "Australia" },
  { code: "at", continent: "Europe", label: "Austria", value: "Austria" },
  { code: "az", continent: "Asia", label: "Azerbaijan", value: "Azerbaijan" },
  { code: "bs", continent: "North America", label: "Bahamas", value: "Bahamas" },
  { code: "bh", continent: "Asia", label: "Bahrain", value: "Bahrain" },
  { code: "bd", continent: "Asia", label: "Bangladesh", value: "Bangladesh" },
  { code: "bb", continent: "North America", label: "Barbados", value: "Barbados" },
  { code: "by", continent: "Europe", label: "Belarus", value: "Belarus" },
  { code: "be", continent: "Europe", label: "Belgium", value: "Belgium" },
  { code: "bz", continent: "North America", label: "Belize", value: "Belize" },
  { code: "bj", continent: "Africa", label: "Benin", value: "Benin" },
  { code: "bt", continent: "Asia", label: "Bhutan", value: "Bhutan" },
  { code: "bo", continent: "South America", label: "Bolivia", value: "Bolivia" },
  { code: "ba", continent: "Europe", label: "Bosnia and Herzegovina", value: "Bosnia and Herzegovina" },
  { code: "bw", continent: "Africa", label: "Botswana", value: "Botswana" },
  { code: "br", continent: "South America", label: "Brazil", value: "Brazil" },
  { code: "bn", continent: "Asia", label: "Brunei", value: "Brunei" },
  { code: "bg", continent: "Europe", label: "Bulgaria", value: "Bulgaria" },
  { code: "bf", continent: "Africa", label: "Burkina Faso", value: "Burkina Faso" },
  { code: "bi", continent: "Africa", label: "Burundi", value: "Burundi" },
  { code: "kh", continent: "Asia", label: "Cambodia", value: "Cambodia" },
  { code: "cm", continent: "Africa", label: "Cameroon", value: "Cameroon" },
  { code: "ca", continent: "North America", label: "Canada", value: "Canada" },
  { code: "cv", continent: "Africa", label: "Cape Verde", value: "Cape Verde" },
  { code: "cf", continent: "Africa", label: "Central African Republic", value: "Central African Republic" },
  { code: "td", continent: "Africa", label: "Chad", value: "Chad" },
  { code: "cl", continent: "South America", label: "Chile", value: "Chile" },
  { code: "cn", continent: "Asia", label: "China", value: "China" },
  { code: "co", continent: "South America", label: "Colombia", value: "Colombia" },
  { code: "km", continent: "Africa", label: "Comoros", value: "Comoros" },
  { code: "cg", continent: "Africa", label: "Congo", value: "Congo" },
  { code: "cr", continent: "North America", label: "Costa Rica", value: "Costa Rica" },
  { code: "hr", continent: "Europe", label: "Croatia", value: "Croatia" },
  { code: "cu", continent: "North America", label: "Cuba", value: "Cuba" },
  { code: "cy", continent: "Asia", label: "Cyprus", value: "Cyprus" },
  { code: "cz", continent: "Europe", label: "Czech Republic", value: "Czech Republic" },
  { code: "dk", continent: "Europe", label: "Denmark", value: "Denmark" },
  { code: "dj", continent: "Africa", label: "Djibouti", value: "Djibouti" },
  { code: "dm", continent: "North America", label: "Dominica", value: "Dominica" },
  { code: "do", continent: "North America", label: "Dominican Republic", value: "Dominican Republic" },
  { code: "ec", continent: "South America", label: "Ecuador", value: "Ecuador" },
  { code: "eg", continent: "Africa", label: "Egypt", value: "Egypt" },
  { code: "sv", continent: "North America", label: "El Salvador", value: "El Salvador" },
  { code: "gq", continent: "Africa", label: "Equatorial Guinea", value: "Equatorial Guinea" },
  { code: "er", continent: "Africa", label: "Eritrea", value: "Eritrea" },
  { code: "ee", continent: "Europe", label: "Estonia", value: "Estonia" },
  { code: "et", continent: "Africa", label: "Ethiopia", value: "Ethiopia" },
  { code: "fj", continent: "Oceania", label: "Fiji", value: "Fiji" },
  { code: "fi", continent: "Europe", label: "Finland", value: "Finland" },
  { code: "fr", continent: "Europe", label: "France", value: "France" },
  { code: "ga", continent: "Africa", label: "Gabon", value: "Gabon" },
  { code: "gm", continent: "Africa", label: "Gambia", value: "Gambia" },
  { code: "ge", continent: "Asia", label: "Georgia", value: "Georgia" },
  { code: "de", continent: "Europe", label: "Germany", value: "Germany" },
  { code: "gh", continent: "Africa", label: "Ghana", value: "Ghana" },
  { code: "gr", continent: "Europe", label: "Greece", value: "Greece" },
  { code: "gd", continent: "North America", label: "Grenada", value: "Grenada" },
  { code: "gt", continent: "North America", label: "Guatemala", value: "Guatemala" },
  { code: "gn", continent: "Africa", label: "Guinea", value: "Guinea" },
  { code: "gw", continent: "Africa", label: "Guinea-Bissau", value: "Guinea-Bissau" },
  { code: "gy", continent: "South America", label: "Guyana", value: "Guyana" },
  { code: "ht", continent: "North America", label: "Haiti", value: "Haiti" },
  { code: "hn", continent: "North America", label: "Honduras", value: "Honduras" },
  { code: "hu", continent: "Europe", label: "Hungary", value: "Hungary" },
  { code: "is", continent: "Europe", label: "Iceland", value: "Iceland" },
  { code: "in", continent: "Asia", label: "India", value: "India" },
  { code: "id", continent: "Asia", label: "Indonesia", value: "Indonesia" },
  { code: "ir", continent: "Asia", label: "Iran", value: "Iran" },
  { code: "iq", continent: "Asia", label: "Iraq", value: "Iraq" },
  { code: "ie", continent: "Europe", label: "Ireland", value: "Ireland" },
  { code: "il", continent: "Asia", label: "Israel", value: "Israel" },
  { code: "it", continent: "Europe", label: "Italy", value: "Italy" },
  { code: "jm", continent: "North America", label: "Jamaica", value: "Jamaica" },
  { code: "jp", continent: "Asia", label: "Japan", value: "Japan" },
  { code: "jo", continent: "Asia", label: "Jordan", value: "Jordan" },
  { code: "kz", continent: "Asia", label: "Kazakhstan", value: "Kazakhstan" },
  { code: "ke", continent: "Africa", label: "Kenya", value: "Kenya" },
  { code: "kw", continent: "Asia", label: "Kuwait", value: "Kuwait" },
  { code: "kg", continent: "Asia", label: "Kyrgyzstan", value: "Kyrgyzstan" },
  { code: "la", continent: "Asia", label: "Laos", value: "Laos" },
  { code: "lv", continent: "Europe", label: "Latvia", value: "Latvia" },
  { code: "lb", continent: "Asia", label: "Lebanon", value: "Lebanon" },
  { code: "ls", continent: "Africa", label: "Lesotho", value: "Lesotho" },
  { code: "lr", continent: "Africa", label: "Liberia", value: "Liberia" },
  { code: "ly", continent: "Africa", label: "Libya", value: "Libya" },
  { code: "li", continent: "Europe", label: "Liechtenstein", value: "Liechtenstein" },
  { code: "lt", continent: "Europe", label: "Lithuania", value: "Lithuania" },
  { code: "lu", continent: "Europe", label: "Luxembourg", value: "Luxembourg" },
  { code: "mg", continent: "Africa", label: "Madagascar", value: "Madagascar" },
  { code: "mw", continent: "Africa", label: "Malawi", value: "Malawi" },
  { code: "my", continent: "Asia", label: "Malaysia", value: "Malaysia" },
  { code: "mv", continent: "Asia", label: "Maldives", value: "Maldives" },
  { code: "ml", continent: "Africa", label: "Mali", value: "Mali" },
  { code: "mt", continent: "Europe", label: "Malta", value: "Malta" },
  { code: "mh", continent: "Oceania", label: "Marshall Islands", value: "Marshall Islands" },
  { code: "mr", continent: "Africa", label: "Mauritania", value: "Mauritania" },
  { code: "mu", continent: "Africa", label: "Mauritius", value: "Mauritius" },
  { code: "mx", continent: "North America", label: "Mexico", value: "Mexico" },
  { code: "fm", continent: "Oceania", label: "Micronesia", value: "Micronesia" },
  { code: "md", continent: "Europe", label: "Moldova", value: "Moldova" },
  { code: "mc", continent: "Europe", label: "Monaco", value: "Monaco" },
  { code: "mn", continent: "Asia", label: "Mongolia", value: "Mongolia" },
  { code: "me", continent: "Europe", label: "Montenegro", value: "Montenegro" },
  { code: "ma", continent: "Africa", label: "Morocco", value: "Morocco" },
  { code: "mz", continent: "Africa", label: "Mozambique", value: "Mozambique" },
  { code: "mm", continent: "Asia", label: "Myanmar", value: "Myanmar" },
  { code: "na", continent: "Africa", label: "Namibia", value: "Namibia" },
  { code: "nr", continent: "Oceania", label: "Nauru", value: "Nauru" },
  { code: "np", continent: "Asia", label: "Nepal", value: "Nepal" },
  { code: "nl", continent: "Europe", label: "Netherlands", value: "Netherlands" },
  { code: "nz", continent: "Oceania", label: "New Zealand", value: "New Zealand" },
  { code: "ni", continent: "North America", label: "Nicaragua", value: "Nicaragua" },
  { code: "ne", continent: "Africa", label: "Niger", value: "Niger" },
  { code: "ng", continent: "Africa", label: "Nigeria", value: "Nigeria" },
  { code: "kp", continent: "Asia", label: "North Korea", value: "North Korea" },
  { code: "mk", continent: "Europe", label: "North Macedonia", value: "North Macedonia" },
  { code: "no", continent: "Europe", label: "Norway", value: "Norway" },
  { code: "om", continent: "Asia", label: "Oman", value: "Oman" },
  { code: "pk", continent: "Asia", label: "Pakistan", value: "Pakistan" },
  { code: "pw", continent: "Oceania", label: "Palau", value: "Palau" },
  { code: "ps", continent: "Asia", label: "Palestine", value: "Palestine" },
  { code: "pa", continent: "North America", label: "Panama", value: "Panama" },
  { code: "pg", continent: "Oceania", label: "Papua New Guinea", value: "Papua New Guinea" },
  { code: "py", continent: "South America", label: "Paraguay", value: "Paraguay" },
  { code: "pe", continent: "South America", label: "Peru", value: "Peru" },
  { code: "ph", continent: "Asia", label: "Philippines", value: "Philippines" },
  { code: "pl", continent: "Europe", label: "Poland", value: "Poland" },
  { code: "pt", continent: "Europe", label: "Portugal", value: "Portugal" },
  { code: "qa", continent: "Asia", label: "Qatar", value: "Qatar" },
  { code: "ro", continent: "Europe", label: "Romania", value: "Romania" },
  { code: "ru", continent: "Europe", label: "Russia", value: "Russia" },
  { code: "rw", continent: "Africa", label: "Rwanda", value: "Rwanda" },
  { code: "ws", continent: "Oceania", label: "Samoa", value: "Samoa" },
  { code: "sm", continent: "Europe", label: "San Marino", value: "San Marino" },
  { code: "sa", continent: "Asia", label: "Saudi Arabia", value: "Saudi Arabia" },
  { code: "sn", continent: "Africa", label: "Senegal", value: "Senegal" },
  { code: "rs", continent: "Europe", label: "Serbia", value: "Serbia" },
  { code: "sc", continent: "Africa", label: "Seychelles", value: "Seychelles" },
  { code: "sl", continent: "Africa", label: "Sierra Leone", value: "Sierra Leone" },
  { code: "sg", continent: "Asia", label: "Singapore", value: "Singapore" },
  { code: "sk", continent: "Europe", label: "Slovakia", value: "Slovakia" },
  { code: "si", continent: "Europe", label: "Slovenia", value: "Slovenia" },
  { code: "sb", continent: "Oceania", label: "Solomon Islands", value: "Solomon Islands" },
  { code: "so", continent: "Africa", label: "Somalia", value: "Somalia" },
  { code: "za", continent: "Africa", label: "South Africa", value: "South Africa" },
  { code: "kr", continent: "Asia", label: "South Korea", value: "South Korea" },
  { code: "ss", continent: "Africa", label: "South Sudan", value: "South Sudan" },
  { code: "es", continent: "Europe", label: "Spain", value: "Spain" },
  { code: "lk", continent: "Asia", label: "Sri Lanka", value: "Sri Lanka" },
  { code: "sd", continent: "Africa", label: "Sudan", value: "Sudan" },
  { code: "sr", continent: "South America", label: "Suriname", value: "Suriname" },
  { code: "se", continent: "Europe", label: "Sweden", value: "Sweden" },
  { code: "ch", continent: "Europe", label: "Switzerland", value: "Switzerland" },
  { code: "sy", continent: "Asia", label: "Syria", value: "Syria" },
  { code: "tw", continent: "Asia", label: "Taiwan", value: "Taiwan" },
  { code: "tj", continent: "Asia", label: "Tajikistan", value: "Tajikistan" },
  { code: "tz", continent: "Africa", label: "Tanzania", value: "Tanzania" },
  { code: "th", continent: "Asia", label: "Thailand", value: "Thailand" },
  { code: "tl", continent: "Asia", label: "Timor-Leste", value: "Timor-Leste" },
  { code: "tg", continent: "Africa", label: "Togo", value: "Togo" },
  { code: "to", continent: "Oceania", label: "Tonga", value: "Tonga" },
  { code: "tt", continent: "North America", label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
  { code: "tn", continent: "Africa", label: "Tunisia", value: "Tunisia" },
  { code: "tr", continent: "Asia", label: "Turkey", value: "Turkey" },
  { code: "tm", continent: "Asia", label: "Turkmenistan", value: "Turkmenistan" },
  { code: "tv", continent: "Oceania", label: "Tuvalu", value: "Tuvalu" },
  { code: "ug", continent: "Africa", label: "Uganda", value: "Uganda" },
  { code: "ua", continent: "Europe", label: "Ukraine", value: "Ukraine" },
  { code: "ae", continent: "Asia", label: "United Arab Emirates", value: "United Arab Emirates" },
  { code: "gb", continent: "Europe", label: "United Kingdom", value: "United Kingdom" },
  { code: "us", continent: "North America", label: "United States", value: "United States" },
  { code: "uy", continent: "South America", label: "Uruguay", value: "Uruguay" },
  { code: "uz", continent: "Asia", label: "Uzbekistan", value: "Uzbekistan" },
  { code: "vu", continent: "Oceania", label: "Vanuatu", value: "Vanuatu" },
  { code: "va", continent: "Europe", label: "Vatican City", value: "Vatican City" },
  { code: "ve", continent: "South America", label: "Venezuela", value: "Venezuela" },
  { code: "vn", continent: "Asia", label: "Vietnam", value: "Vietnam" },
  { code: "ye", continent: "Asia", label: "Yemen", value: "Yemen" },
  { code: "zm", continent: "Africa", label: "Zambia", value: "Zambia" },
  { code: "zw", continent: "Africa", label: "Zimbabwe", value: "Zimbabwe" },
];

// City data - major cities by country
export interface CityOption {
  value: string | null;
  label: string;
  country: string;
}

export const cities: CityOption[] = [
  { label: "Select city", value: null, country: "" },
  // Germany
  { label: "Munich", value: "Munich", country: "Germany" },
  { label: "Berlin", value: "Berlin", country: "Germany" },
  { label: "Frankfurt", value: "Frankfurt", country: "Germany" },
  { label: "Hamburg", value: "Hamburg", country: "Germany" },
  { label: "Cologne", value: "Cologne", country: "Germany" },
  // Australia
  { label: "Melbourne", value: "Melbourne", country: "Australia" },
  { label: "Sydney", value: "Sydney", country: "Australia" },
  { label: "Brisbane", value: "Brisbane", country: "Australia" },
  { label: "Perth", value: "Perth", country: "Australia" },
  { label: "Adelaide", value: "Adelaide", country: "Australia" },
  // Canada
  { label: "Toronto", value: "Toronto", country: "Canada" },
  { label: "Vancouver", value: "Vancouver", country: "Canada" },
  { label: "Montreal", value: "Montreal", country: "Canada" },
  { label: "Calgary", value: "Calgary", country: "Canada" },
  { label: "Ottawa", value: "Ottawa", country: "Canada" },
  // United Kingdom
  { label: "London", value: "London", country: "United Kingdom" },
  { label: "Manchester", value: "Manchester", country: "United Kingdom" },
  { label: "Birmingham", value: "Birmingham", country: "United Kingdom" },
  { label: "Edinburgh", value: "Edinburgh", country: "United Kingdom" },
  { label: "Glasgow", value: "Glasgow", country: "United Kingdom" },
  // United States
  { label: "New York", value: "New York", country: "United States" },
  { label: "Los Angeles", value: "Los Angeles", country: "United States" },
  { label: "Chicago", value: "Chicago", country: "United States" },
  { label: "Boston", value: "Boston", country: "United States" },
  { label: "San Francisco", value: "San Francisco", country: "United States" },
  // Netherlands
  { label: "Amsterdam", value: "Amsterdam", country: "Netherlands" },
  { label: "Rotterdam", value: "Rotterdam", country: "Netherlands" },
  { label: "The Hague", value: "The Hague", country: "Netherlands" },
  { label: "Utrecht", value: "Utrecht", country: "Netherlands" },
  // France
  { label: "Paris", value: "Paris", country: "France" },
  { label: "Lyon", value: "Lyon", country: "France" },
  { label: "Marseille", value: "Marseille", country: "France" },
  { label: "Toulouse", value: "Toulouse", country: "France" },
  // Japan
  { label: "Tokyo", value: "Tokyo", country: "Japan" },
  { label: "Osaka", value: "Osaka", country: "Japan" },
  { label: "Kyoto", value: "Kyoto", country: "Japan" },
  { label: "Yokohama", value: "Yokohama", country: "Japan" },
  // Singapore
  { label: "Singapore", value: "Singapore", country: "Singapore" },
  // Ireland
  { label: "Dublin", value: "Dublin", country: "Ireland" },
  { label: "Cork", value: "Cork", country: "Ireland" },
  // Switzerland
  { label: "Zurich", value: "Zurich", country: "Switzerland" },
  { label: "Geneva", value: "Geneva", country: "Switzerland" },
  { label: "Basel", value: "Basel", country: "Switzerland" },
  // Sweden
  { label: "Stockholm", value: "Stockholm", country: "Sweden" },
  { label: "Gothenburg", value: "Gothenburg", country: "Sweden" },
  // Norway
  { label: "Oslo", value: "Oslo", country: "Norway" },
  { label: "Bergen", value: "Bergen", country: "Norway" },
  // Denmark
  { label: "Copenhagen", value: "Copenhagen", country: "Denmark" },
  // Italy
  { label: "Rome", value: "Rome", country: "Italy" },
  { label: "Milan", value: "Milan", country: "Italy" },
  { label: "Florence", value: "Florence", country: "Italy" },
  // Spain
  { label: "Madrid", value: "Madrid", country: "Spain" },
  { label: "Barcelona", value: "Barcelona", country: "Spain" },
  { label: "Valencia", value: "Valencia", country: "Spain" },
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
}: SearchableComboboxProps<T>) {
  const selectedItem = items.find(item => item.value === value) || items[0];

  return (
    <Combobox
      defaultValue={selectedItem}
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
            variant="outline"
          />
        }
      >
        <ComboboxValue />
        <ChevronsUpDownIcon className="-me-1!" />
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
}

export function CountryCombobox({ value, onValueChange, className, size }: CountryComboboxProps) {
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
}

export function CityCombobox({ value, onValueChange, countryFilter, className, size }: CityComboboxProps) {
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
    />
  );
}
