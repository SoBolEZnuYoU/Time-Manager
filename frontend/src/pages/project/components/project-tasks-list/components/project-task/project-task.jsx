import { COLOR } from '../../../../../../constants';
import { useDispatch } from 'react-redux';
import {
	closeModal,
	editProjectTaskAsync,
	openInputModal,
	removeProjectTaskAsync,
} from '../../../../../../actions';
import { request } from '../../../../../../utils';
import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const ProjectTaskContainer = ({ className, projectId, task, status }) => {
	const dispatch = useDispatch();

	const onEditTask = () => {
		dispatch(
			openInputModal({
				text: task.title,
				onConfirm: (title) => {
					dispatch(editProjectTaskAsync(request, projectId, task.id, { title }));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onDeleteTask = () => {
		dispatch(
			openInputModal({
				question: 'Вы действительно хотите удалить задачу?',
				onConfirm: () => {
					dispatch(removeProjectTaskAsync(request, projectId, task.id));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onChangeTaskStatus = () => {
		dispatch(editProjectTaskAsync(request, projectId, task.id, { status: !status }));
	};

	return (
		<li className={className}>
			<p className="title">{task.title}</p>
			<div className="btn-box">
				<Icon id="fa-edit" size="32px;" y="6px" onClick={onEditTask} />
				<Icon
					id={status ? 'fa-times' : 'fa-check-square-o'}
					size="32px"
					y="6px"
					onClick={onChangeTaskStatus}
				/>
				<Icon id="fa-trash-o" size="33px;" y="2px" onClick={onDeleteTask} />
			</div>
		</li>
	);
};

export const ProjectTask = styled(ProjectTaskContainer)`
	width: 100%;
	padding: 10px 10px;
	border-bottom: 1px solid ${COLOR.DARK};
	background-color: ${({ status }) => (status ? '#a2fcbe' : '')};
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .title {
		margin: 0;
	}

	& .btn-box {
		display: flex;
		column-gap: 12px;
	}
`;
