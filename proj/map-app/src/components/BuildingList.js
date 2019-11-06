import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filter, sel_up, del_entry } = this.props

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
				    || directory.code.toLowerCase().indexOf(filter.toLowerCase()) !== -1
			}).map(directory => {
				return (
					<tr key={directory.id} >
						<div className="clickable" onClick={() => sel_up(directory.id)}>
						<td>{directory.code} </td>
						<td>{directory.name} </td>
						</div>
						<td className="del-button" onClick={() => del_entry(directory.id)}> (-) </td>
					</tr>
				)
			})

		return <div className="building-list">{buildingList}</div>
	}
}
export default BuilingList
