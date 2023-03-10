import { Typography, Box } from '@mui/material';

import * as appStyle_sx from '../../appHelper/appStyle/appStyle_sx';
import * as appText from '../../appHelper/appStaticText/staticText';

import { formatNumberWithCommas } from '../../appHelper/appFunction/global';

export default function GlobalStats({ globalStats }) {
	return (
		<Box sx={appStyle_sx.globalListSection.mainContainer}>
			<Box sx={appStyle_sx.globalListSection.itemContainer}>
				<Typography variant="h5">{appText.globalListSection.coronavirusCases}</Typography>
				<Typography sx={appStyle_sx.globalListSection.confirmedTypography} variant="h5">
					{formatNumberWithCommas(globalStats?.TotalConfirmed)}
				</Typography>
			</Box>

			<Box sx={appStyle_sx.globalListSection.itemContainer}>
				<Typography variant="h5">{appText.globalListSection.deaths}</Typography>
				<Typography sx={appStyle_sx.globalListSection.deathsTypography} variant="h5">
					{formatNumberWithCommas(globalStats?.TotalDeaths)}
				</Typography>
			</Box>

			<Box sx={appStyle_sx.globalListSection.itemContainer}>
				<Typography variant="h5">{appText.globalListSection.recovered}</Typography>
				<Typography sx={appStyle_sx.globalListSection.recoveredTypography} variant="h5">
					{formatNumberWithCommas(globalStats?.TotalRecovered)}
				</Typography>
			</Box>
		</Box>
	);
}
