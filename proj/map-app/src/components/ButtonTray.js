import React from 'react'

function ButtonTray({add_building_callback, del_building_callback, add_mode, del_mode}) {
	var trash_text = "Enter delete mode"
	var trash_class = "delmode clickable"
	if(del_mode){
		trash_class = "delmode clickable active"
		trash_text = "Delete mode active. Click to deactivate."
	}
	return(
	<div className="button-tray">
		<table className="no-clickable-bottom"><tbody>
			<tr className="clickable" onClick={() => add_building_callback()}>
				<td><img className="add-btn" src="plus-square.svg" alt="Add a new building"/></td>
				<td>
					<div><p>Add a new buliding</p></div>
				</td>
			</tr>
			<tr className={trash_class} onClick={() => del_building_callback()}>
				<td><img className="del-btn" src="trash-2.svg" alt="Delete a building" /></td>
				<td>
					<div><p>{trash_text}</p></div>
				</td>
			</tr>
		</tbody></table>
	</div>
	)
}

export default ButtonTray
