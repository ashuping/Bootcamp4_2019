import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import ButtonTray from './components/ButtonTray';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
			add_mode: false,
			del_mode: false,
			data: this.props.data,
			next_free_address: 149
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
		this.setState({filterText: value})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
		this.setState({selectedBuilding: id})
  }

	add_building_toggle() {
		this.setState({add_mode: !this.state.add_mode})
	}

	del_building_toggle(){
		this.setState({del_mode: !this.state.del_mode})
	}

	add_building_on_submit(new_building){
		console.log("adding this building:")
		new_building.id = this.state.next_free_address
		console.log(new_building)
		var new_arr = this.state.data
			.concat([new_building])
			.sort((lhs, rhs) => {
				if(lhs > rhs) return 1
				if(lhs < rhs) return -1
				return 0
			})
		this.setState({
			data: new_arr,
			next_free_address: this.state.next_free_address+1
		})
	}

	del_entry(id){
		var new_arr = this.state.data
			.filter((item) => {
				return item.id !== id
			})

		this.setState({
			data: new_arr
		})
	}

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search fil_up={this.filterUpdate.bind(this)} />
				<AddBuilding 
					hidden={!this.state.add_mode} 
					close_callback={this.add_building_toggle.bind(this)} 
					submit_callback={this.add_building_on_submit.bind(this)}
				/>
				<ButtonTray 
					add_building_callback={this.add_building_toggle.bind(this)}
					del_building_callback={this.del_building_toggle.bind(this)}
					add_mode={this.state.add_mode}
					del_mode={this.state.del_mode}
				/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover"><tbody>
									<tr>
										<td><h2>Directory listings</h2></td>
									</tr>
                  <BuildingList
                    data={this.state.data}
										filter={this.state.filterText}
										sel_up={this.selectedUpdate.bind(this)}
										del_button_enabled={this.state.del_mode}
										del_entry={this.del_entry.bind(this)}
                  />
                </tbody></table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
								data={this.state.data}
								filter={this.state.selectedBuilding}
							/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
