migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.createRule = "@request.auth.id = @collection.teams.user"
  collection.updateRule = "@request.auth.id = @collection.teams.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
