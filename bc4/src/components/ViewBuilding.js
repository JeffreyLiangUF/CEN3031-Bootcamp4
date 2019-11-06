import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding, selected} = this.props
		const buildingInfo = data
		.filter(building => {return building.id === selectedBuilding})
		.map(listing => {
			var longitude = null
			var latitude = null
			if(listing.coordinates == null){
				latitude = 'N/A'
				longitude = 'N/A'
			}
			else {
				longitude = listing.coordinates.longitude
				latitude = listing.coordinates.latitude
			}

			return (
				<ul key={listing.id}>Coordinates: 
					<br/> Longitude: {longitude} 
					<br/> Latitude: {latitude} 
					<br/> Address: {listing.address}
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