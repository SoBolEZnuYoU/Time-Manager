import { Button } from '../button/button';
import styled from 'styled-components';
import { Input } from '../input/input';

const CreateSearchBlockContainer = ({
	className,
	onClick,
	type,
	searchPhrase,
	onChange,
}) => {
	const isTasks = type === 'tasks';
	return (
		<div className={className}>
			<Button type="button" width="250px" onClick={onClick}>
				Создать {isTasks ? 'задачу' : 'проект'}
			</Button>
			<Input
				placeholder={`Введите название ${isTasks ? 'задачи' : 'проекта'}`}
				value={searchPhrase}
				onChange={onChange}
				width="300px"
			/>
		</div>
	);
};

export const CreateSearchBlock = styled(CreateSearchBlockContainer)`
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;
