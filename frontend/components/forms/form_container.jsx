const React = require('react'),
      Util = require('../../util/util'),
      ErrorStore = require('../../stores/error_store'),
      ErrorActions = require('../../actions/error_actions'),
      SignUpActions = require('../../actions/signup_actions'),
      Header = require('../external_header'),
      Form = require('./form'),
      startPage = 0;

module.exports = React.createClass({
  getInitialState() {
    const init = this._initializePages();
    return({
      values: init.values,
      page: startPage,
      display: init.display,
      errors: init.errors
    });
  },

  _initializePages() {
    let values, errors, display, pages, fields;
    [values, errors, fields] = [{}, {base: []}, []];
    pages = this.props.formData.pages;
    display = new Array(pages.length).fill("none");
    display[startPage] = "block";

    pages.forEach(function(page) {
      let pageFields = Util.getValues({array: page.fields, key: 'handle'});
      fields = fields.concat(pageFields);
    }.bind(this));
    fields.forEach(function(field) {
      [values[field], errors[field]] = [null, []];
    });
    return {values: values, errors: errors, display: display};
  },

  _generateInputs(fields, toggleDisplay) {
    return fields.map(function(field){
      let page = this.state.page;
      let newProps = {
        value: this.state.values[field.handle],
        handler: this._handleInput.bind(this, field.handle),
        errors: this.state.errors[field.handle],
        display: this.state.display[page]
      };
      return Object.assign({}, field, newProps);
    }.bind(this));
  },

// HANDLE RETURNED ERRORS

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    setTimeout(function () {
      ErrorActions.clearErrors();
    }, 0);
    this.errorListener.remove();
  },

  _onChange() {
    let type = props.formData.form.type,
    errors = ErrorStore.errors(type),
        newState = {};

    Object.keys(errors).forEach(function(errorType){
      let error = (errorType === "password_digest") ? "password" : errorType;
      if(this.state.errors[error]) {
        newState[error] = errors[errorType];
      }
    }.bind(this));
    errors = Object.assign({}, this.state.errors, newState);
    this.setState({
      errors: errors
    });
  },

// HANDLE FORM INPUT AND SUBMISSION

  _handleInput(inputType, e) {
    let newState = Object.assign({}, this.state.values);
    newState[inputType] = e.target.value;
    this.setState({values: newState});
  },

  _fieldsComplete(fields) {
    let res = true;
    fields.forEach(function(field){
      if(!this.state.values[field]) res = false;
    }.bind(this));
    return res;
  },

  _onSubmit(e) {
    e.preventDefault();
    let pages, page, fields;
    pages = this.props.formData.pages;
    page = pages[this.state.page];
    fields = page.about.required;
    if(this._fieldsComplete(fields)) {
      page.about.submit.call(this, this.state);
    }
  },

  _backCallback(e) {
    e.preventDefault();
    props.formData.pages[this.state.page].about.backCallback.call(this, this.state, true);
  },

  _combineErrors(types) {
    let res = [];
    types.forEach(function(errorType) {
      let type, errors = this.state.errors[errorType];
      errors.forEach(function(error) {
        type = (errorType === "base") ?
          "" : errorType[0].toUpperCase() + errorType.slice(1) + " ";
        res = res.concat(type + error);
      });
    }.bind(this));
    return res;
  },

  _getFields(pages, options) {
    let res = [];
    pages.forEach(function(page, idx){
      if((options.exclude) && (options.exclude.indexOf(idx) < 0)) {
        res = res.concat(Util.getValues({ array: page.fields, key: 'handle' }));
      }
    }.bind(this));
    return res;
  },

  render() {
    let pages, form, about, page, currentPage, types,
        inputs, errors, title, buttonText;
    pages = this.props.formData.pages;
    form = this.props.formData.form;
    currentPage = this.state.page;
    page = pages[currentPage];
    about = page.about;
    types = this._getFields(pages, {exclude: [this.state.page]});
    inputs = this._generateInputs(pages[currentPage].fields);
    errors = this._combineErrors(types.concat('base'));

    return(
      <div>
        <Header />
        <Form
          backButton={ about.backButton }
          backCallback={ this._backCallback }
          containerClass={ form.containerClass }
          presentationClass={ form.presentationClass }
          title={ about.title }
          subTitle={ about.subtTitle }
          submitCallback={ this._onSubmit }
          submitButton={ about.buttonText }
          inputClass={ form.inputClass }
          fields={ inputs }
          baseErrors={ errors }
        />
    </div>
    );
  }
});
