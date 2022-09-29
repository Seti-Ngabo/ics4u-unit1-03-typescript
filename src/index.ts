/**
 * The program tells the user how many minutes are required to
 * microwave a perticule type of food.
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// Constants
const sub = 60
const pizza = 45
const soup = 105
const maxTime = 60

let minTime = 0

// Input and output
const question = prompt('Are you heating sub, pizza, or soup?: ')

switch (question) {
  case 'sub':
    minTime = sub
    break
  case 'pizza':
    minTime = pizza
    break
  case 'soup':
    minTime = soup
    break
  default:
    console.log('Invalid Input.')
}

if (minTime !== 0) {
  const itemAmount = prompt(
    `How many ${String(question)}(s) are you cooking? (max:3): `
  )
  const itemAmountInt = parseInt(itemAmount)

  if (isNaN(itemAmountInt) || itemAmountInt > 3) {
    console.log('The maximum quantity of food is 3, try again.')
  } else {
    const overallTime = itemAmountInt * minTime
    console.log(
      `The total cook time is ${Math.floor(
        overallTime / maxTime
      )} minutes and ${overallTime % maxTime} seconds.`
    )
  }
}

console.log('\nDone.')
