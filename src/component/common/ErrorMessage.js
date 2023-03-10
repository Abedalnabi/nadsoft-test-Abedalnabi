import { Alert, Box } from '@mui/material';
import * as appStyleSx from '../../appHelper/appStyle/appStyle_sx';

export default function ErrorMessage({ message }) {
	return (
		<Box sx={appStyleSx.commonComponent.error}>
			<Alert severity="error">{message}</Alert>
		</Box>
	);
}
