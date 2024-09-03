import axios from "axios";
import { TomTomSearchResponse } from "../Shared/Contracts/TomTomSearchResponse";
import { AutocompleteResult } from "./AutocompleteResult";

// https://developer.tomtom.com/search-api/documentation/search-service/fuzzy-search
async function getPlaceAutocomplete(
  key: string,
  address: string,
  countrySet: string[]
): Promise<AutocompleteResult[]> {
  const autocomplete = await axios.get<TomTomSearchResponse>(
    `https://api.tomtom.com/search/2/search/${address}.json`,
    {
      params: {
        key,
        limit: 100,
        countrySet: countrySet,
      },
    }
  );
  return autocomplete.data.results.map((result) => {
    return {
      placeId: result.id,
      streetName: result.address.streetName,
      countryCode: result.address.countryCode,
      country: result.address.country,
      freeformAddress: result.address.freeformAddress,
      municipality: result.address.municipality,
    };
  });
}

const getPlaceAUAutocomplete = async function getPlaceAUAutocomplete(
  key: string,
  address: string
): Promise<AutocompleteResult[]> {
  return getPlaceAutocomplete(key, address, ["AU"]);
};

export default getPlaceAUAutocomplete;
