import React from 'react';
import { Link } from 'react-router-dom';
import Like from './Like';
import CommentBtn from './CommentBtn';
import VerPost from './VerPost';

function Post({
	avatar,
	children,
	comments,
	hasLiked,
	hasMedia,
	id,
	likes,
	media,
	mediaType,
	name,
	role,
	saves,
	time,
	username
}) {
	return (
		<div className="post-item w-full border-b border-gray-200 py-4 background-white hover:bg-gray-100 flex">
			<div className="pi-user-avatar w-2/12 flex items-start justify-center">
				<img
					className="rounded-full w-10 h-10 object-cover"
					src={avatar}
					alt={name}
				/>
			</div>
			<div className="pi-content w-10/12 flex flex-col">
				<div className="pi-c-user flex w-full items-center justify-start">
					<Link
						to={`/${username}`}
						className="flex items-center justify-start pi-c-u-link"
					>
						<p className="m-0 font-bold">{name}</p>
						{role === 'admin' && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-4 w-4 fill-current ml-2"
							>
								<path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z" />
							</svg>
						)}
						<p className="m-0 ml-2 font text-sm text-black text-opacity-50">
							@{username}
						</p>
					</Link>
					<span className="text-sm text-black text-opacity-25 ml-3">
						{time}
					</span>
				</div>
				<div className="pi-c-main w-full pr-4">{children}</div>
				<div className="pi-c-meta w-full flex items-center justify-start mt-2">
					<Like number={likes} hasLiked={hasLiked} />
					<CommentBtn number={comments} />
					<VerPost id={id} />
				</div>
			</div>
		</div>
	);
}

export default Post;
