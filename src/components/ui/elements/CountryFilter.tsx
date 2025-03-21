import React from 'react';

interface CountryFilterProps {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  countries: string[];
}

const CountryFilter: React.FC<CountryFilterProps> = ({ selectedCountry, setSelectedCountry, countries }) => {
  return (
      <select
        className="mb-4 p-2 border rounded bg-primary"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="All">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
  );
};

export default CountryFilter;
