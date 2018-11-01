
## Flexi Component - A Dynamic Form Generator Component

Flexi component generates a form dynamically based on a json object that is passed as props. The component also renders and handles a submit button which calls a function that is passed as props with an object with values from the form as an argument.

#### Supported Props

##### 1. config
type: Object

The value passed is used to generate elements on the form. Below is an example of the value:
```
config = {

        items: [
                {
                "name": "person_name",
                "label": "Person's Name",
                "type": "TextField",
                },
                {
                "name": "states",
                "label": "Person's state",
                "type": "DropDown",
                "values": [
                           "Maharashtra",
                           "Kerala",
                           "Tamil Nadu"
                            ]

                }
              ]

        }
    }
```

Note: Currently only two types of inputs are supported 'TextField' & 'DropDown'. Use 'TextField' for input type text and 'DropDown' for select tag.

##### 2. onSubmit
type: function

The function passed is called when the user clicks the submit button on the form and an object with the values from the form are passed as an argument. Below is example of the object that is passed:

```
{person_name: "test", states: "Maharashtra"}
```


#### How To Use

Clone the contents of the src folder and import the flexi component.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

