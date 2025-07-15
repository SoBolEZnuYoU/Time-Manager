import { useState } from 'react';
import { Button } from '../../../../components';
import { SelectWindow } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentProject, selectCurrentTask } from '../../../../selectors';
import { COLOR } from '../../../../constants';
import { resetProjectData, resetTaskData } from '../../../../actions';
import styled from 'styled-components';

const SelectBlockContainer = ({ className, access }) => {
	const [selectWindow, setSelectWindow] = useState(false);
	const [typeOfWindow, setTypeOfWindow] = useState('');
	const currentProject = useSelector(selectCurrentProject);
	const currentTask = useSelector(selectCurrentTask);

	const dispatch = useDispatch();

	const selectedItem =
		typeOfWindow === 'projects'
			? currentProject
			: typeOfWindow === 'tasks'
				? currentTask
				: null;

	const onSelectProject = () => {
		setSelectWindow(true);
		setTypeOfWindow('projects');
		dispatch(resetTaskData);
	};
	const onSelectTask = () => {
		setSelectWindow(true);
		setTypeOfWindow('tasks');
		dispatch(resetProjectData);
	};

	return (
		<div className={className}>
			{selectWindow ? (
				<SelectWindow
					type={typeOfWindow}
					setSelectWindow={setSelectWindow}
					setTypeOfWindow={setTypeOfWindow}
				/>
			) : (
				<>
					{selectedItem && <div className="selected-item">{selectedItem.title}</div>}
					{access && (
						<>
							<Button width="300px" style="filled-dark" onClick={onSelectProject}>
								Выбрать проект
							</Button>
							<Button width="300px" onClick={onSelectTask}>
								Выбрать задачу
							</Button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export const SelectBlock = styled(SelectBlockContainer)`
	height: 55%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin: 0 auto;
	padding: 30px 0 0;

	& .selected-item {
		font-size: 30px;
		margin: 30px 0 50px;
		max-width: 1000px;
		color: ${COLOR.DARK};
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
	}
`;
