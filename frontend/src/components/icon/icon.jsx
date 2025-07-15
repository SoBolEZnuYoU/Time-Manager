import { COLOR } from '../../constants';
import styled from 'styled-components';

const IconContainer = ({ className, id, onClick, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	line-height: 0px;
	color: ${({ color = 'inherit' }) => color};
    transform: translateY(${({y = '0px'}) => y}) ;

	i {
		line-height: 85.72%;
	}

	&:hover {
		cursor: pointer;
		color: ${({ hover = COLOR.HOVER }) => hover};
	}
`;
