<h4>eat-n-shop-frontend (frontend repository)<br>
eat-n-shop-api (backend repository)</h4>
deployment URL: https://tiny-pixie-453266.netlify.app/
<h2>BRIEF DESCRIPTION</h2>
<*>Kitchen Counter</*> is a food inventory application. At a minimum, it tracks what foods a user currently has in their cupboard or refrigerator. It also permits a user to record what they eat. With these two pieces of information the user will know when they are running low on a food item. Their food shopping will thus be more efficient and will eliminate those trips to the supermarket because one has forgotten that one product they meant to buy. The app will catalog a variety of pieces of data with many of those already laying the ground for future functionality.
<br>
<br>
This API drew on elements learned and developed from a prior General Assembly team project, Book Roulette.  As such, I would like to acknowledge my most capable teammates Michael Brock, Sarah Daehn, and Michelle McPherson. (links to be added)
<h2>User Stories</h2>
https://user-images.githubusercontent.com/59627995/163839842-097abea5-bb9a-44c0-8bf6-03c7e91967b5.png<br>
<h2>Planning</h2>
An initial wireframe follows. The final design deviates somewhat from the initial wireframe. Changes, largely, were for the better as it concerned aesthetic as well as functionality.<br>
  
[Wireframe.pdf](https://github.com/Gingaling/eat-n-shop-frontend/files/8506623/Wireframe.pdf)<br>

<h2>Tech Stack</h2>
This project utilized on the front end:<br>
&nbsp;&nbsp;&nbsp;&nbsp;React, FlexBox and animation from Animate.css; with deployment to Netlify; and<br>
On the backend:<br>
&nbsp;&nbsp;&nbsp;&nbsp;Mongoose, Express, Mongodb; with deployment to Heroku.
<h2>Backend Model and its Properties</h2>
This used only one model, Grocery.<br>
&nbsp;&nbsp;&nbsp;&nbsp;Grocery<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: { type: String, require: true, unique: true },<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMuch: { type: Number, default: 0 },<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eaten: { type: Number, default: 0 },<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remaining: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: Number,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;default: function() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.howMuch - this.eaten;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minimum: { type: Number, require: true },<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unitMeasure: String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;purchased: Boolean,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img: String,<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: String<br>
<h2> ReactComponent Hierarchy</h2>
&nbsp;&nbsp;&nbsp;&nbsp;App.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home.js<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AllGroceryList<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Form<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EatenList<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ShoppingList<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UpdateGroceryList<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nav<br>
