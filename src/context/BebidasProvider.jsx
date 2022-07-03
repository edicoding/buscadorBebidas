import { createContext, useEffect, useState } from 'react'
import { consultarBebida, obtenerReceta } from '../api'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
	const [bebidas, setBebidas] = useState([])
	const [modal, setModal] = useState(false)
	const [bebidaId, setBebidaId] = useState(null)
	const [receta, setReceta] = useState({})

	useEffect(() => {
		if (!bebidaId) return
		obtenerReceta(bebidaId).then(setReceta)
	}, [bebidaId])

	const handleModalClick = () => {
		setModal(!modal)
		setReceta({})
	}

	const handleBebidaIdClick = id => {
		setModal(true)
		setBebidaId(id)
	}

	// const handleModalClick = useCallback(() => {
	// 	setModal(modal => !modal)
	// }, [])

	// const handleBebidaIdClick = useCallback(id => {
	// 	setBebidaId(id)
	// }, [])

	return (
		<BebidasContext.Provider
			value={{
				consultarBebida,
				bebidas,
				setBebidas,
				handleModalClick,
				modal,
				handleBebidaIdClick,
				receta,
			}}
		>
			{children}
		</BebidasContext.Provider>
	)
}

export { BebidasProvider }

export default BebidasContext
