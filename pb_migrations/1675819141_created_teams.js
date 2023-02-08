migrate((db) => {
  const collection = new Collection({
    "id": "11qqypxdr1hyz6r",
    "created": "2023-02-08 01:19:01.501Z",
    "updated": "2023-02-08 01:19:01.501Z",
    "name": "teams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wjocuvdm",
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
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r");

  return dao.deleteCollection(collection);
})
