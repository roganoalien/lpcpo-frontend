import React from 'react';

function CircularSvg({ color, circular }) {
	console.log(circular);
	return (
		<div className="circular-counter-holder">
			<div className="fixed-height flex items-center justify-center">
				<div className="svg-direct-parent">
					<svg
						className="circle-counter h-full w-full block"
						viewBox="0 0 30 30"
						height="100%"
						width="100%"
						// style={{ height: '50px', width: '50px', display: 'block' }}
						// style={{
						// 	left: '50%',
						// 	top: '50%',
						// 	transform: 'translate(-50%, -50%)'
						// }}
					>
						<circle
							className="arc-background"
							// cx="50%"
							// cy="50%"
							fill="none"
							strokeWidth="2"
							r="9"
							stroke="#e2e8f0"
							// r="90"
							// style={{
							// 	stroke: '#f1f1f1',
							// 	fill: 'none',
							// 	strokeWidth: 15,
							// 	transform:
							// 		'translate(100px, 100px) rotate(89.9deg)'
							// }}
						></circle>
						<circle
							className="arc"
							// cx="50%"
							// cy="50%"
							fill="none"
							strokeWidth="2"
							r="9"
							stroke={color}
							strokeLinecap="round"
							style={{
								strokeDashoffset: circular,
								strokeDasharray: 56.5487
							}}
							// r="90"
							// strokeDashoffset={circular}
							// strokeDasharray={565.487}
							// style={{
							// 	stroke: color,
							// 	strokeLinecap: 'round',
							// 	fill: 'none',
							// 	strokeWidth: 15,
							// 	transform:
							// 		'translate(100px, 100px) rotate(89.9deg)'
							// }}
						></circle>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default CircularSvg;
