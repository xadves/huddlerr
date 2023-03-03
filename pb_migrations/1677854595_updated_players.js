migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.updateRule = "@request.auth.id = @request.data.team.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qjnhammn45qxejc")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
