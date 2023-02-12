migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3jgk9vo",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h3jgk9vo",
    "name": "user",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
