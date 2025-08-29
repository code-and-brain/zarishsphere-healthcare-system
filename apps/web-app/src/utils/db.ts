import PouchDB from "pouchdb";

export const localDB = new PouchDB("zarishcare");
export const remoteDB = new PouchDB("https://your-couchdb-server/zarishcare", {
  skip_setup: true,
});

export function syncDatabases() {
  localDB.sync(remoteDB, {
    live: true,
    retry: true,
  }).on("change", info => {
    console.log("Sync change:", info);
  }).on("error", err => {
    console.error("Sync error:", err);
  });
}