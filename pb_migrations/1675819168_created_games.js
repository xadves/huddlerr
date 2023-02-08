migrate((db) => {
  const collection = new Collection({
    "id": "taafwejve51f20o",
    "created": "2023-02-08 01:19:28.269Z",
    "updated": "2023-02-08 01:19:28.269Z",
    "name": "games",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k17ojo0m",
        "name": "date",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o");

  return dao.deleteCollection(collection);
})
