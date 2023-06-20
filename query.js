db.restaurants.find({}) /* Find restaurants within a database. */
db.restaurant.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }) /* Display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant. */
