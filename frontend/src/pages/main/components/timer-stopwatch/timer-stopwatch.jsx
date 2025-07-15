import { COLOR } from '../../../../constants';
import { Button, Icon } from '../../../../components';
import { useEffect, useState } from 'react';
import { FormModeSelect, TimerInputs } from './components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCurrentProject,
	selectCurrentTask,
	selectWatchState,
} from '../../../../selectors';
import {
	editProjectAsync,
	editTaskAsync,
	setIsRunning,
	setMinutes,
	setSeconds,
} from '../../../../actions';
import { request } from '../../../../utils';
import styled from 'styled-components';

const TimerStopwatchContainer = ({ className }) => {
	const [startTime, setStartTime] = useState(() => {
		const savedTime = sessionStorage.getItem('startTime');
		return savedTime ? Number(savedTime) : 0;
	});

	const mode = useSelector(selectWatchState).mode;
	const seconds = useSelector(selectWatchState).seconds;
	const minutes = useSelector(selectWatchState).minutes;
	const isRunning = useSelector(selectWatchState).isRunning;

	const currentProject = useSelector(selectCurrentProject);
	const currentTask = useSelector(selectCurrentTask);

	const dispatch = useDispatch();

	useEffect(() => {
		let interval = null;

		if (isRunning && mode === 'timer' && (seconds >= 0 || minutes >= 0)) {
			interval = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(interval);
						dispatch(setIsRunning(false));
					} else {
						dispatch(setMinutes(minutes - 1));
						dispatch(setSeconds(59));
					}
				} else {
					dispatch(setSeconds(seconds - 1));
				}
			}, 1000);
		} else if (isRunning && mode === 'stopwatch') {
			interval = setInterval(() => {
				dispatch(setSeconds(Math.trunc(Date.now() / 1000) - startTime));
			}, 1000);
		} else if (!isRunning && seconds === 0 && minutes === 0) {
			clearInterval(interval);
			sessionStorage.removeItem('startTime');
		}

		return () => clearInterval(interval);
	}, [isRunning, seconds, minutes, mode]);

	const handleStart = () => {
		setStartTime(Math.floor(Date.now() / 1000));
		sessionStorage.setItem('startTime', Math.trunc(Date.now() / 1000));
		dispatch(setIsRunning(true));
	};

	const handleStop = () => {
		if (currentProject.id) {
			dispatch(
				editProjectAsync(request, currentProject.id, {
					spendTime: currentProject?.spendTime + seconds,
				}),
			);
		} else if (currentTask.id) {
			dispatch(
				editTaskAsync(request, currentTask.id, {
					spendTime: currentTask?.spendTime + seconds,
				}),
			);
		}
		dispatch(setIsRunning(false));
		dispatch(setSeconds(0));
		dispatch(setMinutes(0));
	};

	const handleReset = () => {
		dispatch(setIsRunning(false));
		dispatch(setSeconds(0));
		dispatch(setMinutes(0));
	};

	return (
		<div className={className}>
			<FormModeSelect mode={mode} />
			{mode === 'timer' && isRunning === false && (
				<TimerInputs minutes={minutes} seconds={seconds} />
			)}
			<p>
				{mode === 'stopwatch'
					? String(Math.floor(seconds / 60)).padStart(2, '0')
					: String(minutes).padStart(2, '0')}
				:{String(seconds % 60).padStart(2, '0')}
			</p>
			<div className="btn-box">
				<Icon id="fa-play-circle-o" size="80px" onClick={handleStart} />
				<Icon id="fa-stop-circle-o" size="80px" onClick={handleStop} />
				<Button style="filled-dark" onClick={handleReset}>
					Сброс
				</Button>
			</div>
		</div>
	);
};

export const TimerStopwatch = styled(TimerStopwatchContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 45%;
	width: 100%;

	color: ${COLOR.DARK};
	border-bottom: 2px solid ${COLOR.DARK};
	padding-block: 30px;

	& form {
		display: flex;
		line-height: 22px;
		column-gap: 20px;
		font-size: 20px;
	}

	& p {
		font-size: 150px;
		line-height: 140px;
		width: 365px;
	}

	& .btn-box {
		display: flex;
		align-items: end;
		column-gap: 15px;
	}
`;
