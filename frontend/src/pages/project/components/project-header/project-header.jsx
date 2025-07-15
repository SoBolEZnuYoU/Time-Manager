import { H2, Icon } from '../../../../components';
import styled from 'styled-components';
import { request, transformDate, transformTime } from '../../../../utils';
import { useDispatch } from 'react-redux';
import {
	closeModal,
	editProjectAsync,
	openInputModal,
	removeProjectAsync,
} from '../../../../actions';
import { useNavigate } from 'react-router';

const ProjectHeaderContainer = ({ className, id, title, spendTime, createdAt }) => {
	const date = transformDate(createdAt);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onDeleteProject = () => {
		dispatch(
			openInputModal({
				question: 'Вы действительно хотите удаль проект?',
				onConfirm: () => {
					dispatch(removeProjectAsync(request, id));
					dispatch(closeModal);
					navigate('/projects');
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	const onEditTitle = () => {
		dispatch(
			openInputModal({
				text: title,
				onConfirm: (newTitle) => {
					dispatch(editProjectAsync(request, id, { title: newTitle }));
					dispatch(closeModal);
				},
				onCancel: () => {
					dispatch(closeModal);
				},
			}),
		);
	};

	return (
		<div className={className}>
			<div className="text-block">
				<H2>{title}</H2>
				<div className="info">
					<p>{date}</p>
					<p>В работе: {transformTime(spendTime)}</p>
				</div>
			</div>
			<div className="btn-box">
				<Icon id="fa-edit" size="39px" y="5px" onClick={onEditTitle} />
				<Icon id="fa-trash-o" size="40px" onClick={onDeleteProject} />
			</div>
		</div>
	);
};

export const ProjectHeader = styled(ProjectHeaderContainer)`
	padding: 30px 40px;
	display: flex;
	justify-content: space-between;
	align-items: start;

	& h2 {
		max-width: 850px;
		margin-bottom: 10px;
	}

	& .info {
		display: flex;
        column-gap: 100px;
	}

	& .btn-box {
		display: flex;
		column-gap: 20px;
	}
`;
