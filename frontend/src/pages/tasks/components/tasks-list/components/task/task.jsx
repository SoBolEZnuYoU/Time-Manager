import { COLOR } from '../../../../../../constants';
import { transformDate } from '../../../../../../utils';
import styled from 'styled-components';

const TaskContainer = ({ className, id, title, createdAt }) => {
	const date = transformDate(createdAt);

	return (
		<li className={className}>
			<p className="title" id={id}>
				{title}
			</p>
			<p className="createdAt">{date}</p>
		</li>
	);
};

export const Task = styled(TaskContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 22px;
	color: ${COLOR.DARK};
	border-bottom: 1px solid ${COLOR.DARK};
	padding: 5px 0;

	& .title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 850px;
		padding: 5px 0 5px 15px;
	}

	& .createdAt {
		width: 100px;
		margin-right: 15px;
	}

	&:hover {
		cursor: pointer;
		background-color: ${COLOR.HOVER};
		color: ${COLOR.LIGHT};
		border-radius: 14px;
	}
`;
