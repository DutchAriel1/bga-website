/* Shared Airtable client.
   Tables are looked up by name — keep the names in Airtable in sync with these.
   Each handler imports `at("Table Name")` and calls .create([{ fields: { ... } }]).
*/
import Airtable from "airtable";

let _base;
function base() {
  if (_base) return _base;
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID } = process.env;
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    throw new Error("Missing AIRTABLE_TOKEN or AIRTABLE_BASE_ID in env.");
  }
  _base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID);
  return _base;
}

export const TABLES = {
  applications:    "Applications",
  igotnext:        "I Got Next Enrollments",
  orchidNominate:  "Orchid Nominations",
  orchidSponsor:   "Orchid Sponsorships",
  eliteEight:      "Elite Eight Applications",
  hbcuInterest:    "HBCU Interest",
  contact:         "Contact",
  tickets:         "Ticket Requests",
  bookDonations:   "Book Donations",
  newsletter:      "Newsletter",
  eventsNotify:    "Events Notify",
};

export function at(tableName) {
  return base()(tableName);
}

export async function createRecord(tableName, fields) {
  const records = await at(tableName).create([{ fields }]);
  return records[0];
}
