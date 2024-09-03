import { config } from "dotenv";
import { describe } from "@jest/globals";
import getPlaceAUAutocomplete from "../src/Autocomplete/getPlaceAUAutocomplete";
import getAutocompleteDetails from "../src/Autocomplete/getAutocompleteDetails";

config();

if (!process.env.TOMTOM_API_KEY) {
  throw new Error("TOMTOM_API_KEY is not set in the environment variables");
}

const apiKey = process.env.TOMTOM_API_KEY;

describe("Tomtom Places E2E Tests", () => {
  describe("getAutoCompleteDetails", () => {
    it("returns a promise", () => {
      const res = getAutocompleteDetails("Charlotte Street");
      expect(res).toBeInstanceOf(Promise);
    });

    it("can fetch from the autocomplete api", async () => {
      const res = await getAutocompleteDetails("Charlotte Street");
      const firstRes = res[0];
      console.log(firstRes);
      expect(firstRes).toHaveProperty("placeId");
      expect(firstRes).toHaveProperty("streetName");
      expect(firstRes).toHaveProperty("countryCode");
      expect(firstRes).toHaveProperty("country");
      expect(firstRes).toHaveProperty("freeformAddress");
      expect(firstRes).toHaveProperty("municipality");
    });
  });

  describe("getPlaceAutocomplete", () => {
    it("handles no results", async () => {
      const res = await getPlaceAUAutocomplete(apiKey, "asfasffasfasafsafs");
      expect(res).toStrictEqual([]);
    });

    it("handles error", async () => {
      expect(getPlaceAUAutocomplete(apiKey, "")).rejects.toThrow();
    });
  });

  describe("getPlaceAutocomplete", () => {
    it("only allow Australian addresses", async () => {
      const res = await getPlaceAUAutocomplete(apiKey, "Charlotte Street");

      res.forEach((r) => {
        expect(r).toMatchObject({ countryCode: "AU" });
      });
    });
  });
});
