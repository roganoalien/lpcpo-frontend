import React, { Fragment } from 'react';
import UploadPost from '../../components/UploadPost';

import '../../sass/components/Home.scss';
import PostsWall from '../../components/PostsWall';

function Home() {
	return (
		<Fragment>
			<UploadPost />
			<PostsWall />
		</Fragment>
	);
}

export default Home;
