import React, { useState, Fragment } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';
import CircularSvg from './CircularSvg';

const lodash = require('lodash/array');

function UploadPost() {
	const [post, setPost] = useState('');
	const [color, setColor] = useState('#4140ff');
	const [circular, setCirular] = useState(56.5487);
	const [longPost, setLongPost] = useState(false);
	const [showEmoji, setShowEmoji] = useState(false);
	const [showGif, setShowGif] = useState(false);
	const [gifExist, setGifExist] = useState(false);
	const [gif, setGif] = useState({});
	const [imgArray, setImgArray] = useState([]);
	const [showImg, setShowImg] = useState(false);

	const handleChange = (e) => {
		const characterLimit = longPost ? 2000 : 280;
		const actualLength = e.target.value.length;
		const percentage = (actualLength * 100) / characterLimit;
		const similar = percentage / 100;
		const secondPercentage = 56.5487 * similar;
		setCirular(56.5487 - secondPercentage);
		setPost(e.target.value);
		if (percentage > 80 && color === '#4140ff') {
			setColor('#E91C30');
		} else if (percentage < 80 && color === '#E91C30') {
			setColor('#4140ff');
		}
	};

	const loadImgInArray = (file, name) => {
		setImgArray([
			...imgArray,
			{
				file,
				name
			}
		]);
	};

	const handleGif = (item) => {
		removeAllImages();
		setShowGif(false);
		setGif({
			name: item.title,
			file: item.images.original.url
		});
		setGifExist(true);
	};

	const handleImageInput = (e) => {
		const name = e.target.files[0].name;
		console.log('handleImageinput', name);
		const reader = new FileReader();
		reader.onload = function () {
			loadImgInArray(reader.result, name);
			if (!showImg) setShowImg(true);
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	const handleLong = () => {
		setShowEmoji(false);
		setShowGif(false);
		setLongPost(!longPost);
	};

	const handleEmoji = () => {
		setShowEmoji(!showEmoji);
		setShowGif(false);
	};

	const handleSelect = (emoji) => {
		console.log(emoji);
		setPost(post + emoji.native);
	};

	const hideOthers = () => {
		setShowGif(false);
		removeGif();
		setShowEmoji(false);
	};

	const removeGif = () => {
		setGifExist(false);
		setGif({});
	};

	const removeAllImages = () => {
		setShowImg(false);
		setImgArray([]);
	};

	const removeImg = (index) => {
		if (imgArray.length === 1) {
			setShowImg(false);
		}
		setImgArray(lodash.without(imgArray, imgArray[index]));
	};

	return (
		<div className="upload-post pt-4 w-full flex flex-col">
			<h2 className="up-title text-xl font-black px-4 w-full border-b border-gray-200 pb-3">
				Subir post
			</h2>
			<form className="up-form flex pt-3 border-b-8 border-gray-200">
				<div className="up-f-avatar w-2/12 flex items-start justify-center">
					<img
						className="rounded-full w-15 h-15 object-cover"
						src="https://pbs.twimg.com/profile_images/1275138309094866944/V4Uyvf-s_normal.jpg"
						alt="USER NAME"
					/>
				</div>
				<div className="up-f-inputs w-10/12 flex flex-col">
					{longPost && (
						<p className="looong-post m-0 text-sm w-full font-bold">
							Post largo
						</p>
					)}
					<TextareaAutosize
						id="post"
						name="post"
						className="up-f-i-textarea mt-1 block w-full text-base lg:text-lg sm:leading-5 pr-4 pt-2"
						placeholder="¿Qué estás pensando?"
						maxLength={longPost ? '2000' : '280'}
						onChange={handleChange}
						value={post}
						required
					></TextareaAutosize>
					{gifExist && (
						<div className="w-full image-preview-holder p-4 pl-0 flex items-center justify-center">
							<div className="iph-img-item w-full relative rounded-md overflow-hidden border border-gray-200">
								{/* <img src={gif.file} alt={gif.name} /> */}
								<img
									src={gif.file}
									alt={gif.name}
									className="iph-ii-img w-full object-contain h-full"
								/>
								<div
									className="iph-ii-remove-img"
									onClick={() => removeGif(0)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										className="fill-current h-6 w-6"
									>
										<path
											fillRule="evenodd"
											d="M13.707,12.293 C14.098,12.684 14.098,13.316 13.707,13.707 C13.512,13.902 13.256,14 13,14 C12.744,14 12.488,13.902 12.293,13.707 L10,11.414 L7.707,13.707 C7.512,13.902 7.256,14 7,14 C6.744,14 6.488,13.902 6.293,13.707 C5.902,13.316 5.902,12.684 6.293,12.293 L8.586,10 L6.293,7.707 C5.902,7.316 5.902,6.684 6.293,6.293 C6.684,5.902 7.316,5.902 7.707,6.293 L10,8.586 L12.293,6.293 C12.684,5.902 13.316,5.902 13.707,6.293 C14.098,6.684 14.098,7.316 13.707,7.707 L11.414,10 L13.707,12.293 Z M10,2 C5.582,2 2,5.582 2,10 C2,14.418 5.582,18 10,18 C14.418,18 18,14.418 18,10 C18,5.582 14.418,2 10,2 L10,2 Z"
										/>
									</svg>
								</div>
							</div>
						</div>
					)}
					{showImg && (
						<div
							className={`w-full image-preview-holder p-4 pl-0 flex flex-wrap items-center justify-start ${
								imgArray.length > 1 ? 'multiple-items' : ''
							}`}
						>
							{imgArray.length > 1 ? (
								<Fragment>
									{imgArray.map((item, index) => (
										<div
											key={index}
											className="iph-img-item w-1/4 relative rounded-md overflow-hidden border border-gray-200"
										>
											<img
												src={item.file}
												alt="to upload"
												className="iph-ii-img w-full object-cover h-full"
											/>
											<div
												className="iph-ii-remove-img"
												onClick={() => removeImg(index)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													className="fill-current h-6 w-6"
												>
													<path
														fillRule="evenodd"
														d="M13.707,12.293 C14.098,12.684 14.098,13.316 13.707,13.707 C13.512,13.902 13.256,14 13,14 C12.744,14 12.488,13.902 12.293,13.707 L10,11.414 L7.707,13.707 C7.512,13.902 7.256,14 7,14 C6.744,14 6.488,13.902 6.293,13.707 C5.902,13.316 5.902,12.684 6.293,12.293 L8.586,10 L6.293,7.707 C5.902,7.316 5.902,6.684 6.293,6.293 C6.684,5.902 7.316,5.902 7.707,6.293 L10,8.586 L12.293,6.293 C12.684,5.902 13.316,5.902 13.707,6.293 C14.098,6.684 14.098,7.316 13.707,7.707 L11.414,10 L13.707,12.293 Z M10,2 C5.582,2 2,5.582 2,10 C2,14.418 5.582,18 10,18 C14.418,18 18,14.418 18,10 C18,5.582 14.418,2 10,2 L10,2 Z"
													/>
												</svg>
											</div>
										</div>
									))}
								</Fragment>
							) : (
								<div className="iph-img-item w-full relative rounded-md overflow-hidden border border-gray-200">
									<img
										src={imgArray[0].file}
										alt="To Upload"
										className="iph-ii-img w-full object-cover h-full"
									/>
									<div
										className="iph-ii-remove-img"
										onClick={() => removeImg(0)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											className="fill-current h-6 w-6"
										>
											<path
												fillRule="evenodd"
												d="M13.707,12.293 C14.098,12.684 14.098,13.316 13.707,13.707 C13.512,13.902 13.256,14 13,14 C12.744,14 12.488,13.902 12.293,13.707 L10,11.414 L7.707,13.707 C7.512,13.902 7.256,14 7,14 C6.744,14 6.488,13.902 6.293,13.707 C5.902,13.316 5.902,12.684 6.293,12.293 L8.586,10 L6.293,7.707 C5.902,7.316 5.902,6.684 6.293,6.293 C6.684,5.902 7.316,5.902 7.707,6.293 L10,8.586 L12.293,6.293 C12.684,5.902 13.316,5.902 13.707,6.293 C14.098,6.684 14.098,7.316 13.707,7.707 L11.414,10 L13.707,12.293 Z M10,2 C5.582,2 2,5.582 2,10 C2,14.418 5.582,18 10,18 C14.418,18 18,14.418 18,10 C18,5.582 14.418,2 10,2 L10,2 Z"
											/>
										</svg>
									</div>
								</div>
							)}
						</div>
					)}
					<div className="bottom-tools flex justify-between border-t border-gray-200 py-4 mt-2 z-50">
						<div className="bt-other-tools flex items-center justify-start">
							<label
								onClick={hideOthers}
								htmlFor="fileInput"
								className="bt-ot-item cursor-pointer flex items-center rounded-full justify-center h-10 w-10"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="fill-current h-6 w-6"
								>
									<circle cx="7.499" cy="9.5" r="1.5" />
									<path d="M10.499 14L8.999 12 5.999 16 8.999 16 11.999 16 17.999 16 13.499 10z" />
									<path d="M19.999,4h-16c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C21.999,4.897,21.102,4,19.999,4z M3.999,18V6h16l0.002,12H3.999z" />
								</svg>
								<input
									onChange={handleImageInput}
									id="fileInput"
									name="fileInput"
									type="file"
									className="hidden"
									accept="image/*"
								/>
							</label>
							<div
								className={`bt-ot-item cursor-pointer flex items-center relative rounded-full justify-center h-10 w-10 ${
									showGif ? 'isActive' : ''
								}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="fill-current h-10 w-10"
									onClick={() => {
										setShowEmoji(false);
										setShowGif(!showGif);
									}}
								>
									<path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z" />
								</svg>
								{showGif && (
									<GiphySelect
										requestKey="YZhzo7gQEKtYZCE6Fa7CvflMDpZ1jUmW"
										placeholder="Buscar gif..."
										requestRating="r"
										onEntrySelect={handleGif}
										// onEntrySelect={}
									/>
								)}
							</div>
							<div
								onClick={handleEmoji}
								className={`bt-ot-item cursor-pointer flex items-center rounded-full justify-center h-10 w-10 relative ${
									showEmoji ? 'isActive' : ''
								}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="fill-current h-6 w-6"
									viewBox="0 0 24 24"
								>
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
								</svg>
								{showEmoji && (
									<Picker
										autoFocus={true}
										onSelect={handleSelect}
										native={true}
										style={{
											position: 'absolute',
											bottom: '0',
											left: '50%',
											transform: 'translate(-50%, 100%)',
											zIndex: '999'
										}}
										title="Selecciona un emoji"
										i18n={{
											search: 'Buscar emoji',
											categories: {
												search:
													'Resultados de búsqueda',
												recent: 'Recientes'
											}
										}}
									/>
								)}
							</div>
							<div
								onClick={handleLong}
								className={`bt-ot-item cursor-pointer flex items-center rounded-full justify-center h-10 w-10 ${
									longPost ? 'isActive' : ''
								}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="currentcolor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="3"
									viewBox="0 0 32 32"
									className="stroke-current h-5 w-5"
								>
									<path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
								</svg>
							</div>
							<div className="bt-ot-item disabled-item cursor-pointer flex items-center justify-center rounded-full h-10 w-10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2048 1792"
									className="fill-current h-6 w-6"
								>
									<path d="M640 896v512h-256v-512h256zm384-512v1024h-256v-1024h256zm1024 1152v128h-2048v-1536h128v1408h1920zm-640-896v768h-256v-768h256zm384-384v1152h-256v-1152h256z" />
								</svg>
							</div>
						</div>
						<div className="bt-submit-area flex items-center justify-between">
							<CircularSvg circular={circular} color={color} />
							<span className="inline-flex rounded-md shadow-sm ml-2 mr-4">
								<button
									type="button"
									className="bt-sa-upload-button inline-flex items-center px-4 py-2 border border-transparent text-base leading-4 font-medium rounded-full font-bold focus:outline-none focus:shadow-none transition ease-in-out duration-150"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										className="fill-current lg:-ml-1 lg:mr-2 h-6 w-6"
									>
										<path d="M25 4.03c-.765 0-1.517.3-2.094.876L13 14.78l-.22.22-.06.313-.69 3.5-.31 1.468 1.467-.31 3.5-.69.313-.06.22-.22 9.874-9.906c1.153-1.154 1.153-3.034 0-4.188-.577-.577-1.33-.875-2.094-.875zm0 1.94c.235 0 .464.12.688.343.446.446.446.928 0 1.375L16 17.374l-1.72.344.345-1.72 9.688-9.688c.223-.223.452-.343.687-.343zM4 8v20h20V14.812l-2 2V26H6V10h9.188l2-2H4z" />
									</svg>
									<span>Crear Post</span>
								</button>
							</span>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default UploadPost;
