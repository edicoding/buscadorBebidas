import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import { mostrarIngredientes } from '../helpers'

const ModalBebida = () => {
	const { modal, handleModalClick, receta, cargando } = useBebidas()

	return (
		!cargando && (
			<Modal show={modal} onHide={handleModalClick}>
				<Image
					src={receta.strDrinkThumb}
					alt={`Imagen receta ${receta.strDrink}`}
				/>
				<Modal.Header>
					<Modal.Title>{receta.strDrink}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='p-3'>
						<h2>Instrucciones</h2>
						{receta.strInstructions}
						<h2>Ingredientes y Cantidades</h2>
						{mostrarIngredientes(receta)}
					</div>
				</Modal.Body>
			</Modal>
		)
	)
}

export default ModalBebida
