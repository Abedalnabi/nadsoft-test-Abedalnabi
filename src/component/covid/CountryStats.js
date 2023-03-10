import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableSortLabel, TableBody } from '@mui/material';

import * as appText from '../../appHelper/appStaticText/staticText';

export default function CountryStats({ countryStats }) {
	const [sortOrder, setSortOrder] = useState('asc');

	function handleSortChange() {
		const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		setSortOrder(newSortOrder);
	}

	const listRender = countryStats.filtered || countryStats.normal;

	listRender?.sort((a, b) => {
		const aValue = a.Country.toLowerCase();
		const bValue = b.Country.toLowerCase();
		if (sortOrder === 'asc') return aValue.localeCompare(bValue);
		else return bValue.localeCompare(aValue);
	});

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>
						<TableSortLabel
							active={true}
							direction={sortOrder}
							onClick={handleSortChange}
						>
							{appText.tableSection.country}
						</TableSortLabel>
					</TableCell>
					<TableCell>{appText.tableSection.cases}</TableCell>
					<TableCell>{appText.tableSection.deaths}</TableCell>
					<TableCell>{appText.tableSection.recovered}</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{Array.isArray(listRender) &&
					listRender?.map((country) => (
						<TableRow key={country.CountryCode}>
							<TableCell>{country.Country}</TableCell>
							<TableCell>{country.TotalConfirmed}</TableCell>
							<TableCell>{country.TotalDeaths}</TableCell>
							<TableCell>{country.TotalRecovered}</TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
}
