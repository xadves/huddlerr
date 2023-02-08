migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sethowky",
    "name": "homeScore",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddfcqg3x",
    "name": "awayScore",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lujwnkpq",
    "name": "gameTime",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zuwddxcp",
    "name": "auditLog",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // remove
  collection.schema.removeField("sethowky")

  // remove
  collection.schema.removeField("ddfcqg3x")

  // remove
  collection.schema.removeField("lujwnkpq")

  // remove
  collection.schema.removeField("zuwddxcp")

  // remove
  collection.schema.removeField("lpo9nk55")

  return dao.saveCollection(collection)
})
