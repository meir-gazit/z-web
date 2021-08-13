//import React, { useState, useEffect } from 'react'
import { RoomReservor } from './RoomReservor'
import { Button } from 'rsuite'

export default function RoomOccupancy() {
	
	//const rooms = [RoomReservor()]

	// function addRoom() {
	// 	rooms.push(RoomReservor(++lastId))
	// }


	return (
		<div className="table border-gray-400 border border-solid m-1">
			<div className="table-row border-gray-400 border border-solid">
				<div className="table-cell border-gray-400 border border-solid p-1">{'חדר'}</div>
				<div className="table-cell border-gray-400 border border-solid p-1">{'מבוגרים'}</div>
				<div className="table-cell border-gray-400 border border-solid p-1">{'ילדים'}</div>
			</div>
			<div className="table-row border-gray-400 border border-solid">
				<div className="table-cell border-gray-400 border border-solid p-1">{'\u00A0'}1{'\u00A0'}</div>
				{rooms}
			</div>
			<div className="table-row border-gray-400 border border-solid">
				<div className="table-cell border-gray-400 border border-solid p-1">
					<Button appearance="primary">{"חדר נוסף"}</Button>
				</div>
			</div>
		</div>
	)
}