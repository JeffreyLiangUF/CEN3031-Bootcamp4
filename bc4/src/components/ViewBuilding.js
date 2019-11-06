import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding, selected} = this.props
		var longitude;
		var latitude;
		const buildingInfo = data
		.filter(building => {return building.id === selectedBuilding})
		.map(listInfo => {
			if(listInfo.coordinates == null){
				latitude = 'N/A'
				longitude = 'N/A'
			}
			else {
				longitude = listInfo.coordinates.longitude
				latitude = listInfo.coordinates.latitude
			}

			return (
				<ul key={listInfo.id}>Coordinates: 
					<br/> <span className="tab">Longitude: {longitude} </span>
					<br/> <span className="tab">Latitude: {latitude} </span> 
					<br/> Address: {listInfo.address}
				</ul>
			);
		});

		return (
			<div className="card">
				{!selected
					? <i>Click on a name to view more information</i>
					: buildingInfo
				}
			</div>
		);
	}
}
export default ViewBuilding;