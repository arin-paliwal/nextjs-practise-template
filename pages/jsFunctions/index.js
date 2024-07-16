const page=()=>{
    const array=[1,2,3,4,5,6,7,8,9,10]
    // map function
    // map creates a new array by applying a function to each element of the original array.
    const doubled=array.map((item)=>item*2)
    console.log("Using Map",doubled)

    // reduce function
    // reduce executes a reducer function on each element of the array, resulting in a single output value.
    const sum=array.reduce((accumulator,currentValue)=>accumulator+currentValue)
    console.log("Using Reduce",sum)

    // filter function
    // filter creates a new array with all elements that pass the test implemented by the provided function.
    const events=array.filter(num=>num%2==0)
    console.log("Using Filter",events)

    // forEach function
    // forEach executes a provided function once for each array element. It does not return a new array.
    array.forEach((num)=>console.log(num-1))

    // find function
    // find returns the value of the first element in the array that satisfies the provided testing function.
    const even=array.find((num)=>num%2==0)
    console.log("Find Function",even)

    // some function
    // some tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.
    const hasEven=array.some(num=>num%2==0)
    console.log(hasEven)

    // every element
    // every tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.
    const hasEvens=array.some(num=>num%2==0)
    console.log(hasEvens)

    // sort function
    // sort sorts the elements of an array in place and returns the array. It can take a compare function to determine the sort order
    const sortedArray=[...array].sort((a,b)=>b-a)
    console.log(sortedArray)

    // slice function
    // slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    const newArray=array.slice(1,3)
    console.log(newArray)

    // splice function
    // splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    const newArray2=array.splice(2,1,6)
    console.log(newArray2)

    // includes function
    // includes determines whether an array includes a certain value among its entries, returning true or false.
    const hasThree=array.includes(5)
    console.log(hasThree)

    //concat
    //concat merges two or more arrays into a new array.
    const newArray3=array.concat([77,88,99])
    console.log(newArray3)

    return(
        <h1>JS Functions</h1>
    )
}
export default page