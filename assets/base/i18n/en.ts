
const win = window as any;

export const languages = {
	defaultText: 'Text content',
	confirm: 'Confirm',
	cancel: 'Cancel',
	race: 'RACE',
	garage: 'GARAGE',
	buy: 'BUY'
};

if (!win.languages) {
	win.languages = {};
}

win.languages.en = languages;
