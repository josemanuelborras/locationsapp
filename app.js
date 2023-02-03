'use strict'
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// ROUTES CONFIG
import countryRoutes from './routes/countryRoutes.js'
// const state_routes = require('./routes/state');
// const logistic_routes = require('./routes/logisticRoutes');
// const shipping_routes = require('./routes/shipping');
// const pickup_routes = require('./routes/pickup');
// const location_routes = require('./routes/location/locationRoutes');

// MIDDLEWARES
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});

// ROUTES
const route = process.env.ROUTE;

app.use(route, countryRoutes);
// app.use(route, logistic_routes);
// app.use(route, shipping_routes);
// app.use(route, pickup_routes);
// app.use(route, location_routes);

// EXPORTS
export default app;