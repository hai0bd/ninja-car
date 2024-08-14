
const win = window as any;

export const languages = {
	defaultText: 'Nội dung text',
	confirm: 'Xác nhận',
	cancel: 'Huỷ bỏ',
	race: 'ĐUA',
	garage: 'GARA',
	buy: 'MUA'
};

if (!win.languages) {
	win.languages = {};
}

win.languages.vi = languages;
