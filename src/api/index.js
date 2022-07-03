import axios from 'axios'
import { URL_GET_CATEGORIES, GET_DRINK, GET_RECIPE } from '../urls'

export const obtenerCategorias = async () => {
    try {
        const { data: { drinks } } = await axios(URL_GET_CATEGORIES)

        return drinks
    } catch (error) {
        console.log(error)
    }
}

export const consultarBebida = async (datos) => {
    try {
        const { data: { drinks } } = await axios(`${GET_DRINK}?i=${datos.nombre}&c=${datos.categoria}`)

        return drinks
    } catch (error) {
        console.log(error)
    }
}

export const obtenerReceta = async id => {
    try {
        const { data: { drinks: [recipe] } } = await axios(`${GET_RECIPE}${id}`)

        return recipe
    } catch (error) {
        console.log(error)
    }
}