'use strict';
import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('Hello & "Ho" &amp;!');

	t.deepEqual(result, [
		{
			title: 'URI Coder',
			subtitle: '[⌘ to decode] Encode: Hello%20&%20%22Ho%22%20&amp;!',
			arg: 'Hello%20&%20%22Ho%22%20&amp;!',
			mods: {
				cmd: {
					subtitle: '[⌘ to decode] Decode: Hello & "Ho" &amp;!',
					arg: 'Hello & "Ho" &amp;!'
				}
			}
		},
		{
			title: 'URI Component Coder',
			subtitle: '[⌘ to decode] Encode: Hello%20%26%20%22Ho%22%20%26amp%3B!',
			arg: 'Hello%20%26%20%22Ho%22%20%26amp%3B!',
			mods: {
				cmd: {
					subtitle: '[⌘ to decode] Decode: Hello & "Ho" &amp;!',
					arg: 'Hello & "Ho" &amp;!'
				}
			}
		},
		{
			title: 'HTML Entities Coder',
			subtitle: '[⌘ to decode] Encode: Hello &amp; &quot;Ho&quot; &amp;amp;!',
			arg: 'Hello &amp; &quot;Ho&quot; &amp;amp;!',
			mods: {
				cmd: {
					subtitle: '[⌘ to decode] Decode: Hello & "Ho" &!',
					arg: 'Hello & "Ho" &!'
				}
			}
		},
		{
			title: 'Base64 Coder',
			subtitle: '[⌘ to decode] Encode: SGVsbG8gJiAiSG8iICZhbXA7IQ==',
			arg: 'SGVsbG8gJiAiSG8iICZhbXA7IQ==',
			mods: {
				cmd: {
					subtitle: '[⌘ to decode] Decode: \u001d�e�z\u001a�',
					arg: '\u001d�e�z\u001a�'
				}
			}
		}
	]);
});
