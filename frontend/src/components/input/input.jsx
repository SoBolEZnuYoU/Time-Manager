import styled from 'styled-components';
import { COLOR } from '../../constants';

const InputContainer = ({ className, ...props }) => {
	return <input className={className} {...props}></input>;
};

export const Input = styled(InputContainer)`
	background-color: #fff;
	border: 2px solid ${COLOR.DARK};
	width: ${({ width = '100%' }) => width};
	padding: 7px 5px;
	border-radius: 7px;
	font-size: 20px;
	text-wrap: wrap;
`;
