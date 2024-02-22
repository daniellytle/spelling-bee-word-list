import test from "ava"
import { SpellingBee } from "./index.js"

test("Game picks seven unique letters", (t) => {
  const { letters } = new SpellingBee()
  t.is(letters.length, 7)
})

test("Game picks at least one vowel", (t) => {
  const { letters } = new SpellingBee()
  t.truthy(letters.some((letter) => ["aeiou".split("").includes(letter)]))
})

test("Game has at least twenty valid words", (t) => {
  const { validWords } = new SpellingBee()
  t.true(validWords.size > 20)
})
