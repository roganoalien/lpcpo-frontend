import React from 'react';

function CommentBtn({ number }) {
	return (
		<div className="comment-event-item flex items-center justify-center cursor-pointer ml-2">
			<div className="svg-parent rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="h-5 w-5 fill-current"
				>
					<path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z" />
				</svg>
			</div>
			<p className="m-0 text-sm">{number}</p>
		</div>
	);
}

export default CommentBtn;
