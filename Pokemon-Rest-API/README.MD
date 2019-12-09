## Pokedex REST API

![Good Luck!](https://66.media.tumblr.com/6794739b290720d1b8d76d4a25fccb0f/tumblr_p7rzoloLcU1x5ra9co1_500.gifv)

## Built With (Dependencies)
* [Node Package Manager](https://www.npmjs.com/package/express)
* [Mongoose](https://mongoosejs.com/docs/api.html)
* [Express](https://expressjs.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)

## Getting Started ##
* npm i express
* npm i mongoose
* npm i nodemon
* npm i dotenv
* npm start

## Accessing mongoDB ##
* goto localhost:5000/1
* use Postman to make any GET, POST, PATCH, DELETE requests
* nodemon should refresh localhost:5000/1 when changes are applied and you can see the contents of the DB

## Query Structure ##

* We attempting to GET, POST, PATCH, DELETE requests use the following structure as a RAW JSON input

{
  "name":"POKEMONNAMEGOESHERE",
  "type":"POKEMONTYPEGOESHERE",
  "ability":"POKEMONABILITYNAMEGOESHERE"
}
