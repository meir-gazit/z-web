import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import  searchContext from '../../../context/SearchContext.js'
import { v4 as uuidv4 } from 'uuid'

import { IconButton, Button, Modal, Icon } from 'rsuite'
import Room from './Room'

export default function RoomOccupancy() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { initRooms, addRoom, removeRoom, roomsAmount, getRooms } = useContext(searchContext)

	const openModal = () => { 
		initRooms()
		setIsModalOpen(true)
	}
	const closeModal = () => { setIsModalOpen(false) }
	
	const add = () => { addRoom(<Room roomNumber={roomsAmount()} id={uuidv4()} adultDefaultValue={2} childsDefaultValue={0} />) }
	const remove = id => { removeRoom(id) }

	return (
		<>
			<IconButton appearance="ghost" onClick={openModal} icon={<Icon icon="star" />} size="lg"><p>{"2 מבוגרים"}</p></IconButton>
			
			{isModalOpen
				?	createPortal(
					
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
													roomsAmount() > 0 ? getRooms().map((room, index) => <div className='roomWrapper' key={index}><div className='flex-nowrap items-center justify-items-center'>{room}<button type="button" onClick={() => remove(room.props.id)}>{`ביטול החדר`}</button></div></div>) : <div>{'הוסף חדר'}</div>
												}
											</div>
											<div className="table-row">
												<div className="flex justify-center p-1">
													{
														roomsAmount() === 5
															? <p className={"bg-red-200 font-black text-red-900 pt-1 border border-red-900 border-solid text-center"} style={{ width: '277px', height: '36px' }}>{'ניתן להזמין עד 5 חדרים בהזמנה אחת'}</p>
															: <button onClick={add} className={" rounded-md pt-1 text-center"} style={{ color: '#ffffff', backgroundColor: '#3498ff', fontWeight: 'normal', fontSize: '14px', width: '277px', height: '36px' }}> {roomsAmount() === 0 ? "הזמנת חדר" : "חדר נוסף"}</button>
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
