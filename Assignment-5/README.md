# Providing Service Endpoints for the VATSIM Data

The Response Object in the ExpressJS Framework provides the means for either rendering a Pug template OR just sending back a JSON object. The objective here is to provide an API similar to that of FlightAware based on the VATSIM data you've collected and stored in your MongoDB Atlas database.  This will of course require that you read the data from the database in the controller methods you associate with the URL service endpoints in your routes. 

Here is the documentation for the Response Object in Express:  https://expressjs.com/en/4x/api.html#res

The objective here is to provide a REST api of your own that closely mimics the following methods from the Flightaware FlightXML2 API:  https://flightaware.com/commercial/flightxml/documentation2.rvt and  https://flightaware.com/commercial/flightxml/explorer/

These will only be for Flights and not controllers, for now:

* Arrived
* Departed
* Enroute
* FlightInfo
* Scheduled
* A word about the scheduled method

In order to implement the Scheduled method, you'll need to accommodate an entirely new entity from the !PREFILE: section of the data file. The entails creating a new Mongoose Schema as the fields are slightly different from a Flight.

![Good Luck!](https://media1.tenor.com/images/c0c2264911d8cd4a688acd0542240f95/tenor.gif?itemid=7603564)