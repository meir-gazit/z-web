import React from "react"

export default function Room({ roomNumber, id }) {
	console.log({roomNumber})
	return (
		<div id={id} data={`room_${roomNumber}`} className="w-4/5 cursor-pointer border border-solid border-blue-500">
			<section name={`section_${roomNumber}`} key={Math.random(99999)}>
				<div key={Math.random(99999)} className="table-row">
					<div key={Math.random(99999)} className="table-cell p-1">{"\u00A0"}{'בחדר זה יתארחו'}{"\u00A0"}</div>
					<div key={Math.random(99999)} className="table-cell p-1 cursor-pointer">
						<select
							defaultValue={2}
							id={`adults_${Math.random(99999).toString()}`}
							className="cursor-pointer border border-solid border-blue-500"
							onChange={(e) => console.log(e.target.value)}
							key={Math.random(99999)}
						>
							<option label={0} value={0} />
							<option label={1} value={1} />
							<option label={2} value={2} />
							<option label={3} value={3} />
							<option label={4} value={4} />
							<option label={5} value={5} />
							<option label={6} value={6} />
						</select>
					</div>
					{"מבוגרים ו"}
					<div
						key={Math.random(99999)}
						id={Math.random(99999)}
						className="table-cell p-1 cursor-pointer"
					>
						<select
							defaultValue={0}
							id={`children_${Math.random(99999).toString()}`}
							className="cursor-pointer border border-solid border-blue-500"
							onChange={(e) => console.log(e.target.value)}
							key={Math.random(99999)}
						>
							<option label={0} value={0} />
							<option label={1} value={1} />
							<option label={2} value={2} />
							<option label={3} value={3} />
							<option label={4} value={4} />
							<option label={5} value={5} />
							<option label={6} value={6} />
						</select>
					</div>
					{"ילדים"}
					{"\u00A0"}
				</div>
			</section>
		</div>
	)
}
