const fs = require('fs');
const path = require('path');
const readline = require('readline');


function countStudents(filePath) {
  // check if th e file exists and if it is a file
  if (!fs.existsSync(filePath) || !fs.lstatSync(filePath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(filePath, 'utf8').trim();
  const lines = data.split('\n');
  const header = lines[0].split(',');

  for (const line of students) {
    if (line.trim() === '') continue;

    const columns = line.split(',');

    if (columns.length < 4) {
      console.error('Skipping line due to incorrect format:', line);
      continue;
    }

    const firstname = columns[0];
    const field = columns[3].trim();

    if (!hashtable[field]) {
      hashtable[field] = [];
    }

    hashtable[field].push(firstname);
  }

  const totalStudents = students.length;

  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(hashtable)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
