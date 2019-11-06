import React from 'react';

class Search extends React.Component {
	filter_update() {
		this.props.fil_up(this.b_filter.value)
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<table className="search"><tbody><tr>
				<td className="min"><img src="filter.svg" alt="Type in the search bar to filter" /></td>
				<td><input 
					type="text" 
					placeholder="Type to Filter" 
					ref={(val) => {this.b_filter = val}}
					onChange={this.filter_update.bind(this)}
					className="search-bar"
				/></td>
				</tr></tbody></table>
			</form>
		);
	}
}
export default Search;
