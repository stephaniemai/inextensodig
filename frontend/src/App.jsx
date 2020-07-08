import React, { Component } from 'react';
import Checkbox from './Checkbox';

const NUMBER_OF_CHECKBOXES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAll: false,
      checkedIdList: []
    };
  }

  handleCheckboxChange = (event) => {
    console.log(event.target);
    let selectedIdList = this.state.checkedIdList;
    if(event.target.checked) {
      selectedIdList.push(event.target.id);
    } else {
      const start = selectedIdList.indexOf(parseInt(event.target.id));
      selectedIdList.splice(start, 1);
    }
    const isAllSelected = (selectedIdList.length === NUMBER_OF_CHECKBOXES);
    this.setState({ checkedIdList: selectedIdList, checkedAll: isAllSelected});
  }

  handleSelectAll = () => {
    let checkboxList = [];
    let selectedAll = this.state.checkedAll;
    if (selectedAll) {
      selectedAll = false;
      checkboxList = [];
    } else {
      selectedAll = true;
      for (let i = 1; i <= NUMBER_OF_CHECKBOXES; i++) {
        checkboxList.push(i);
      }
    }
    this.setState({ checkedIdList: checkboxList, checkedAll: selectedAll});
  }

  isChecked = (id) => {
    if (this.state.checkedIdList.includes(id)) {
      return true;
    }
  }

  render() {
    let checkboxList = [];
    for (let i = 1; i <= NUMBER_OF_CHECKBOXES; i++) {
      checkboxList.push(i);
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <form>
              <Checkbox id="all" value="Select all" checked={this.state.checkedAll} handleSelectAll={this.handleSelectAll} />
              {checkboxList.map( checkbox =>
                <Checkbox
                  id={checkbox}
                  key={checkbox}
                  value={'Item ' + checkbox}
                  checked={this.isChecked(checkbox)}
                  handleCheckboxChange={this.handleCheckboxChange}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
