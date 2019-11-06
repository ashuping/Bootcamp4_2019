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
				<input 
					type="text" 
					placeholder="Type to Filter" 
					ref={(val) => {this.b_filter = val}}
					onChange={this.filter_update.bind(this)}
					className="search-bar"
				/>
			</form>
		);
	}
}
export default Search;
