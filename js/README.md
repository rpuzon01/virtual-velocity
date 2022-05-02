# Virtual Traders Web App
An Ecommerce site to trade rare vintage trading cards 

## Getting Started

    npm i
    createdb graceshopper

Run `npm run server:dev` to start the web server.
In a second terminal navigate back to the local repo and run `npm run client:dev` to start the react server. 
Run `npm run db:build` which rebuilds the database, all the tables, and ensures that there is meaningful data present.

## Deployed URL
[virtual-traders.herokuapp.com - hosted on heroku](virtual-traders.herokuapp.com)
    
## Environment Variables

    JWT_SECRET="your own secret here"
    
## Tech Stack
### Backend: Node.js, Express.js, PostgreSQL
It all starts in the root `index.js` file.  This is the express server.  The routing middleware is handled in this file as well.

### Frontend: React.js, Bootstrap
The root React code starts in the `src/index.js` file.

## Project Structure

```bash
├── db
│   ├── index.js
│   ├── init_db.js
│   ├── order_products.js
│   ├── orders.js
│   ├── products.js
│   ├── users.js
│   └── utils.js
├── index.js
├── package.json
├── public
│   ├── index.html
│   └── style.css
├── routes
│   ├── Account.css
│   ├── Account.js
│   ├── App.js
│   ├── CardSection.css
│   ├── CardSection.js
│   ├── Cart.js
│   ├── Checkout.css
│   ├── Checkout.css
│   ├── CheckoutForm.js
│   ├── Footer.css
│   ├── Footer.js
│   ├── Home.css
│   ├── Home.js
│   ├── index.css
│   ├── index.js
│   ├── Login.css
│   ├── Login.js
│   ├── Logout.js
│   ├── Navbar.js
│   ├── Products.js
│   ├── Register.js
│   ├── SingleOrder.css
│   ├── SingleOrder.js
│   └── SingleProduct.js
└── src
    ├── api
    │   └── index.js
    ├── components
    │   └── index.js
    ├── util
    │   └── index.js
    └── index.js
```

Top level `index.js` is our Express Server. This is responsible for setting up our API, starting our server, and connecting to our database.

Inside `/db` we have `index.js` which is responsible for creating all of our database connection functions.

Inside `/routes` we have `index.js` which is responsible for building the `apiRouter`, which is attached in the express server. This will build all routes that our React application will use to send/receive data via JSON.

Lastly `/public` and `/src` are the two puzzle pieces for our React front-end. `/public` contains any static files necessary for our front-end, and `/src` is our React source code.

## Contributors
Innocent Buthelezi, Jon Cobb, Sam Mckaig, Ryan Riley Puzon.  You can see all of their gitHub profiles here:
[Innocent](https://github.com/wallacepreston) [Jon](https://github.com/Jonmorgan12) [Sam](https://github.com/bboysamuel) [Ryan Riley](https://github.com/rpuzon01)
