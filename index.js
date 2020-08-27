'use strict';
const alfy = require('alfy');
const he = require('he');

const uriCoder = (input, decode = false) => {
	let result = input;
	try {
		result = decode === false ? encodeURI(input) : decodeURI(input);
	} catch (err) {
		return input;
	}
	return result;
};

const uriComponentCoder = (input, decode = false) => {
	let result = input;
	try {
		result = decode === false ? encodeURIComponent(input) : decodeURIComponent(input);
	} catch (err) {
		return input;
	}
	return result;
};

const base64Coder = (input, decode = false) => {
	let result = input;
	try {
		result = decode === false ?
			Buffer.from(input).toString('base64') :
			Buffer.from(input, 'base64').toString();
	} catch (err) {
		return input;
	}
	return result;
};

const htmlEntitiesCoder = (input, decode = false) => {
	let result = input;
	try {
		result = decode === false ? he.encode(input, {
			useNamedReferences: true
		}) : he.decode(input, {isAttributeValue: true});
	} catch (err) {
		return input;
	}
	return result;
};

const setCoder = ({title, input, callback}) => ({
	title,
	subtitle: `Encode: ${callback(input)}`,
	arg: callback(input),
	mods: {
		cmd: {
			subtitle: `Decode: ${callback(input, true)}`,
			arg: callback(input, true)
		}
	}
});

alfy.output([
	setCoder({title: 'URI Coder', input: alfy.input, callback: uriCoder}),
	setCoder({title: 'URI Component Coder', input: alfy.input, callback: uriComponentCoder}),
	setCoder({title: 'HTML Entities Coder', input: alfy.input, callback: htmlEntitiesCoder}),
	setCoder({title: 'Base64 Coder', input: alfy.input, callback: base64Coder})
]);
