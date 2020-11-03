const str = {'A': 1, 'B.A': 2, 'B.B': 4, 'CC.D.E': 3, 'CC.D.F': 5}
const obj = {
  'A': 1,
  'B': {
    'A': 2,
    'B': 4
  },
  'CC': {
    'D': {
      'E': 3,
      'F': 5
    }
  }
}

function test(param) {
  for(let key in param){
    const arr = key.split('.')
    let obj = {}
    // console.log(arr, param, param[key], 'arr')

    // if (arr.length === 1) {
    //   obj[arr[0]] = param[key]
    // } else {
      
    // }

    arr.forEach((i, index) => {
      if (Object.keys(obj).length === 1) {
        obj[arr[0]] = param[key]
      } else {
        if (index !== 0) {
          console.log(i, 'i')
        }
      }
    })
  }
}
test(str)