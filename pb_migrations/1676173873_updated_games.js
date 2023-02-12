migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z9ui8exu",
    "name": "data",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  // remove
  collection.schema.removeField("z9ui8exu")

  return dao.saveCollection(collection)
})
