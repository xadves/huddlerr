migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sethowky",
    "name": "homeScore",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ddfcqg3x",
    "name": "awayScore",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lujwnkpq",
    "name": "gameTime",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null
    }
  }))

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

  // update
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

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpo9nk55",
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
})
