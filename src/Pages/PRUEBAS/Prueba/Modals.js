import React from 'react'
import Modol from './Modol'
import { useModal } from './useModal'

export default function Modals() {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>

      <button onClick={openModal1}>Modal 1</button>
      <Modol isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi modal 1</p>
        <img src="https:placeimg.com/400/400/animals" alt="Animals" />
      </Modol>
      
      <button onClick={openModal2}>Modal 2</button>
      <Modol isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>lorem lorem lorem lorem</p>
        <img src="https:placeimg.com/400/400/nature" alt="Nature" />
      </Modol>
      
    </div>
  )
}
