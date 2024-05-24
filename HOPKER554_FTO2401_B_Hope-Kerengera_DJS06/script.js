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

//3. Name Lengths

//4. Sorting

//5. Filtering Cape

//6. Finding "S"

//7. Creating Object Mapping

//ADVANCED EXERCISES//
