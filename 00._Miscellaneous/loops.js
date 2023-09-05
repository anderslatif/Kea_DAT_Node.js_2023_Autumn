// loop methods: They are all methods that help loop over a list
// forEach, map, filter, find, sort, reduce

const trolls = [
    { name: "anonymous", trollLevel: 9 },
    { name: "kroolleboolle", trollLevel: 22 },
    { name: "krolleline", trollLevel: 27 }
];

/*  task add 5 troll level to all the trolls
    return trolls, still
*/
// trolls.map((element, index, array) => console.log());

const upgradedTrolls = trolls.map((troll) => {
    troll.trollLevel += 5;
    return troll;
});

// console.log(upgradedTrolls);

const doubleUpgradedTrolls = trolls.map((troll) => ({
    name: troll.name,
    trollLevel: troll.trollLevel + 5
}));

// console.log(doubleUpgradedTrolls);

// task 2: Create a list of trolls where the troll level is an odd number

const oddNumberedTrolls = doubleUpgradedTrolls.filter((troll) => troll.trollLevel % 2 === 1);

console.log(oddNumberedTrolls);
