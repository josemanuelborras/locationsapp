'use strict'

import Country from '../models/countryModel.js';
import countryRoutes from '../routes/countryRoutes.js';

// only for routes testing
export const testCountry = (req, res) => {
    res.status(200).send({message: 'Hi from countryController'});
}

// GET all countries
export const getCountries = (req, res) => {

    Country.find({}).exec((err, countries) => {
        if(err) return res.status(500).json({message: 'There\'s an error trying to get the countries'});

        if(!countries) return res.status(404).json({message: 'Countries were not found'});

        if(countries.length <= 0) return res.status(200).json({message: 'The Country table is empty'});

        return res.status(200).json({ countries });
    });
}

// get country by _id
export const getCountryById = (req, res) => {

    const id = req.params.id ?? req.body.id;

    if(!id) return res.status(404).json({ error: 'Id required' });

    Country.findById(id, (err, country) => {
        if(err) {
            console.log(err);
            return res.status(404).json({ error: 'Petition ERROR' });
        }
        if(!country) return res.status(204).json({ message: 'Not found' });

        return res.status(200).json({ country: country});
    })
}

// get Country by ISO CODE: ARG === 032
export const getCountryByNumeric_code = (req, res) => {

    const id = req.params.id ?? req.body.id;

    if(!id) return res.status(404).json({ error: 'Id required' });

    Country.find({'iso_code.numeric_code': id}, (err, country) => {
        // console.log(iso_code)
        if(err) {
            console.log(err);
            return res.status(404).json({ error: 'Petition ERROR' });
        }
        if(!country) return res.status(204).json({ message: 'Not found' });

        return res.status(200).json({ country: country});
    })
}

// For POST only - create new Country data
export const newCountry = (req, res) => {

    res.status(200).send({message: 'Hi from countryController'});

}