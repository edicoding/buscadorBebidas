export const mostrarIngredientes = receta => {
	let ingredientes = []

	for (let i = 0; i < 16; i++) {
		if (receta[`strIngredient${i}`]) {
			ingredientes.push(
				<li key={`strIngredient${i}`}>
					{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
				</li>
			)
		}
	}
	return ingredientes
}
