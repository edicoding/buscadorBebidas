import { createContext, useEffect, useState } from 'react'
import { obtenerCategorias } from '../api'

const CategoriasContext = createContext()

const CategoriasProvider = ({ children }) => {
	const [categorias, setCategorias] = useState([])

	useEffect(() => {
		obtenerCategorias().then(setCategorias)
	}, [])

	return (
		<CategoriasContext.Provider value={{ categorias }}>
			{children}
		</CategoriasContext.Provider>
	)
}

export { CategoriasProvider }

export default CategoriasContext
