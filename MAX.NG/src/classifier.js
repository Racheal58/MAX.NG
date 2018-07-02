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
];

// this function calculates the student's age with the given date of birth in the array to get the student's age and sort it in ascending order
function processStudentsData(students = []) {
  return students
    .map(student => {
      student.age =
        new Date().getFullYear() - new Date(student.dob).getFullYear()

      return student
    })
    .sort((a, b) => a.age - b.age)
}

// this function allows students to join to the group and make sure they are not more than 3 in a group and their age difference is not more that 5
function studentCanJoinGroup(student, studentGroup = {
  members: []
}) {
  if (studentGroup.members.length >= 3) return false

  return !studentGroup.members.find(
    student2 => Math.abs(student.age - student2.age) > 5
  )
}

// this function initializes the variable groups to 0
function groupStudents(students) {
  const groups = {
    noOfGroups: 0
  }

  // this function adds students to a new group and take their details(name, age, and regNo) and picks out the oldest, the sum of their ages and makes the regNo an integer
  const addStudentToNewGroup = (student, key) => {
    groups[key] = {
      members: [{
        name: student.name,
        age: student.age
      }],
      oldest: student.age,
      sum: student.age,
      regNos: [student.regNo | 0]
    }
  }

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