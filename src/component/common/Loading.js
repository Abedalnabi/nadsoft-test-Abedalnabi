import { CircularProgress, Box } from '@mui/material';
import * as appStyleSx from '../../appHelper/appStyle/appStyle_sx';

export default function Loading() {
	return (
		<Box sx={appStyleSx.commonComponent.loading}>
			<CircularProgress />
		</Box>
	);
}
