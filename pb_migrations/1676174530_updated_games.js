migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
