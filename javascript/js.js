//this is a variable with 1 value
//var car= "volvo"

//this is an array

var fruit = ["apple", "orange", "banana"];

//this is the property we use to add a value to the end of our array
fruit.push ("kiwi")

//this is the property we use to log the browser console which we can access with inspect element
console.log({fruit})

//fruit .length finds the length of array

//this is the method to remove the last item of the array
fruit.pop()

//this is the method to remove an item from anywhere in an array
fruit.splice(0,1)
//removes apple. starts at 0, tells it to remove 1 item
fruit.splice(1,1)
//removes orange, starts at 1, removes 1 item

var student={
    lastName:"Cool",
    firstName:"Joe",
    id:"12345"
}

var fullName = student.lastName + ',' + student.firstName;

//concatenation is when we add two or more strings and/or variables together

"value" + "value" + "value" + {student}