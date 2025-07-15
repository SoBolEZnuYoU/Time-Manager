import { useDispatch } from 'react-redux';
import { Button, Icon } from '../../../../components';
import { COLOR } from '../../../../constants';
import { closeModal, editProjectAsync, openInputModal } from '../../../../actions';
import { request } from '../../../../utils';
import styled from 'styled-components';

const CommentContainer = ({ className, id, comment }) => {
	const hasComment = comment.length > 0;
	const dispatch = useDispatch();

	const onEditComment = () => {
		dispatch(
			openInputModal({
				text: comment,
				onConfirm: (newComment) => {
					dispatch(editProjectAsync(request, id, { comment: newComment }));
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
			<h4>Комментарии:</h4>
			{hasComment ? (
				<div className="content">
					<p>{comment}</p>
					<Icon id="fa-edit" size="40px" onClick={onEditComment} />
				</div>
			) : (
				<Button width="400px" height="60px" onClick={onEditComment}>
					Добавить комментарий
				</Button>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& h4 {
		padding: 10px 40px;
		margin-bottom: 20px;
		background-color: ${COLOR.DARK};
		color: ${COLOR.LIGHT};
	}

	& .content {
		padding: 0px 30px;
		display: flex;
		justify-content: space-between;
		column-gap: 50px;
		max-height: 200px;

		& p {
			white-space: pre;
			overflow-y: auto;
		}
	}

	& button {
		margin: 70px auto 0;
	}
`;
