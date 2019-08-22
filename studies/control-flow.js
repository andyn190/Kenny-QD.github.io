/**
* Control-flow
*
* Control-flow is the order of executing statements in the script with in computer.
* The script uses conditional structures called if, else if, else statements. So that
* codes can execute depending on the condition given to the statement.
* 
*
*/

/**
 * Definitions:
 * 
 * If statement: specifies a block of code to be executed, if the condition is true
 * Else if: specifies a new condition onto the code block, if the first condition is false
 * Else: specifies a code block to be executed, if the conditon is false ( Is like the default ending of the statement)
 * Switch: Uses one of many blocks to be executed.
 * 
 * Examples: 
 */
   function shirtSizes(num) {      // Here we are creating a function for shirtSizes with the base value of num
           if (num <= 10){         // The first if statement is less than 10 it will return as "Small"
           return "Small";
    } else if (num <= 15){         // Here we are creating another condition but for the ranges of 10-15, if the conditions fit the shirt it will return with Medium
           return "Medium";
    } else if (num <= 20){         // Same so forth on
           return "Large";
    } else{                        // This else statement will be our default response to ANY number higher than 20 will automatically be given XL
           return "XLarge";
    }
   }
 
/**
 * Switch Statements:
 * 
 * A switch statement tests a value and can have infinite amount of case statements.
 * case statements defines different possible values it'll keep executing until it hits a break
 * a break statements terminates the loop and transfers it to the next onto a new statement
 */
 // an EXAMPLE on general format of a Switch statement
 var num;
 switch(num) {
     case value1:
         statement1;
         break;
     case value2:
         statement2;
         break;
 }
 // Filling the value using the days on the week
 var date = new Date();                 // We're just initializing the variables to get the date
 var days = date.getDay();              // From date we're going to get the day by using getDay()
    switch(days) {                      // within this switch statement the value that variable days provide
        case 1:                         // will go into the switch statement and continue to go into the loop
            days = "Sunday";            // until it runs out and execute what day it'll be
        break;                          
        case 2:                         
            days = "Monday";            
        break;                          
        case 3:                         
            days = "Tuesday";           
        break;                          
        case 4:                         
            days = "Wednesday";          
        break;
        case 5:
            days = "Thursday";
        break;
        case 6:
            days = "Friday";
        break;
        case 7:
            days = "Saturday";
        break;
        case 8:
            days = "Sunday";
        
    }
    console.log(days); // Will console the day it is today