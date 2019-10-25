import React, { useState } from "react"
import api from "../../core/api"

const DetailsPage = ({ match }) => {
	const [product, setProduct] = useState([])

	const id = match.params.id
	console.log(match)

	const fetchProduct = async () => {
		try {
			const { data: product } = await api.get(`/products/${id}`)
			setProduct(product)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<pre>{JSON.stringify(product, null, 4)}</pre>

			<button onClick={fetchProduct}> Carregar</button>
		</div>
	)
}

export default DetailsPage
