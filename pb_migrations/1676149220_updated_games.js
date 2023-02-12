migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpo9nk55",
    "name": "team",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "11qqypxdr1hyz6r",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpo9nk55",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "11qqypxdr1hyz6r",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
