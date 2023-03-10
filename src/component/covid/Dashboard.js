import { useEffect, useState } from 'react';
import { getStatusData } from '../../appHelper/appApi/covid';
import useCovidContext from '../../contextApi/contexts/CovidContext';

import * as appStyleSx from '../../appHelper/appStyle/appStyle_sx';
import * as appText from '../../appHelper/appStaticText/staticText';

import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';
import CountryStats from './CountryStats';
import GlobalStats from './GlobalStats';
import SearchBar from './SearchBar';

import { Box, Grid, Typography } from '@mui/material';

function Dashboard() {
	const {
		countryStats,
		globalStats,
		setGlobalStats,
		setCountryStats,
		searchQuery,
		setSearchQuery,
	} = useCovidContext();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const statusData = await getStatusData();
			setCountryStats(statusData.Countries);
			setGlobalStats(statusData.Global);
			if (statusData.code === 'ERR_BAD_REQUEST') {
				setError(
					'Something went wrong from covid API , I need to subscribe with them to make many requests, Please reload the page'
				);
			}
			setLoading(false);
		} catch (error) {
			console.log('error', error);
			console.log(error);
			setLoading(false);
			setError(error.message || 'Something went wrong');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) return <Loading />;

	if (error) return <ErrorMessage message={error} />;

	return (
		<Grid container sx={appStyleSx.dashboard.containerDashboard}>
			<Grid item sx={appStyleSx.dashboard.mainContainer} className="hi">
				<Typography variant="h4" sx={appStyleSx.dashboard.typography}>
					{appText.dashboard.containerDashboard}
				</Typography>
				<GlobalStats globalStats={globalStats} />
				<Box sx={appStyleSx.dashboard.tableContainer}>
					<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
					<CountryStats countryStats={countryStats} />
				</Box>
			</Grid>
		</Grid>
	);
}

export default Dashboard;
