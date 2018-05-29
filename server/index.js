const movies = require('./top-rated-movies-01.json');
const lodash = require('lodash');

const titles = lodash.map(movies, x => x.title + ' ' + x.imdbRating);
// console.log('titles', titles);


const user = {
    name: 'jin',
    dob: 'adsg',
    awesomeness: 'good',
    height: '555',
    children: [{
        name: 'zoobob',
        hairColor: 'black'
    }, {
        name: 'esssoth'
    }]
};


const u = lodash.pick(user, ['name', 'awesomeness']);
// console.log('---------u', u);

const hairColor = lodash.get(user, 'children[0].hairColor');
// console.log('-----hairColor', hairColor);

const moviesByYear = lodash.groupBy(movies, 'year');
// console.log('-----moviesByYear', moviesByYear)