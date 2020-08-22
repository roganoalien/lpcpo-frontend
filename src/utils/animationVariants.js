export const variantsPage = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
};

export const variantsTitle = {
	initial: { opacity: 0, x: -5 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -5 }
};

export const variantsChild = {
	initial: { opacity: 0, y: 10 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.15
		}
	},
	exit: { opacity: 0, y: 0 }
};

export const variantsChildSecond = {
	initial: { opacity: 0, y: 10, height: 'auto' },
	animate: {
		opacity: 1,
		y: 0,
		height: 'auto',
		transition: {
			delay: 0.25
		}
	},
	exit: { opacity: 0, y: 0, height: 'auto' }
};
