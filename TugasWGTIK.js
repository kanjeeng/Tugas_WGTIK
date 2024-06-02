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
