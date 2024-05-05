var table; // Unit of table
table = prompt('Enter number for table:');
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

while (i < 11) {
  msg += (i + ' * ' + table + ' = ') + (i * table) + '<br />';
  i++;
}
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
