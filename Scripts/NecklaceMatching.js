/*
    Name: Necklace Matching
    Link: https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/
    Description:
        Imagine a necklace with lettered beads that can slide along the string. Here's an example image.
        In this example, you could take the N off NICOLE and slide it around to the other end to make ICOLEN.
        Do it again to get COLENI, and so on. For the purpose of today's challenge,
        we'll say that the strings "nicole", "icolen", and "coleni" describe the same necklace.

        Generally, two strings describe the same necklace if you can remove some number of letters from the beginning of one,
        attach them to the end in their original ordering, and get the other string. Reordering the letters in some other way does not,
        in general, produce a string that describes the same necklace.

        Write a function that returns whether two strings describe the same necklace.
 */
var sameNecklace = function (input1, input2) {
    if (input1.length !== input2.length)
        return false;
    for (var i = 0; i <= input1.length; i++) {
        // Shift characters one at a time from front to back
        if (input1.substring(i, input1.length) + input1.substring(0, i) === input2)
            return true;
    }
    return false;
};
//# sourceMappingURL=NecklaceMatching.js.map