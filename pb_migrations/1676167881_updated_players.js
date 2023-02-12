migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slh1uezs",
    "name": "team",
    "type": "relation",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "slh1uezs",
    "name": "field",
    "type": "relation",
    "required": false,
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
