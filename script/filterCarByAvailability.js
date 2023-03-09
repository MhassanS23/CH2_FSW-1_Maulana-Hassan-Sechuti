function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);
  // console.log(cars[1].available);
  // Tempat penampungan hasil
  const result = [];
  const panjangArray= cars.length;
  let i;

  // Tulis code-mu disini
  for (i=0; i<panjangArray; i++){
    if(cars[i].available === true){
      result.push(cars[i]);
    }
  }
  console.log(result)

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
