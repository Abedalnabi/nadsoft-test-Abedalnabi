import ACTIONS from '../actions/CovidActions';

export const initialState = {
	globalStats: {},
	countryStats: [{ filtered: [], normal: [] }],
	searchQuery: '',
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_GLOBAL_STATS:
			return {
				...state,
				globalStats: payload,
			};

		case ACTIONS.SET_COUNTRY_STATS: {
			return {
				...state,
				countryStats: { ...state.countryStats, normal: payload },
			};
		}

		case ACTIONS.SET_SEARCH_QUERY: {
			const filteredData = state.countryStats?.normal.filter((country) =>
				country.Country.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				searchQuery: payload,
				countryStats: { ...state.countryStats, filtered: filteredData },
			};
		}

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
