import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filter, sel_up, del_entry, del_button_enabled } = this.props

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
				    || directory.code.toLowerCase().indexOf(filter.toLowerCase()) !== -1
			}).map(directory => {
				var del_button_class = "del-button"
				if(!del_button_enabled) del_button_class = del_button_class + " hidden"
				return (
					<tr key={directory.id} >
						<td>
							<div className="clickable building-entry" onClick={() => sel_up(directory.id)}>
								<div><b>{directory.code}:</b> {directory.name}</div>
							</div>
						</td>
						<td className={del_button_class} onClick={() => del_entry(directory.id)}>
							<img src="delete.svg" alt="delete item" />
						</td>
					</tr>
				)
			})

		return <div className="building-list">{buildingList}</div>
	}
}
export default BuilingList
