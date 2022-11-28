
const obj = {
    payment_method : 'cod',
    weightinKgs : 100 ,
    billing : {
        first_name : 'John',
        last_name : 'Doe',
        address_1 : '969 Market',
        address_2 : '',
        city : 'San Francisco',
        state : 'CA',
        postcode : '94103',
        country : 'US',
    }, 
    orderPurchases : [
        {
            date : '2020-01-01',
            amount : 100,
        }, 
        {
            date : '2020-03-02',
            amount : 200,
        }, 
        {
            date : '2020-02-06',
            amount : 210,
        }
    ]
}


const fun = ()=>{
	let len = obj.orderPurchases.length;
  let  avgVal =0;
  let sum =0;
  
  // calculating total amount 
  for(let i=0;i<len;i++){
  sum += (obj.orderPurchases[i].amount);
  }
  // creating new date array 
  let dates= new Array();
  for(let i=0;i<len;i++){
    dates.push(obj.orderPurchases[i].date);
  }

  function dateComparison(a, b) {
    const date1 = new Date(a)
    const date2 = new Date(b)
    
    return date1 - date2;
}
// sorting date array
dates.sort(dateComparison);

  
  // code for finding age between two dates 
	var startDate = new Date(dates[0]);
	var endDate  = new Date(dates[len-1]);
	var difference=endDate.getTime() - startDate.getTime(); 
    

    let daydifference = difference / (1000*3600*24)
  let customorage = daydifference;
  
  avgVal = (sum  / len);
  
  let fullName = obj.billing.first_name + " " + obj.billing.last_name

  let fullAddress = obj.billing.address_1 +    obj.billing.address_2 +  ", "+ obj. billing.city + ", "+ obj.billing.state +" "+ obj.billing.postcode + ", " + obj.billing.country

  const obj2 ={
  	paymentMethod : obj.payment_method,
    name :fullName ,
    address : fullAddress ,
    weightinLbs : (obj.weightinKgs) / 2.2   ,
    customerAgeInDays: customorage ,
    customerRepeatFrequencyInDays:  customorage / len,
    avgOrderValue: avgVal ,
    firstOrderDate:dates[0] ,
    lastOrderDate: dates[len-1] ,   		
  }
  return obj2;
}
const obj3 = fun();
console.log(obj3);


// const expectedOutput = {
//     paymentMethod : 'cod',
//     name : 'John Doe',
//     address : '969 Market, San Francisco, CA 94103, US', 
//     weightinLbs : 0, 
//     customerAgeInDays : 0,
//     customerRepeatFrequencyInDays : 0,
//     avgOrderValue : 0 , 
//     firstOrderDate : '', 
//     lastOrderDate : '',
// }