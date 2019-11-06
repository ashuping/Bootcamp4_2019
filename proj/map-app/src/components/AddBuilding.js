import React from 'react';

class AddBuilding extends React.Component {

	on_submit(){
		this.props.submit_callback({
			code: this.lm_code.value,
			name: this.lm_name.value,
			address: this.lm_addr.value,
			coordinates: {
				latitude: this.lm_lat.value,
				longitude: this.lm_lon.value
			}
		})
		this.props.close_callback()
	}

	render() {
		//console.log('This is my directory file', this.props.data);

		var classes = "add-dialog"
		if(this.props.hidden) classes = classes + " hidden"

		return(
			<form
				className={classes}
			>
				<table className="add-dialog-header no-clickable-bottom"><tbody>
					<tr><th>Add new building</th><td 
						className="clickable" 
						onClick={() => this.props.close_callback()}>
							<div><img className="cancel-btn" src="x-circle.svg" alt="cancel"/></div>
					</td></tr>
				</tbody></table>
				<table className="add-dialog-body"><tbody>
					<tr>
						<th>Name</th>
						<td><input 
							type="text" 
							placeholder="Landmark name"
							ref={(val) => {this.lm_name = val}}
						>
						</input></td>
					</tr>
					<tr>
						<th>Code</th>
						<td><input 
							type="text" 
							placeholder="Building code"
							ref={(val) => {this.lm_code = val}}
						>
						</input></td>
					</tr>
					<tr>
						<th>Address</th>
						<td><input 
							type="text" 
							placeholder="Landmark address"
							ref={(val) => {this.lm_addr = val}}
						>
						</input></td>
					</tr>
					<tr>
						<th>Latitude</th>
						<td><input 
							type="text" 
							placeholder="Landmark latitude"
							ref={(val) => {this.lm_lat = val}}
						>
						</input></td>
					</tr>
					<tr>
						<th>Longitude</th>
						<td><input 
							type="text" 
							placeholder="Landmark longitude"
							ref={(val) => {this.lm_lon = val}}
						>
						</input></td>
					</tr>
				</tbody></table>
				<div className="submit-button clickable" onClick={() => this.on_submit()}><div><img src="plus-square.svg" alt="Add new building" /> Add</div></div>
			</form>
		)

		/*const { data, filter, sel_up } = this.props

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
				    || directory.code.toLowerCase().indexOf(filter.toLowerCase()) !== -1
			}).map(directory => {
				return (
					<tr key={directory.id} onClick={() => sel_up(directory.id)}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				)
			})

		return <div>{buildingList}</div>*/
	}
}
export default AddBuilding
