import * as appColor from './appColor';

export const dashboard = {
	containerDashboard: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		padding: { md: '40px', xs: '20px' },
	},
	mainContainer: {
		width: { xs: '100%', md: '60%' },
	},
	tableContainer: {
		width: '100%',
	},
	typography: {
		padding: '20px',
		textAlign: 'center',
	},
};

export const globalListSection = {
	mainContainer: {
		padding: '5px',
	},
	itemContainer: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '10px',
		gap: '10px',
	},
	confirmedTypography: {
		color: appColor.App_Typography_CASES,
	},
	deathsTypography: {
		color: appColor.App_Typography_DEATHS,
	},
	recoveredTypography: {
		color: appColor.App_Typography_RECOVERED,
	},
};

export const searchSection = {
	mainContainer: {
		paddingTop: '20px',
		paddingBottom: '40px',
	},
};

export const commonComponent = {
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	error: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
};
