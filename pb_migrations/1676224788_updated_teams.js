migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id = @collection.teams.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("11qqypxdr1hyz6r")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
