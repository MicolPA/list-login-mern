const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  title: String,
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  date_limit: {
    type: String,
  },
},{
  timestamp:true
});

module.exports = model('Note', noteSchema);
