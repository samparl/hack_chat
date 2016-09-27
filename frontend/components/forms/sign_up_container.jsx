const React = require('react'),
      FormContainer = require('./form_container'),
      FormData = require('./signup_form_data');

module.exports = (props) => (
  <FormContainer formData={ FormData } />
);
