//? Regex : Regular Expression

const digit_regex = /\d/; // checks if data has any digit at any place
const char_regex = /\w/; // matches any character e.g a-z, A-Z, 0-9, _
const space_regex = /\s/; // matches white space at any place
const dot_regex = /./; // matches dot anywhere in data except new line : \n
const plus_regex = /\d+/; // matches one/more occurrences, here it will use digits
const stearic_regex = /\w*/; // matches zero or more occurrences, here it matches any character
const question_regex = /\d?/; // matches 0 or 1 occurrence in data
const eg = /colo?r/; // matches if the 'o' is present/absent in data, in both cases returns true
const minmax_regex = /\d{3,6}/; // matches consecutive occurrence should be at least min value & at most max value
const start_regex = /^any 125/; // matches the exact data at the start of the target data
const end_regex = /.com$/; // matches exact data at the end of target data

console.log(end_regex.test('any 125 is amazing vehicle.com'));