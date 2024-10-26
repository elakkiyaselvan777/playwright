//palindrome
function palindrome(str) {
    let reversedStr=""
    for (i=str.length-1; i >= 0; i--) {
        reversedStr=reversedStr+str.charAt(i)
    }
    // console.log(reversedStr)
    if (str==reversedStr) {
        console.log(str+ ": is palindrome")
        return true
    } else {
        console.log(str+ ": is not palindrome")
        return false
    }
}
console.log(palindrome("elakkiyaselvan"))
console.log(palindrome("lol"))


//grade calculation
function gradeCalculation(mark){
    var grade;
    switch(true){
        case(mark<=100 && mark>=90):
        {
            grade="A"
            break;
        }
        case(mark<=89 && mark>=80):
        {
            grade="B"
            break;
        }
        case(mark<=79 && mark>=70):
        {
            grade="C"
            break;
        }
        case(mark<=69 && mark>=60):
        {
            grade="D"
            break;
        }
        case(mark<=59 && mark>=50):
        {
            grade="E"
            break;
        }
        case(mark<=49 && mark>=0):
        {
            grade="U"
            break;
        }
        default:
        {
            grade="Absent"
            break;
        }
    }
    console.log(grade)
}
    gradeCalculation(72)
    gradeCalculation(84)
    gradeCalculation(20)
    gradeCalculation("A")


//odd number
function oddNumber(startingNumber,endingNumber){
    for(i=startingNumber; i<=endingNumber; i++){
        if(i%2!=0){
            console.log("Odd Number is: "+i)
        }
    }
}
oddNumber(1,25)