// const { Int32 } = require('mongodb')
const { Int32 } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const product = new Schema({
  // _id:{
  //   type:String
  // },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number
  },
  dimension: {
    length: {
      type: Number,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  weightInKg: {
    type: Number,
  },
  colors: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  imagesURL: [],
  table: {
    type: String
  },
  reviewsArray: [
    {
      userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      title: {
        type: String,
      },
      photoURLS: [],
      rating: {
        type: Number,
        required: true
      },
      description: {
        type: String,
      }
    }
  ],
  quantity: {
    type: Number,
    required: true
  },
  sellerID: {
    type: String,
    required: true,
  },
  ruggedVerrified: {
    type: String,
    // required: true
  },
  offers: [
    {
      type: String
    }
  ],
  //services[0]=free delivery
  //services[1]=30 Days Return Policy
  //services[2]=Cash On Delivery
  //services[3]=Premium Quality Assurance
  services:[],
  // sizes from 0 to n
  size:[],
  // string types
  type:[],
  influencersNameChoice: [
    {
      influencerID: {
        type: Schema.Types.ObjectId,
        ref: "Influencer",
        // required: true,
      },
    }
  ],
  CountryOfOrigin:{
    type:String
  }
});

module.exports = mongoose.model('Product', product);