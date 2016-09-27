const React = require('react'),
      ErrorList = require('./error_list');
// debugger
// const thing = function() {
//   debugger
// };

module.exports = (props) => (
  <div className={ props.containerClass }>
    <div className={ props.presentationClass }>
      <button onClick={ props.backCallback }>{ props.backButton }</button>
      <h2>{ props.title }</h2>
      <span className="group">{ props.subTitle }</span>
      <ErrorList errors={ props.baseErrors } />
      <form onSubmit={ props.submitCallback }>
        {
          props.fields.map(function(inputObj, i) {
            return(
              <div key={ i }>
                <ErrorList
                  errorType={ inputObj.handle }
                  errors={ inputObj.errors }
                />
                <input
                  type={ inputObj.type || "text" }
                  placeholder={ inputObj.placeholder }
                  value={ inputObj.value || ""}
                  onChange={ inputObj.handler }
                  className={ props.inputClass }
                />
              </div>
            );
          })
        }
        <input
          type="submit"
          value={ props.submitButton }
          className={ props.inputClass } />
      </form>
    </div>
  </div>
);
