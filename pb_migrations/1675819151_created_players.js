migrate((db) => {
  const collection = new Collection({
    "id": "qjnhammn45qxejc",
    "created": "2023-02-08 01:19:11.637Z",
    "updated": "2023-02-08 01:19:11.637Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "htasomk0",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc");

  return dao.deleteCollection(collection);
})
