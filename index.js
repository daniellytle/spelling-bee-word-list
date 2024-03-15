import wordlist from "./wordlists/twl06.js"
import pickRandom from "pick-random"
import { differenceInDays } from "date-fns"

class SpellingBee {
  getRandomGame() {
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

  getGameForDate(date) {
    // find all pangrams
    const pangrams = wordlist.filter(
      (word) => new Set(word.split("")).size === 7
    )
    // get specific pangram for date
    const startDate = new Date(2000, 0, 1, 0, 0, 0);
    const index = differenceInDays(date, startDate);
    const letters = Array.from(new Set(pangrams[index % pangrams.length]))
    const validWords = new Set(wordlist.filter(
      (word) =>
        word.split("").every((a) => letters.includes(a)) &&
        word.includes(letters[0])
    ))
    return {
      letters,
      validWords,
    }
  }
}

export { SpellingBee }
