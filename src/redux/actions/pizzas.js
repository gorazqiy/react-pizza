import axios from "axios";

export const setLoaded = (value) => ({
	type: 'SET_LOADED',
	payload: value,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
	dispatch(setLoaded(false))

	axios.get(`https://621510a4cdb9d09717ac4a98.mockapi.io/pizzas?${category !== null ? `category=${category}` : ''}&sortBy=${sortBy}&order=${sortBy === 'name' ? "asc" : "desc"}`)
		.then(({ data }) => {
			dispatch(setPizzas(data))
		})
}


export const setPizzas = (items) => ({
	type: 'SET_PIZZAS',
	payload: items,
})


