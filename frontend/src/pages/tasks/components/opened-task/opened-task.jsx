import { Icon } from '../../../../components';
import { COLOR } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeTask,
	openInputModal,
	removeTaskAsync,
	refreshTasks,
	closeModal,
	editTaskAsync,
	resetTaskData,
} from '../../../../actions';
import { request, transformTime } from '../../../../utils';
import { selectCurrentTask } from '../../../../selectors';
import styled from 'styled-components';

const OpenedTaskContainer = ({ className }) => {
	const dispatch = useDispatch();
	const task = useSelector(selectCurrentTask);

	const onDeleteTask = () => {
		dispatch(closeTask);
		dispatch(
			openInputModal({
				question: 'Вы действительно хотите удаль задачу?',
				onConfirm: () => {
					dispatch(removeTaskAsync(request, task.id));
					dispatch(refreshTasks);
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onOpenEditModal = () => {
		dispatch(closeTask);
		dispatch(
			openInputModal({
				text: task.title,
				onConfirm: (title) => {
					dispatch(editTaskAsync(request, task.id, { title }));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onBackClick = () => {
		dispatch(resetTaskData);
		dispatch(closeTask);
	};

	return (
		<div className={className}>
			<div className="task">
				<div className="header">
					<div className="align-left">
						<Icon id="fa-arrow-left" size="30px" onClick={onBackClick} />
						<p>В работе: {transformTime(task.spendTime)}</p>
					</div>
					<div className="align-right">
						<Icon id="fa-edit" size="30px" y="3px" onClick={onOpenEditModal} />
						<Icon id="fa-trash-o" size="30px" onClick={onDeleteTask} />
					</div>
				</div>
				<p>{task.title}</p>
			</div>
		</div>
	);
};

export const OpenedTask = styled(OpenedTaskContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	z-index: 100;
	backdrop-filter: blur(5px);

	& .task {
		margin-top: 20vh;
		border: 2px solid ${COLOR.DARK};
		border-radius: 14px;
		background-color: ${COLOR.LIGHT};
		width: 1000px;
		height: fit-content;
		min-height: 200px;
		padding: 20px 25px 50px;
		font-size: 24px;

		& .header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
			padding-bottom: 10px;
			border-bottom: 1px solid ${COLOR.DARK};

			& .align-left {
				display: flex;
				column-gap: 20px;
				font-weight: bold;
			}

			& .align-right {
				display: flex;
				gap: 10px;
			}
		}
		& p {
			max-height: 450px;
			overflow-y: auto;
		}
	}
`;
