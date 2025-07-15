import { ActivityTable, StatisticsBlock } from './components';
import styled from 'styled-components';

const AnalyticsContainer = ({ className }) => {
	return (
		<div className={className}>
			<ActivityTable />
			<StatisticsBlock type='projects' />
			<StatisticsBlock type='tasks' />
		</div>
	);
};

export const Analytics = styled(AnalyticsContainer)`
	height: 100%;
`;
