# eat-n-shop-frontend (frontend repository)
# eat-n-shop-apt (backend repository)
deployment URL: https://profound-moonbeam-1e2506.netlify.app/
<h1>BRIEF DESCRIPTION
<h3>Kitchen Counter is a food inventory application. At a minimum, it tracks what foods a user currently has in their cupboard or refrigerator. It also permits a user to record what they eat. With these two pieces of information the user will know when they are running low on a food item. Their food shopping will thus be more efficient and will eliminate those trips to the supermarket because one has forgotten that one product they meant to buy. The app will catalog a variety of pieces of data with many of those already laying the ground for future functionality.

<\A>
This API drew on elements learned and developed from a prior General Assembly team project, Book Roulette.  As such, I would like to acknowledge my most capable teammates Michael Brock, Sarah Daehn, and Michelle McPherson. (links to be added)
<h2>![image](https://user-images.githubusercontent.com/59627995/163839842-097abea5-bb9a-44c0-8bf6-03c7e91967b5.png)

<h3>An initial wireframe follows. The final design deviates somewhat from the initial wireframe. Changes, largely, were for the better as it concerned aesthetic as well as functionality.
  
[Wireframe.pdf](https://github.com/Gingaling/eat-n-shop-frontend/files/8506623/Wireframe.pdf)

<h2>Tech Stack
<h3>This project utilized on the front end:
   React, FlexBox and animation from Animate.css
   with deployment to Netlify; and
   Mongoose, Express, Mongodb on the backend,
   with deployment to Heroku.
<h2>Backend Model and its Properties
<h3>This used only one model, Grocery.
  Grocery
  	name: { type: String, require: true, unique: true },
    howMuch: { type: Number, default: 0 },
    eaten: { type: Number, default: 0 },
	  remaining: {
	  	type: Number,
		  default: function() {
			return this.howMuch - this.eaten;
		  }
	  },
	  minimum: { type: Number, require: true },
	  unitMeasure: String,
	  purchased: Boolean,
	  Date: String,
	  img: String,
	  type: String
 <h2> ReactComponent Hierarchy
   App.js
    Home.js
      AllGroceryList
      Form
      EatenList
      ShoppingList
      UpdateGroceryList
   Nav
