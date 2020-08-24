import React, { Fragment } from 'react';
import Post from './Post';

function PostsWall() {
	return (
		<Fragment>
			<Post
				id={1234567890}
				avatar="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
				comments={5}
				hasLiked={false}
				hasMedia={false}
				likes={20}
				media={null}
				mediaType={null}
				name="Rodrigo García"
				role="admin"
				saves={5}
				time="2h"
				username="roganoalien"
			>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Veniam sit temporibus laudantium nobis beatae iste,
					voluptatum dolore consectetur velit eos officiis
					consequatur, esse explicabo cupiditate sint non eum
					accusamus corporis.
				</p>
			</Post>
		</Fragment>
	);
}

export default PostsWall;
