# string-to-sentences
Given a string, split it and return all sentences

* Install using "npm install string-to-sentences" or "yarn add string-to-sentences"

```javascript
import Sentences from 'string-to-sentences';

const text = 'I am sentence 1. I am sentence 2?';
// with punctuation
const sentences = Sentences.getSentences(text);
// results in ['I am sentence 1.', 'I am sentence 2?']

// without punctuation
const sentences = Sentences.getSentences(text, { removePunctuation: true });
// results in ['I am sentence 1', 'I am sentence 2']
```
