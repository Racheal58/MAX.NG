const classifier = (inputi) => {
  // computational variables
  const obj = {};
  const studentGroups = [];
  // so it doesnt mutate original array
  const input = [];

  // creating new array to use for computation
  inputi.forEach((element) => {
    const olyr = new Date(element.dob);
    const oldyear = parseInt(olyr.getFullYear(), 10);
    const current = new Date();
    const curryear = parseInt(current.getFullYear(), 10);
    const age = curryear - oldyear;
    element.age = age;
    input.push(element);
  });

  // sort the array according to age
  input.sort((a, b) => a.age - b.age);

  // if the input array length is less than  1
  if (input.length === 0 || input === null) {
    return {
      noOfGroups: 0,
    };
  }
  // for if the input array is a single value array
  if (input.length === 1) {
    const newI = input;
    if (newI.length >= 3) {
      const newInput = newI.splice(0, 3);
      const inner = {
        members: [],
        oldest: 0,
        sum: 0,
        regNos: [],
      };
      // eslint-disable-next-line
      newInput.forEach(element => {
        const memberObject = {
          name: '',
          age: 0,
          dob: '',
          regNo: '',
        };
        // eslint-disable-next-line
        for (const [key, value] of Object.entries(element)) {
          switch (key) {
            // eslint-disable-next-line
            case 'dob':
              const olyr = new Date(value);
              const oldyear = parseInt(olyr.getFullYear());
              const current = new Date();
              const curryear = parseInt(current.getFullYear());
              const age = curryear - oldyear;
              memberObject.dob = value;
              inner.sum += age;
              if (inner.oldest >= age) {
                memberObject.age = age;
              } else {
                memberObject.age = age;
                inner.oldest = age;
              }
              break;
            case 'name':
              memberObject.name = value;
              break;
            case 'regNo':
              inner.regNos.push(value);
              memberObject.regNo = value;
              break;
            default:
              throw Error;
          }
        }
        inner.members.push(memberObject);
      });
      // To sort the regNos of a group
      inner.regNos.sort((a, b) => a - b);
      studentGroups.push(inner);
    }
    const {
      members, oldest, sum, regNos,
    } = studentGroups;
    return {
      group1: {
        members,
        oldest,
        sum,
        regNos,
      },
      noOfGroups: 1,
    };
  }

  // eslint-disable-next-line
  input.forEach(element => {
    // on first run
    if (Object.keys(obj).length === 0 || Object.keys(obj).length === undefined) {
      // after the first resolution of the entry
      // to hold the group
      const inner = {
        members: [],
        regNos: [],
      };
      // to hold  the  member of a group
      // eslint-disable-next-line
      inner.members.push(element);
      inner.regNos.push(parseInt(element.regNo, 10));
      obj.group1 = {
        members: inner.members,
        oldest: element.age,
        sum: element.age,
        regNos: inner.regNos,
      };
    } else {
      let size = Object.keys(obj).length;
      const newInner = obj[`group${size}`];
      if (newInner.members.length === 3) {
        const inner = {
          members: [],
          oldest: 0,
          sum: 0,
          regNos: [],
        };
        // eslint-disable-next-line
        for (const [key, value] of Object.entries(element)) {
          switch (key) {
            // eslint-disable-next-line
            case 'age':
              inner.sum += value;
              if (inner.oldest < value) {
                inner.oldest = value;
              }
              break;
            case 'regNo':
              inner.regNos.push(parseInt(value, 10));
              break;
            default:
              break;
          }
        }
        inner.members.push(element);
        size = parseInt(size, 10) + 1;
        obj[`group${size}`] = {
          members: inner.members,
          oldest: inner.oldest,
          sum: inner.sum,
          regNos: inner.regNos,
        };
      } else {
        // check the fist entry to see if its not filled up and if filled up create a new entry
        // after the first resolution of the entry
        // eslint-disable-next-line
        const test = newInner.members.length - 1;
        if (
          newInner.members[test].age <= element.age
          && element.age - newInner.members[test].age <= 5
        ) {
          // eslint-disable-next-line
          for (const [key, value] of Object.entries(element)) {
            switch (key) {
              // eslint-disable-next-line
              case 'age':
                newInner.sum += value;
                if (newInner.oldest < value) {
                  newInner.oldest = value;
                }
                break;
              case 'regNo':
                newInner.regNos.push(parseInt(value, 10));
                break;
              default:
                break;
            }
          }
          newInner.members.push(element);
          newInner.regNos.sort((a, b) => a - b);
        } else {
          const inner = {
            members: [],
            oldest: 0,
            sum: 0,
            regNos: [],
          };
          // eslint-disable-next-line
          for (const [key, value] of Object.entries(element)) {
            switch (key) {
              // eslint-disable-next-line
              case 'age':
                inner.sum += value;
                if (inner.oldest < value) {
                  inner.oldest = value;
                }
                break;
              case 'regNo':
                inner.regNos.push(parseInt(value, 10));
                break;
              default:
                break;
            }
          }
          inner.members.push(element);
          size += 1;
          obj[`group${size}`] = {
            members: inner.members,
            oldest: inner.oldest,
            sum: inner.sum,
            regNos: inner.regNos,
          };
        }
      }
    }
  });
  obj.noOfGroups = Object.keys(obj).length;
  return obj;
};

module.exports = classifier;
