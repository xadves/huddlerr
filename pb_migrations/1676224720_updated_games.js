migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.listRule = "@request.auth.id = @collection.teams.user"
  collection.viewRule = "@request.auth.id = @collection.teams.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("taafwejve51f20o")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
