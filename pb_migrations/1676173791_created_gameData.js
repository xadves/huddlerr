migrate((db) => {
  const collection = new Collection({
    "id": "ijpdsc8dxd17d9x",
    "created": "2023-02-12 03:49:51.799Z",
    "updated": "2023-02-12 03:49:51.799Z",
    "name": "gameData",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uaexwkow",
        "name": "game",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "taafwejve51f20o",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "ydjwl1w4",
        "name": "data",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("ijpdsc8dxd17d9x");

  return dao.deleteCollection(collection);
})
