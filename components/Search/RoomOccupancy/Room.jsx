import React, { useContext, useState } from 'react'
import searchContext from '../../../context/SearchContext.js'

export default function Room({ roomNumber, id }) {
	const { updateRoom } = useContext(searchContext)
	const [adults, setAdults] = useState(2)
	const [childs, setChilds] = useState(0)

	const getOptions = (startAt, amount) => {
		let items = []
		for (let i = startAt; i <= amount; i++) {
			items.push(<option key={i} label={i} value={i} />)
		}
		return items
	}

	const updateData = (id, type, value) => {
		switch (type) {
			case 'adults': setAdults(value)
			break

			case 'childs': setChilds(value)
			break
		}
		updateRoom(id, type, value)
	}

	return (
		<>
			<div id={id} data={`room_${roomNumber}`} className="w-4/5 cursor-pointer border border-solid border-blue-500">
				<section name={`section_${roomNumber}`} key={Math.random(99999)}>
					<div key={Math.random(99999)} className="table-row">
						<div key={Math.random(99999)} className="table-cell p-1">{"\u00A0"}{'בחדר '}{roomNumber + 1}{' יתארחו'}{"\u00A0"}</div>
						<div key={Math.random(99999)} className="table-cell p-1 cursor-pointer">
							<select
								defaultValue={adults}
								id={`adults_${Math.random(99999).toString()}`}
								className="cursor-pointer border border-solid border-blue-500"
								onChange={(e) => (updateData(id, 'adults', e.target.value))}
								key={Math.random(99999)}
							>
								{getOptions(1, 6)}
							</select>
						</div>
						{"מבוגרים ו"}
						<div
							key={Math.random(99999)}
							id={Math.random(99999)}
							className="table-cell p-1 cursor-pointer"
						>
							<select
								defaultValue={childs}
								id={`childs_${Math.random(99999).toString()}`}
								className="cursor-pointer border border-solid border-blue-500"
								onChange={(e) => (updateData(id, 'childs', e.target.value))}
								key={Math.random(99999)}
							>
								{getOptions(0, 4)}
							</select>
						</div>
						{"ילדים"}
						{"\u00A0"}
					</div>
				</section>
			</div>
		</>
	)
}
