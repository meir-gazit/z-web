
export default function RoomReservor() {
	
	return (
		<div key={Math.random(99999)} className="table-row border-gray-400 border border-solid">
			<div key={Math.random(99999)} className="table-cell border-gray-400 border border-solid p-1">{'\u00A0'}1{'\u00A0'}</div>
			<div key={Math.random(99999)} className="table-cell border-gray-400 border border-solid p-1">
				<select defaultValue={2} id="adults" name="adults" onChange={e => console.log(e.target.value)} key={Math.random(99999)} >
					<option label={0} value={0} />
					<option label={1} value={1} />
					<option label={2} value={2} />
					<option label={3} value={3} />
					<option label={4} value={4} />
					<option label={5} value={5} />
					<option label={6} value={6} />
				</select>
			</div>
			<div key={Math.random(99999)} className="table-cell border-gray-400 border border-solid p-1">
				<select defaultValue={0} id="children" name="children" onChange={e => console.log(e.target.value)} key={Math.random(99999)} >
					<option label={0} value={0} />
					<option label={1} value={1} />
					<option label={2} value={2} />
					<option label={3} value={3} />
					<option label={4} value={4} />
					<option label={5} value={5} />
					<option label={6} value={6} />
				</select>
			</div>
		</div>
	)
}