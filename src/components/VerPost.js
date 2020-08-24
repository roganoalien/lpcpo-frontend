import React from 'react';
import { Link } from 'react-router-dom';

function VerPost({ id }) {
	return (
		<Link
			to={`/post/${id}`}
			className="rounded-full text-sm font-bold go-to-detail-post ml-4 transition duration-150"
		>
			ver post
		</Link>
	);
}

export default VerPost;
