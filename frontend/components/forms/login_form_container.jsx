const React = require('react'),
      FormContainer = require('./form_container'),
      FormData = require('./login_form_data');

module.exports = (props) => (
  <FormContainer formData={ FormData } />
);
