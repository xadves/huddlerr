migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvqniuf2",
    "name": "number",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  // remove
  collection.schema.removeField("cvqniuf2")

  return dao.saveCollection(collection)
})
