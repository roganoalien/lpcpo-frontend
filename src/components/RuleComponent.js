import React from 'react';

function RuleComponent({ children, number }) {
	return (
		<div className="rule-item w-full py-4 flex items-center justify-center border-b border-gray-300">
			<div className="left-side text-3xl font-bold text-gray-600 text-center w-1/5">
				{number}
			</div>
			<div className="right-side w-4/5 text-sm leading-tight pr-4">
				{children}
			</div>
		</div>
	);
}

export default RuleComponent;
