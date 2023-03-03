migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.createRule = "@request.auth.id = @request.data.team.user"
  collection.updateRule = "@request.auth.id = @request.data.team.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
