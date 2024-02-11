const { model, Schema } = require("mongoose");

const ContactSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//createing a model or  collection
const Contact = new model("Contact", ContactSchema);

module.exports = Contact;
