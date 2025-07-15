import { useDispatch } from 'react-redux';
import { Button } from '../../../../components';
import { COLOR } from '../../../../constants';
import { ProjectTask } from './components';
import { addProjectTaskAsync, closeModal, openInputModal } from '../../../../actions';
import { request } from '../../../../utils';
import styled from 'styled-components';

const ProjectTasksListContainer = ({ className, tasks, projectId }) => {
	const dispatch = useDispatch();
	const hasTasks = tasks.length > 0;

	const onCreateTask = () => {
		dispatch(
			openInputModal({
				onConfirm: (title) => {
					dispatch(addProjectTaskAsync(request, projectId, title));
					dispatch(closeModal);
				},
				onCancel: () => dispatch(closeModal),
			}),
		);
	};

	return (
		<div className={className}>
			<ul className="list">
				{hasTasks ? (
					tasks.map((task) => (
						<ProjectTask task={task} projectId={projectId} status={task.status} key={task.id} />
					))
				) : (
					<p>Задачи не найдены...</p>
				)}
			</ul>
			<Button width={'250px'} onClick={onCreateTask}>
				Создать задачу
			</Button>
		</div>
	);
};

export const ProjectTasksList = styled(ProjectTasksListContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid ${COLOR.DARK};
	height: 520px;

	& .list {
		width: 100%;
		height: 420px;
		padding: 30px 40px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	& p {
		margin-bottom: 20px;
	}
`;
