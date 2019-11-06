import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { data, filter } = this.props

		const sel_item = data.find(item => item.id === filter)

		if(sel_item){
			if(!sel_item.address) sel_item.address = 'Unknown'
			if(!sel_item.coordinates) sel_item.coordinates = {latitude: 'Unknown', longitude: 'Unknown'}
			if(!sel_item.coordinates.latitude) sel_item.coordinates.latitude = 'Unknown'
			if(!sel_item.coordinates.longitude) sel_item.coordinates.longitude = 'Unknown'
			return(
				<div>
					<h1>{sel_item.name}</h1>
					<h2>{sel_item.code}</h2>
					<table><tbody>
						<tr><th>Address</th><td>{sel_item.address}</td></tr>
						<tr><th>Latitude</th><td>{sel_item.coordinates.latitude}</td></tr>
						<tr><th>Longitude</th><td>{sel_item.coordinates.longitude}</td></tr>
					</tbody></table>
				</div>
			)
		}else{
			return (
				<div>
					<p>
						<i>Click on a name to view more information</i>
					</p>
				</div>
			)
		}
	}
}
export default ViewBuilding;
