import { useSelector } from 'react-redux';
import { Task } from './components';
import { selectTasks } from '../../../../selectors';
import { COLOR } from '../../../../constants';
import styled from 'styled-components';

const TasksListContainer = ({ className, onClick }) => {
	const tasks = useSelector(selectTasks).tasks;

	const hasTasks = tasks.length > 0;

	return (
		<div className={className}>
			{hasTasks ? (
				<ul className="list" onClick={onClick}>
					{tasks.map(({ id, title, createdAt }) => (
						<Task title={title} createdAt={createdAt} key={id} id={id} />
					))}
				</ul>
			) : (
				<p className="message">Задачи не найдены</p>
			)}
		</div>
	);
};

export const TasksList = styled(TasksListContainer)`
	& .list {
		height: 650px;
		overflow-y: auto;
	}

	& .message {
		margin-top: 100px;
		text-align: center;
		font-size: 30px;
		color: ${COLOR.DARK};
	}
`;
