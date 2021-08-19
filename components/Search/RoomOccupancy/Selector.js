import React from 'react'
import Room from './Room'

export default function Selector() {
	state = {
		rooms: [],
		idx: 0
	}

	addRoom = () => {
		this.setState({ idx: this.state.idx + 1 }, () => {
			this.setState({ rooms: [... this.state.rooms, <Room roomNumber={this.state.idx - 1} removeItem={this.removeRoom} />] })
		})
	}

	removeRoom = (roomNumber) => {
		this.setState({ idx: this.state.idx - 1 })
		const tmpArray = [... this.state.rooms]
		this.setState({ rooms: tmpArray.filter((room) => { return room.props.roomNumber != roomNumber }) }, () => { console.log(this.state.rooms) })
	}
	const styleClassNames = 'bg-red-200 font-black text-red-900 pt-1 border border-red-900 border-solid text-center'
		return (
			<div>
				<div className='roomsContainer'>
					{
						[this.state.rooms].map((room, i) => <div className='roomWrapper' key={i}>{room}</div>)
					}
				</div>
				<div className="table-row">
					<div className="flex justify-center p-1">
						{
							this.state.rooms.length === 5
								? <p className={"bg-red-200 font-black text-red-900 pt-1 border border-red-900 border-solid text-center"} style={{ width: '277px', height: '36px' }}>{'ניתן להזמין עד 5 חדרים בהזמנה אחת'}</p>
								: <button onClick={this.addRoom} className={" rounded-md pt-1 text-center"} style={{ color: '#ffffff', backgroundColor: '#3498ff', fontWeight: 'normal', fontSize: '14px', width: '277px', height: '36px' }}> {this.state.rooms.length === 0 ? "הזמנת חדר" : "חדר נוסף"}</button>
						}
					</div>
				</div>
			</div>
		)
}