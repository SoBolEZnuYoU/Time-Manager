import { COLOR } from '../../constants';
import styled from 'styled-components';

const ButtonContainer = ({ className, children, style, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '150px' }) => width};
	height: ${({ height = '50px' }) => height};
	border: 2px solid ${({ style }) => (style === 'light' ? COLOR.LIGHT : COLOR.DARK)};
	border-radius: 7px;
	background-color: ${({ style }) =>
		style === 'filled-dark' ? COLOR.DARK : 'transparent'};
	color: ${({ style }) =>
		style === 'light' || style === 'filled-dark' ? COLOR.LIGHT : COLOR.DARK};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-family: 'Roboto slab';
	cursor: pointer;

	&:hover {
		background-color: ${({ style }) =>
			style === 'filled-dark' || style === 'light' ? '#816959' : COLOR.ORANGE};
	}
`;
