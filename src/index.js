const regex = /\S.*?(\.|\?|\!)"?(?=\s|$)/g;
const punctuationRegex = /[^0-9a-z ]/gi;

function removePunctuationFromText(sentence) {
	return sentence.replace(punctuationRegex, '');
}

function getSentences(string, options = { removePunctuation: false }) {
	if (typeof string === 'string' || string instanceof String) {
		const { removePunctuation } = options;
		const result = string.match(regex);
		if (!result || !result.length) {
			const initial = removePunctuation ?
				removePunctuationFromText(string) :
				string;
			return [initial];
		}
		return removePunctuation ?
			result.map(removePunctuationFromText) :
			result;
	} else {
		return [];
	}
}

export default {
	getSentences,
}