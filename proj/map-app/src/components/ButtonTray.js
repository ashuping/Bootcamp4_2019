import React from 'react'

function ButtonTray({add_building_callback}) {
	return(
	<div className="button-tray">
		<table><tbody>
			<tr>
				<td className="clickable" onClick={() => add_building_callback()}>
					<div>ADD</div>
				</td>
			</tr>
		</tbody></table>
	</div>
	)
}

export default ButtonTray
