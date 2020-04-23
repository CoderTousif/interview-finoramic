const groupAnagrams = (strs) => {
    const map = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = [...strs[i]].sort().join('');
        if (map.has(sortedStr)) {
            // set key to sortedStr and push index of str as an element of the array to the map
            // {sortedStr: [prevIdx, i]}
            map.get(sortedStr).push(i + 1);
        } else {
            // {sortedStr: [i]}
            map.set(sortedStr, [i + 1]);
        }
    }
    return [...map.values()];
};

console.log(groupAnagrams(['cat', 'dog', 'god', 'tca']));
// console.log(
//     groupAnagrams([
//         'abcd',
//         'dcba',
//         'dcba',
//         'abcd',
//         'abcd',
//         'adbc',
//         'dabc',
//         'adcb',
//     ])
// );
