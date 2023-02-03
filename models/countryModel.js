'use strict'
import mongoose from 'mongoose';
// https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
const CountrySchema = ({
    iso_code: {
        alpha2: String,
        alpha3: String,
        numeric_code: String
    },
    name: String,
    coordinates: {
        lat: Number,
        lon: Number
    }
});

export default mongoose.model('Country', CountrySchema);