migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
