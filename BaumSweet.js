/*
 * From: https://www.reddit.com/r/dailyprogrammer/comments/7j33iv/20171211_challenge_344_easy_baumsweet_sequence/?st=jbqtr7qm&sh=bb74a6c8
 * Wikipedia Link: https://en.wikipedia.org/wiki/Baum%E2%80%93Sweet_sequence
 * Description: b(input) = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
 *              b(input) = 0 otherwise;
 */
const baumSweet = (input) => {
  if (typeof input !== 'number') return;
  if (input === 0) return 1;
  input = input.toString(2).split('1');
  for(let i = 0; i < input.length; i++){
    if (input[i].length % 2 !== 0) return 0;
  }
  return 1;
}
