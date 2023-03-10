import React from 'react';
import Dashboard from './component/covid/Dashboard';
import { CovidProvider } from './contextApi/contexts/CovidContext';

function App() {
	return (
		<>
			<CovidProvider>
				<Dashboard />
			</CovidProvider>
		</>
	);
}

export default App;
