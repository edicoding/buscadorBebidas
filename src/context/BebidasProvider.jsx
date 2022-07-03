import { createContext, useEffect, useState } from 'react'
import { consultarBebida, obtenerReceta } from '../api'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
	const [bebidas, setBebidas] = useState([])
	const [modal, setModal] = useState(false)
	const [bebidaId, setBebidaId] = useState(null)
	const [receta, setReceta] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const bebidasLS = JSON.parse(localStorage.getItem('bebidas')) || []
		setBebidas(bebidasLS)
	}, [])

	useEffect(() => {
		localStorage.setItem('bebidas', JSON.stringify(bebidas))
	}, [bebidas])

	useEffect(() => {
		if (!bebidaId) return
		obtenerReceta(bebidaId).then(receta => {
			setReceta(receta)
			setLoading(false)
		})
	}, [bebidaId])

	const handleModalClick = () => {
		setModal(!modal)
		setReceta({})
	}

	const handleBebidaIdClick = id => {
		setLoading(true)
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
				loading,
			}}
		>
			{children}
		</BebidasContext.Provider>
	)
}

export { BebidasProvider }

export default BebidasContext
