import { Box, TextField } from '@mui/material';

import * as appStyle_sx from '../../appHelper/appStyle/appStyle_sx';
import * as appText from '../../appHelper/appStaticText/staticText';

export default function SearchBar({ searchQuery, setSearchQuery }) {
	function handleSearchChange(event) {
		const { value } = event.target;
		setSearchQuery(value);
	}

	return (
		<Box sx={appStyle_sx.searchSection.mainContainer}>
			<TextField
				sx={{ width: '100%' }}
				type="text"
				label={appText.searchSection.label}
				variant="outlined"
				value={searchQuery}
				onChange={handleSearchChange}
			/>
		</Box>
	);
}
