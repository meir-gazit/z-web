import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setModalOpen } from '../../../store'

import { v4 as uuidv4 } from 'uuid'

import { IconButton, Button, Modal, Icon } from 'rsuite'
import Room from './Room'

export default function RoomOccupancy(){
	const [rooms, setRooms] = useState([])

	const state = useSelector((state) => state.room)
	const dispatch = useDispatch()
	
	const openModal = () => { dispatch(setModalOpen(true)) }
	const closeModal = () => { dispatch(setModalOpen(false)) }

	const addRoom = () => {
		rooms.length > 0 
		?  setRooms([ ... rooms, <Room roomNumber={rooms.length} removeItem={onRemoveItem} id={uuidv4()} />	]) 
		:  setRooms([	<Room roomNumber={rooms.length} removeItem={onRemoveItem} id={uuidv4()}/>	])
	}

	const onRemoveItem = i => {
		const tmpArray = [... rooms]		
		setRooms(rooms => {
		  const list = tmpArray.filter((item, j) => i !== j)
		  return list
		})
	  }

	  return (
		<>
		<IconButton appearance="ghost" onClick={openModal} icon={<Icon icon="star" />} size="lg"><p>{"2 מבוגרים"}</p></IconButton>
		{state.isModalOpen
			? createPortal(
				<div className='modal-container' dir='rtl'>
				<Modal backdrop={true} show={true} onHide={closeModal} style={{ height: '150%' }}>
					<div dir='rtl' style={{ height: '150%' }}>
						<Modal.Header>
							<p className='font-bold'>{'נא לבחור את כמות החדרים הנצרכת ומספר האורחים בכל חדר'}</p>
							<p>*{'ניתן להזמין עד 5 חדרים בהזמנה אחת'}</p>
						</Modal.Header>
						<Modal.Body>
						<div>
							<div className='roomsContainer'>
								{
									rooms.length > 0 ? [...rooms].map((room, index) => <div className='roomWrapper' key={index}>{room}<button type="button" onClick={() => onRemoveItem(index)}>{`ביטול החדר`}</button></div>) : null
								}
							</div>
							<div className="table-row">
								<div className="flex justify-center p-1">
									{
										rooms.length === 5
											? <p className={"bg-red-200 font-black text-red-900 pt-1 border border-red-900 border-solid text-center"} style={{ width: '277px', height: '36px' }}>{'ניתן להזמין עד 5 חדרים בהזמנה אחת'}</p>
											: <button onClick={addRoom} className={" rounded-md pt-1 text-center"} style={{ color: '#ffffff', backgroundColor: '#3498ff', fontWeight: 'normal', fontSize: '14px', width: '277px', height: '36px' }}> {rooms.length === 0 ? "הזמנת חדר" : "חדר נוסף"}</button>
									}
								</div>
							</div>
						</div>
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={closeModal} appearance='primary'>{'אישור'}</Button>
							<Button onClick={closeModal} appearance='subtle'>{'ביטול'}</Button>
						</Modal.Footer>
					</div>
				</Modal>
			</div>,
				document.body
		)
		: null}
		</>
	)
}
