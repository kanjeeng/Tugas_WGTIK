const strictedStreet = ['Gajah Mada', 'Hayam Wuruk', 'Sisingamangaraja', 'Panglima Polim', 'Fatmawati', 'Tomang Raya'];
const isOdd = (data)=>{
  return !(data % 2 == 0)
}
const getNumber= (plat)=>{
  return plat.split(' ')[1]
}
const isViolation = (actual, predicted)=>{
  return actual == predicted
}
function kenaRazia(date, data) {
  let dataViolation = []
  data.forEach(e => {
    e['tilang'] = 0
    if (isOdd(date) == !isOdd(getNumber(e.plat)) && e.type == 'Mobil') {
      strictedStreet.forEach(x=>{
        if (e.rute.some(street=> street == x)) {
          e.tilang++
        }
      })
    }
    
    if (e.tilang > 0) {
      dataViolation.push({name: e.name, tilang: e.tilang})
    }
  });
  return dataViolation
}

console.log(
    kenaRazia(27, [
      {
  
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
  
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya",  "Kemang"]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada" ]
      }
    ])
  );
  
  // [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]
