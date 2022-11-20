//Part I

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];



  function getCarHonda(carInventory) {
    const number =  carInventory.findIndex(object => {
      return object.car_make === 'Honda'; 
    });
    return (`This is a ${carInventory[number].car_make} ${carInventory[number].car_model} from ${carInventory[number].car_year}`)
  }
  
//Part 2

  function sortCarInventoryByYear(carInventory) {
    const inventorySorted = carInventory.sort(function (x, y) {
      return x.car_year - y.car_year;
  });
  return inventorySorted
  }
