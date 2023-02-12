migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.createRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.createRule = null

  return dao.saveCollection(collection)
})
