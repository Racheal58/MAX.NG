const inputs = [{
        name: 'Hendrick',
        dob: '1853-07-18T00:00:00.000Z',
        regNo: '041',
    },
    {
        name: 'Albert',
        dob: '1879-03-14T00:00:00.000Z',
        regNo: '033',
    },
    {
        name: 'Marie',
        dob: '1867-11-07T00:00:00.000Z',
        regNo: '024',
    },
    {
        name: 'Neils',
        dob: '1885-10-07T00:00:00.000Z',
        regNo: '02',
    },
    {
        name: 'Max',
        dob: '1858-04-23T00:00:00.000Z',
        regNo: '014',
    },
    {
        name: 'Erwin',
        dob: '1887-08-12T00:00:00.000Z',
        regNo: '09',
    },
    {
        name: 'Auguste',
        dob: '1884-01-28T00:00:00.000Z',
        regNo: '08',
    },
    {
        name: 'Karl',
        dob: '1901-12-05T00:00:00.000Z',
        regNo: '120',
    },
    {
        name: 'Louis', //
        dob: '1892-08-15T00:00:00.000Z',
        regNo: '022',
    },
    {
        name: 'Arthur',
        dob: '1892-09-10T00:00:00.000Z',
        regNo: '321',
    },
    {
        name: 'Paul',
        dob: '1902-08-08T00:00:00.000Z',
        regNo: '055',
    },
    {
        name: 'William',
        dob: '1890-03-31T00:00:00.000Z',
        regNo: '013',
    },
    {
        name: 'Owen',
        dob: '1879-04-26T00:00:00.000Z',
        regNo: '052',
    },
    {
        name: 'Martin',
        dob: '1871-02-15T00:00:00.000Z',
        regNo: '063',
    },
    {
        name: 'Guye',
        dob: '1866-10-15T00:00:00.000Z',
        regNo: '084',
    },
    {
        name: 'Charles',
        dob: '1868-02-14T00:00:00.000Z',
        regNo: '091',
    },
}];
function classifier(input) {
  // this function collects the data from the array and puts the students in different groups
  // else the if statement checks if there is an available to add a new student in if not adds the students to a new group
// the second else statement is to increment number of groups and add the student to a new group
  processStudentsData(inputs).forEach((student, index) => {
    if (index === 0) groups.noOfGroups++
    const key = `group${groups.noOfGroups}`

    if (studentCanJoinGroup(student, groups[key])) {
      if (!groups[key]) addStudentToNewGroup(student, key)
      else {
        groups[key].members.push({
          name: student.name,
          age: student.age
        })
        groups[key].oldest = Math.max(groups[key].oldest, student.age)
        groups[key].sum += student.age

        const newRegNo = student.regNo | 0

        groups[key].regNos = [newRegNo]
          .concat(groups[key].regNos)
          .sort((a, b) => a > b)
      }
    } else {
      const newKey = `group${++groups.noOfGroups}`

      addStudentToNewGroup(student, newKey)
    }
  })
// displays the content of each group
  console.log(JSON.stringify(groups))

}

// the group of students are generated from the arrray inputs
groupStudents(inputs)
}

module.exports = classifier;
