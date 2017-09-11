const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geoLocation Schema
const GeoLocationSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphare"
  }
});

//create ninja Schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoLocationSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;