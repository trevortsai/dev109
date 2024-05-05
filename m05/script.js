var table; // Unit of table
table = prompt('Enter number for table:');
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (operator === 'multiplication') {
  // Do addition
  while (i < 11) {
    msg += i + ' * ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}
