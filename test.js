'use strict';
import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('Hello & "Ho" &amp;!');

	t.deepEqual(result, [
		{
			title: 'URI Coder',
			subtitle: 'Encode: Hello%20&%20%22Ho%22%20&amp;!',
			arg: 'Hello%20&%20%22Ho%22%20&amp;!',
			mods: {
				cmd: {
					subtitle: 'Decode: Hello & "Ho" &amp;!',
					arg: 'Hello & "Ho" &amp;!'
				}
			}
		},
		{
			title: 'URI Component Coder',
			subtitle: 'Encode: Hello%20%26%20%22Ho%22%20%26amp%3B!',
			arg: 'Hello%20%26%20%22Ho%22%20%26amp%3B!',
			mods: {
				cmd: {
					subtitle: 'Decode: Hello & "Ho" &amp;!',
					arg: 'Hello & "Ho" &amp;!'
				}
			}
		},
		{
			title: 'HTML Entities Coder',
			subtitle: 'Encode: Hello &amp; &quot;Ho&quot; &amp;amp;!',
			arg: 'Hello &amp; &quot;Ho&quot; &amp;amp;!',
			mods: {
				cmd: {
					subtitle: 'Decode: Hello & "Ho" &!',
					arg: 'Hello & "Ho" &!'
				}
			}
		},
		{
			title: 'Base64 Coder',
			subtitle: 'Encode: SGVsbG8gJiAiSG8iICZhbXA7IQ==',
			arg: 'SGVsbG8gJiAiSG8iICZhbXA7IQ==',
			mods: {
				cmd: {
					subtitle: 'Decode: \u001d�e�z\u001a�',
					arg: '\u001d�e�z\u001a�'
				}
			}
		}
	]);
});
