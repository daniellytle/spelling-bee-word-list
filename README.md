# spelling-bee-word-list

Utility for generating spelling bee game content (available letters and wordlist)

# usage

```javascript
import SpellingBee from 'spelling-bee-word-list

// Gets a random game by selecting 7 letter sets until one is found with at least 1 vowel
// and >20 valid words
const { letters, validWords } = SpellingBee().getRandomGame()

// Gets deterministic game for a given date by first selecting a 7 letter pangram then building
// a game from that letter set
const today = new Date()
const { letters, validWords } = SpellingBee().getGameForDate(today)
```