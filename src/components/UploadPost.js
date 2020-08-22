import React from 'react';

function UploadPost() {
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
				<div className="up-f-inputs w-10/12 bg-blue-100 flex flex-col">
					<textarea
						id="post"
						class="up-f-i-textarea mt-1 block w-full text-base lg:text-lg sm:leading-5 pr-4 pt-2"
						placeholder="¿Qué estás pensando?"
						maxlength="280"
						required
					></textarea>
				</div>
			</form>
		</div>
	);
}

export default UploadPost;
