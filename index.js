import wordlist from "./wordlists/twl06.js"
import pickRandom from "pick-random"

class SpellingBee {
  constructor() {
    let letters, validWords
    do {
      letters = this.getValidLetters()
      validWords = this.getAllApplicableWords(letters)
    } while (!this.isValidGame(validWords))
    return {
      letters,
      validWords,
    }
  }

  isValidGame(validWords) {
    return validWords.size > 20
  }

  getValidLetters() {
    const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"]
    let potentialLetters = pickRandom(ALPHABET, { count: 7 })
    while (
      potentialLetters.filter((x) => [..."aeiou"].includes(x)).length === 0
    ) {
      potentialLetters = pickRandom(ALPHABET, { count: 7 })
    }
    return potentialLetters
  }

  getAllApplicableWords(letters) {
    return new Set(
      wordlist.filter(
        (word) =>
          word.length > 3 &&
          word.split("").every((a) => letters.includes(a)) &&
          word.includes(letters[0])
      )
    )
  }
}

export { SpellingBee }
