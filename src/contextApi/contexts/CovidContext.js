import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/CovidReducer';
import ACTIONS from '../actions/CovidActions';

const CovidContext = createContext();

export const CovidProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setGlobalStats = (globalData) => {
		dispatch({
			type: ACTIONS.SET_GLOBAL_STATS,
			payload: globalData,
		});
	};

	const setCountryStats = (countryData) => {
		dispatch({
			type: ACTIONS.SET_COUNTRY_STATS,
			payload: countryData,
		});
	};

	const setSearchQuery = (searchQuery) => {
		dispatch({
			type: ACTIONS.SET_SEARCH_QUERY,
			payload: searchQuery,
		});
	};

	const setRanking = (ranking) => {
		dispatch({
			type: ACTIONS.SET_RANKING,
			payload: ranking,
		});
	};

	const value = {
		...state,
		setGlobalStats,
		setCountryStats,
		setSearchQuery,
		setRanking,
	};

	return <CovidContext.Provider value={value}>{children}</CovidContext.Provider>;
};

const useCovidContext = () => {
	const context = useContext(CovidContext);

	if (!context) {
		throw new Error('useCovidContext must be used within Parent and his child');
	}
	return context;
};

export default useCovidContext;
