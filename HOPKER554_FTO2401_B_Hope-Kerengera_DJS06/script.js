// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

///////////////////////////////////////////////////EXERCISES////////////////////////////////////////////////////
//1. FOREACH BASICS

//log each province
provinces.forEach((province) => {
  console.log(province);
});
//log each name
names.forEach((name) => {
  console.log(name);
});
//logging each name with the correspending province based on the index in the format "Name (Province)"
names.forEach((name, index) => {
  console.log(name + `(${provinces[index]})`);
});

//2. UPPERCASE TRANSFORMATION
//map through provinces array making all provinces uppercase and store in new array
const uppercaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});
console.log(uppercaseProvinces);

//3. NAME LENGTHS
const nameLength = names.map((name) => {
  return name.length; //gets the length of each name
});
console.log(nameLength);

//4. SORTING
const sortedProvinces = provinces.sort(); //alphabetically sorts provinces
console.log(sortedProvinces);

//5. FILTERING CAPE
const filteredProvinces = provinces.filter((province) => {
  return !province.includes("Cape"); //remove provinces that include "Cape"
});
//log the count of remaining provinces
console.log(filteredProvinces.length);

//6. FINDING "S"
const findingS = names.map((name) => {
  //checking if names include the letter "S"
  if (name.includes("S")) return true;
  else return false;
});
console.log(findingS);

//7. Creating Object Mapping
const nameProvinceObject = names.reduce((acc, currentName, currentIndex) => {
  acc[currentName] = provinces[currentIndex]; //creating the object with key "currentName" and value "provinces[currentIndex]"
  return acc;
}, {}); //"{}" starts off as empty object
console.log(nameProvinceObject);
///////////////////////////////////////////////////ADVANCED EXERCISES////////////////////////////////////////////////////

//1. LOG PRODUCTS
console.log(
  products.map((eachProduct) => {
    //return new array with product names
    return eachProduct.product; //get the product name from EACH product
  })
);
