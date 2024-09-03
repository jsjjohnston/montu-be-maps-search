import { AutocompleteResult } from "./AutocompleteResult";
import getPlaceAUAutocomplete from "./getPlaceAUAutocomplete";

const getAutocompleteDetails = async function getAutocompleteDetails(
  address: string
): Promise<AutocompleteResult[]> {
  const apiKey = process.env.TOMTOM_API_KEY;

  if (apiKey === null || apiKey === undefined) {
    throw new Error("ApiKey should not be null or undefined");
  }

  const res = getPlaceAUAutocomplete(apiKey, address).then(
    async (autocompleteResults) => {
      const res = [...autocompleteResults];
      return res;
    }
  );
  return res;
};

export default getAutocompleteDetails;
