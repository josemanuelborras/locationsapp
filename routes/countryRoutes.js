'use strict'
import express from 'express';
import * as CountryController from '../controllers/countryController.js';

const countryRoutes = express();

countryRoutes.get('/testCountry', CountryController.testCountry);
countryRoutes.get('/getCountries', CountryController.getCountries);
countryRoutes.get('/getCountryById/:id?', CountryController.getCountryById);
countryRoutes.get('/getCountryByNumeric_code/:id?', CountryController.getCountryByNumeric_code);
countryRoutes.get('/newCountry', CountryController.newCountry);

export default countryRoutes;