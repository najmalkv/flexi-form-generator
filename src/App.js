import React, { Component } from 'react';
import Flexi from './components/flexi-form'

class App extends Component {

  constructor(){
    super()

    this.state = {
                flexiConfig: {

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
  }

  onFlexiSubmit = (values) => {
    alert(JSON.stringify(values))
    // console.log(values)
  }

  render() {
    return (
      <div className="App">
          <Flexi onSubmit={this.onFlexiSubmit} config={this.state.flexiConfig} />
      </div>
    );
  }
}

export default App;
