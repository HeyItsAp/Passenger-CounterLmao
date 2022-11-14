// THE DOM
    // Document Object Model (how you use JavaScript to modify documents)
        // Documents = HTML document (index.html)
        // Object = document = {Object = index.html}
        // Model = The html document and the javascript document compared.
// String = Strings are lines of text, stored in double quotes = "" or single quotes = ''.
   

   // 1. Create a variable, myAge, and set its value to your age
    // 2. Log the myAge variable the console
        // let myAge = 16
        // console.log(myAge)

    // 1. Create two variables, myAges and humanDogRatio (7)
    // 2. Mulitipy the two togesther and store the result in myDogAge
    // 3. Log myDogAge.
        
        // let myAge = 16
        // let humanDogRatio = 7
        // let myDogAge = myAge * humanDogRatio
        // console.log(myDogAge)

    // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
    // Decrease it down to 25, and then finally increase it to 70

        // let bonusPoints = 50
        // bonusPoints = bonusPoints + 50
        // bonusPoints = bonusPoints - 25
        // bonusPoints = bonusPoints - 5
        // console.log (bonusPoints)

    // Setting up the the race 🏎 🏎 🏎
    // +
    // Create a function (you decide the name) that logs out the number 42 to the console
    // Call/invoke the function
        
        // function telened() {
            //   console.log(5)
            //   console.log(4)
            //   console.log(3)
            //   console.log(2)
            //   console.log(42)
        
        // telened() 
    // Create a function that logs out the sum of all the lap times
        
        // let lap1 = 34
        // let lap2 = 33
        // let lap3 = 36

        // let thelaptotal = lap1 + lap2 + lap3
        
        // function laptotal () {
            // console.log (thelaptotal)
        //}
       

    // Create a function that increments the lapsCompleted variable with one
    // Run it three times
        
        // let lapsCompleted = 0

        // function newlap() {
            //lapsCompleted = lapsCompleted + 1
        //}
        //newlap()
        //newlap()
        //newlap()
        //console.log(lapsCompleted)


    
    
    // Create a variable, message, that stores the string: "You have tree new notifications"
        //let message = "You have tree new notifications"
        //console.log(username) 


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked


let count = 0
function increment() {
    count = count = count + 1
    countEl.textContent = count
}
    // change the count-el in the HTML to reflect the new count   
let countEl = document.getElementById("count-el") 
    // pass in arguments, (Get stuff to do with, that you modify)
        //camalCase: First letter is not capitalized but the first letter in the sceond word is.
    // 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
    // Create a function, save(), which logs out the count when it's called
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
function save() {
    let Container = count + " - "
    saveEl.textContent += Container
    countEl.textContent = 0
    count = 0

} 