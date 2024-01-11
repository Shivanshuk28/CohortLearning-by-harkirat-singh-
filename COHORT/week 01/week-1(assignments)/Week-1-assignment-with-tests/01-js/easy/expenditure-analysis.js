/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


const transactions=[
  {itemname:"glass",category:"household",price:100,timestamp:"10:15"},
  {itemname:"bottle",category:"household",price:200,timestamp:"09:50"},
  {itemname:"samosa",category:"food",price:50,time:"13:20"},
  {itemname:"ladoo",category:"food",price:90,time:"12:15"}
] 
// console.log(transactions[0]);
function calculateTotalSpentByCategory(transactions) {
  var spendestimates={};
  for(var i=0;i<transactions.length;i++){
    var t=transactions[i];
    if(spendestimates[t.category]){
      spendestimates[t.category]=spendestimates[t.category]+t.price;
    }
    else{
      spendestimates[t.category]=t.price;
    }

  }
  var keys=Object.keys(spendestimates);
  let ans=[];
  for(var i=0;i<keys.length;i++){
    var obj={
      category:keys[i],
      totalSpent:spendestimates[keys[i]]
    }
    ans.push(obj);
  }
  return ans;
}

calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
