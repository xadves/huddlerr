migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.createRule = null

  return dao.saveCollection(collection)
})
