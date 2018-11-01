import React, { Component } from 'react';
import '../index.css';


class FlexiForm extends Component {

  constructor(props){
  	super(props)

  	this.state = {
  		values:{}
  	}

  }

  componentWillMount(){

  	const {config, onSubmit} = this.props

  	//validation notifications
  	if(!config)
  	  return console.error('Config prop is required!')

  	if(typeof(config) != 'object')
  	  return console.error('onSubmit prop has to be a JSON object!')

  	if(!onSubmit)
  	  return console.error('onSubmit prop is required!')

  	if(typeof(onSubmit) != 'function')
  	  return console.error('onSubmit prop has to be a function!')

  	if(!config.items || !Array.isArray(config.items))
  	  return console.error('config should have the property items with value as an array!')





  	//Intialise the local state with the config values on mount
  	let values = {}

  	config && config.items && config.items.length > 0 && config.items.forEach((field) => {
  		field.type === 'DropDown'
  		? values[field.name] = (field.values && field.values[0]) || ''
  		: values[field.name] = ''
  	})


  	this.setState({values: values, config: config})

  }

  // handles on change of the input fields
  handleChange = (fieldName, value) => {

  	const {values} = this.state

  	let tempValues = values

  	tempValues[fieldName] = value

  	this.setState({values: tempValues})
  }

  // handles rendering of an input of type TextField
  handleRenderTextField = (field, index, value= '') => {

  	const {values} = this.state

  	return (<input type="text" className="flexi-input flexi-textfield" name={field.name} id={field.name + index} value={values[field.name] || value} onChange={(event) => this.handleChange(field.name,event.target.value)}/>)

  }

  //handles rendering of an input of type DropDown
   handleRenderDropDownField = (field, index, value= '') => {


  	return (<select className="flexi-input flexi-dropdown" onChange={(event) => this.handleChange(field.name,event.target.value)}>
  			{field.values && field.values.length > 0 && field.values.map((val, index) => <option key={index} value={val}>{val}</option>)}
  		</select>)

  }


  render() {

  	const {onSubmit} = this.props
  	const {values,config} = this.state


    return (
      config && config.items && config.items.length > 0 ? <div className="flexi-form-container">
	       	  {config.items.map((field, index) =>
	       		<div key={index} className="flexi-field">
		       		<label htmlFor={field.name + index} className="flexi-label">{field.label}</label>
		       		{ field.type === 'DropDown' ? this.handleRenderDropDownField(field) : (field.type === 'TextField' ? this.handleRenderTextField(field, index) : <div>Unknown Input Type</div>)}
	       		</div>

	       	)}
	       	<button className="flexi-submit" type="submit" onClick={() => onSubmit(values)}>Submit</button>
	      </div> : <div></div>
    );
  }
}

export default FlexiForm;
