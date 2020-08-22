import React, { useState } from 'react';
import CircularSvg from './CircularSvg';

function UploadPost() {
	const [post, setPost] = useState('');
	const [color, setColor] = useState('#4140ff');
	const [circular, setCirular] = useState(56.5487);

	const handleChange = (e) => {
		const actualLength = e.target.value.length;
		const percentage = (actualLength * 100) / 280;
		const similar = percentage / 100;
		console.log(percentage);
		const secondPercentage = 56.5487 * similar;
		setCirular(56.5487 - secondPercentage);
		setPost(e.target.value);
		if (percentage > 80 && color === '#4140ff') {
			setColor('#E91C30');
		} else if (percentage < 80 && color === '#e91c30') {
			setColor('#4140ff');
		}
	};

	return (
		<div className="upload-post pt-4 w-full flex flex-col">
			<h2 className="up-title text-xl font-black px-4 w-full border-b border-gray-200 pb-3">
				Subir post
			</h2>
			<form className="up-form flex pt-3">
				<div className="up-f-avatar w-2/12 flex items-start justify-center">
					<img
						className="rounded-full w-15 h-15 object-cover"
						src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
						alt="USER NAME"
					/>
				</div>
				<div className="up-f-inputs w-10/12 flex flex-col">
					<textarea
						id="post"
						name="post"
						className="up-f-i-textarea mt-1 block w-full text-base lg:text-lg sm:leading-5 pr-4 pt-2"
						placeholder="¿Qué estás pensando?"
						maxLength="280"
						onChange={handleChange}
						value={post}
						required
					></textarea>
					<CircularSvg circular={circular} color={color} />
					<div className="bottom-tools"></div>
				</div>
			</form>
		</div>
	);
}

export default UploadPost;
