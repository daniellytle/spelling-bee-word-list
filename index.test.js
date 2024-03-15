import test from "ava"
import { SpellingBee } from "./index.js"

test("getRandomGame game picks seven unique letters", (t) => {
  const { letters } = new SpellingBee().getRandomGame()
  t.is(letters.length, 7)
})

test("getRandomGame game picks at least one vowel", (t) => {
  const { letters } = new SpellingBee().getRandomGame()
  t.truthy(letters.some((letter) => ["aeiou".split("").includes(letter)]))
})

test("getRandomGame game has at least twenty valid words", (t) => {
  const { validWords } = new SpellingBee().getRandomGame()
  t.true(validWords.size > 20)
})

test("getGameForDate game picks seven unique letters", (t) => {
  const { letters } = new SpellingBee().getGameForDate(new Date())
  t.is(letters.length, 7)
})

test("getGameForDate game has at least twenty valid words", (t) => {
  const { validWords } = new SpellingBee().getGameForDate(new Date())
  t.true(validWords.size > 20)
})

test("getGameForDate returns a different game set after midnight in a timezone", (t) => {
  const oldDate = new Date(2024, 2, 13, 23, 0)
  const newDate = new Date(2024, 2, 14, 0, 0)
  const oldDateLetters = new SpellingBee().getGameForDate(oldDate).letters
  const newDateLetters = new SpellingBee().getGameForDate(newDate).letters
  t.true(oldDateLetters.toString() != newDateLetters.toString())
})
