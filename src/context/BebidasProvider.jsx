import { createContext, useEffect, useState } from 'react'
import { consultarBebida, obtenerReceta } from '../api'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
	const [bebidas, setBebidas] = useState([])
	const [modal, setModal] = useState(false)
	const [bebidaId, setBebidaId] = useState(null)
	const [receta, setReceta] = useState({})
	const [cargando, setCargando] = useState(false)

	useEffect(() => {
		setCargando(true)
		if (!bebidaId) return
		obtenerReceta(bebidaId).then(setReceta)
		setCargando(false)
	}, [bebidaId])

	const handleModalClick = () => {
		setModal(!modal)
	}

	const handleBebidaIdClick = id => {
		setBebidaId(id)
	}

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
				cargando,
			}}
		>
			{children}
		</BebidasContext.Provider>
	)
}

export { BebidasProvider }

export default BebidasContext
