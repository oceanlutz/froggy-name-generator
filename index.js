const button = document.getElementById('button'); 
const resetButton = document.getElementById('reset-button');
//assigning variables to the to button elements in the HTML
var people = []; //empty array to hold all the people entered in form

/*  
    Okay, so below i create an enormous amount of variables to store the different possible
    selections of froggy characteristics. This was incredibly overkill in design for what
    i technically had to achieve for an assignment, but i had fun doing it and will keep
    using it and modifying it afterwards. The names are based on gererally 3 factors:
    frog-related things, mushroom-related things, and british-english names. i wanted all
    names to flow decently well with all combinations. The frog jobs will be determined by
    astrological sign based on birth, along with blood type. The blood type thing is based 
    on the practice of attributing blood type to personality characteristics done in several
    east-asian countries. 
*/  

/* 
    Each variable containing jobs is an array with jobs for blood types in the order [A, B, AB, O] 
    to make it easy to just assign the data collected in the input to a position in the array.
*/

const froggyFirst = ['Dart', 'Jules', 'Strawberry', 'Gill', 'Portobello', 'Parasol', 'Forest', 'Hops', 'Dew', 'Stars', 'Hyacinth', 'Lotus'];
const froggyLast = ['Bullhorn', 'Fernsby', 'Quimbly', 'Dryland', 'Leafbury', 'McTadpole', 'Woodsworth', 'Mossington', 'Glasswood', 'Paddington', 'Morchella', 'Chanterelle'];
const froggyJobAries = ['Teacher', 'Lilypad Inspector', 'Forest Guide', 'Actor'];
const froggyJobTaurus = ['Doctor', 'Perfumer', 'Chef', 'Writer'];
const froggyJobGemini = ['Lawyer', 'Journalist', 'Chemist', 'Fashionista'];
const froggyJobCancer = ['Mushroom Collector', 'Therapist', 'Free Food Organizer', 'Social Worker'];
const froggyJobLeo = ['Movie Director', 'Lifeguard', 'Soothsayer', 'Hip-Hop Artist'];
const froggyJobVirgo = ['Nuclear Physicist', 'Biologist', 'Engineer', 'Black Market Dealer'];
const froggyJobLibra = ['Beautician', 'Painter', 'Community Leader', 'Potioncrafter'];
const froggyJobScorpio = ['Sculptor', 'Adventurer', 'Witch', 'Librarian'];
const froggyJobSagittarius = ['Botanist', 'Ship Captain', 'Philosopher', 'Actor'];
const froggyJobCapricorn = ['Gardener', 'Architect', 'Potter', 'Surgeon'];
const froggyJobAquarius = ['Mycologist', 'Photographer', 'Inventor', 'Professor'];
const froggyJobPisces = ['Archaeologist', 'Poet', 'Marine Biologist', 'Cat Foster-Parent'];

//this function resets all the values in the form that were changed
//left it out of Person class so I can call it without referencing a Person
function reset() {
    x = document.getElementsByClassName('form-control');
    //i did actually mostly have the forsight to do a for loop, could be improved
    for (let i = 0; i < x.length; i++) {
        x[i].value = '';
    };

    document.getElementById('select-blood').value = 0;
    document.getElementById('plus').checked = true;
}

//class for creating 1 person with all the information from the form
class Person {
    constructor(first, mi, last, animal, music, dob, blood, rh) {
        this.first = first;
        this.mi = mi;
        this.last = last;
        this.animal = animal;
        this.music = music;
        this.dob = dob;
        this.blood = blood;
        this.rh = rh;
        this.slicedYear = this.dob.slice(0,4);
        this.slicedMonth = this.dob.slice(5,7);
        this.slicedDay = this.dob.slice(8,10);
        //sliced variables cut up portions of the date to use later
        this.myFroggyJob = ''; 
        //maybe a bit inconsistent that the job is a constructor variable
        //and the names aren't but it functions for now 
    }

    
    /*
        the function calls other functions to calculate the name. the methodology 
        is using numerology calculations to convert each letter of their name to 
        a numerical value, and then adding all those values. if the values are over
        9 and also not the master numbers 11, 22, or 33, the digits in the number 
        are separated and added to each other to become a smaller number. the return
        value is either a position in the first froggy name array, or the string 
        'Froggy' for when no information or incompatible info is input by user.
    */
        calculateFroggyFirst() {
        let resultFirst = this.letterToNumber(this.first); 
        let resultLast = this.letterToNumber(this.last);
        //calls letterToNumber() to convert letters in name to value

        let resultFinal = resultFirst + resultLast; //adds value

        for (resultFinal; resultFinal > 9 && resultFinal != 11 && resultFinal != 22 && resultFinal != 33; 0) {
            resultFinal = this.addDigits(resultFinal);
        }

        //this for loop is similar to what happens in letterToNumber, 
        //but has a slight change to account for numbers 11, 22, and 33

        if (resultFinal < 10 && resultFinal != 0) {
            return froggyFirst[resultFinal - 1];
        } else if (resultFinal == 11) {
            return froggyFirst[9];
        } else if (resultFinal == 22) {
            return froggyFirst[10]; 
        } else if (resultFinal == 33) {
            return froggyFirst[11];
        } else {return 'Froggy'};

    }

    /* 
        this is similar to froggyFirst(), but instead of using the name 
        it uses a different but similar numerological computation that 
        only looks at the date of birth to compute last name. it takes
        the sliced portions of the DOB and does similar math on them in
        regard to spliting digits and adding
    */
    calculateFroggyLast() {
        let month = this.addDigits(this.slicedMonth);
        let day = this.addDigits(this.slicedDay);
        let year = this.addDigits(this.slicedYear);
        let resultFinal = month + day + year; //adds all values before final calculation


        //similar to first name calculation in that it finally respects numbers 11, 22, and 33
        for (resultFinal; resultFinal > 9 && resultFinal != 11 && resultFinal != 22 && resultFinal != 33; 0) {
            resultFinal = this.addDigits(resultFinal);
        }

        //included option to return default 'McFroggerson' string if evil characters are used
        if (resultFinal < 10 && resultFinal != 0) {
            return froggyLast[resultFinal - 1];
        } else if (resultFinal == 11) {
            return froggyLast[9];
        } else if (resultFinal == 22) {
            return froggyLast[10]; 
        } else if (resultFinal == 33) {
            return froggyLast[11];
        } else {return 'McFroggerson'};

        //function returns otherwise a string from a position in the last name array
    }

    //this function is for taking a 2 digit number and adding the digits to each other
    addDigits(x) {
        let y = x
            .toString() //converts number to string
            .split('') //converts that string to an array
            .map(Number) //converts the elements of the array to numbers
            .reduce((x, y) => x + y, 0); //adds all the numbers together
        return y; //returns resulting number
    }

    /*
        letterToNumber converts a given letter from a name and converts it to a 
        numerical value. the value chosen is based on a letter's given value
        according to numerology. i thought this seemed fun and i was right 
        because it was. it then reduces array of numbers and calls addDigit()
        which does multiple string functions to do math on strings     
    */

    letterToNumber(name) {
        let lowerCase = name.toLowerCase(); //converts input string to lowercase
        let nameArray = lowerCase.split(''); //splits lowercase into array of letters
        
        //this loop assigns letters to a number instead during the duration of the 
        //length of the string input into the function
        for (let i = 0; i < nameArray.length; i++) {
            switch (nameArray[i]) {
                case 'a':
                case 'j':
                case 's': 
                    nameArray[i] = 1;
                    break;
                case 'b':
                case 'k':
                case 't':
                    nameArray[i] = 2;
                    break;
                case 'c':
                case 'l':
                case 'u':
                    nameArray[i] = 3;
                    break;
                case 'd':
                case 'm':
                case 'v':
                    nameArray[i] = 4;
                    break;
                case 'e':
                case 'n':
                case 'w':
                    nameArray[i] = 5;
                    break;
                case 'f':
                case 'o':
                case 'x':
                    nameArray[i] = 6;
                    break;
                case 'g':
                case 'p':
                case 'y':
                    nameArray[i] = 7;
                    break;
                case 'h':
                case 'q':
                case 'z':
                    nameArray[i] = 8;
                    break;
                case 'i':
                case 'r':
                    nameArray[i] = 9;
                    break;
                default: //for if a weird character is used
                    nameArray[i] = 0;
                    break;
            }
        }

        //this sums numbers in array using reduce method
        let total = nameArray.reduce((x, y) => (x + y), 0);

        //calls addDigits() to add digits in 2+ digit numbers together 
        //the result overwrites the total and checks again to see if it 
        //needs to be reduced once more
        for (total; total > 9; ) {
            total = this.addDigits(total);
        }

        //returns value equal to numerology value
        return total;
        
    }
    

    /* 
        following method uses pieces of the DOB ran through a switch
        for the numerical month value, followed by an if statement to 
        pinpoint the zodiac sign since they span ranges between months
    */
    /*
        after zodiac is found, the blood type value is used as the position
        in that specific zodiac-based job array for that respective job.
        A is position 0, B is position 1, AB is 2, O is 3.
    */
    calculateJob() {
        switch(this.slicedMonth) {
            case '01':
                if (this.slicedDay <= 19) {
                    this.myFroggyJob = froggyJobCapricorn[this.blood];
                } else {this.myFroggyJob = froggyJobAquarius[this.blood]};
                break;

            case '02':
                if (this.slicedDay <= 18) {
                    this.myFroggyJob = froggyJobAquarius[this.blood];
                } else {this.myFroggyJob = froggyJobPisces[this.blood]};
                break;

            case '03':
                if (this.slicedDay <= 20) {
                    this.myFroggyJob = froggyJobPisces[this.blood];
                } else {this.myFroggyJob = froggyJobAries[this.blood]};
                break;

            case '04':
                if (this.slicedDay <= 19) {
                    this.myFroggyJob = froggyJobAries[this.blood];
                } else {this.myFroggyJob = froggyJobTaurus[this.blood]};
                break;

            case '05':
                if (this.slicedDay <= 20) {
                    this.myFroggyJob = froggyJobTaurus[this.blood];
                } else {this.myFroggyJob = froggyJobGemini[this.blood]};
                break;

            case '06':
                if (this.slicedDay <= 20) {
                    this.myFroggyJob = froggyJobGemini[this.blood];
                } else {this.myFroggyJob = froggyJobCancer[this.blood]};
                break;

            case '07':
                if (this.slicedDay <= 22) {
                    this.myFroggyJob = froggyJobCancer[this.blood];
                } else {this.myFroggyJob = froggyJobLeo[this.blood]};
                break;

            case '08':
                if (this.slicedDay <= 22) {
                    this.myFroggyJob = froggyJobLeo[this.blood];
                } else {this.myFroggyJob = froggyJobVirgo[this.blood]};
                break;

            case '09':
                if (this.slicedDay <= 22) {
                    this.myFroggyJob = froggyJobVirgo[this.blood];
                } else {this.myFroggyJob = froggyJobLibra[this.blood]};
                break;

            case '10':
                if (this.slicedDay <= 22) {
                    this.myFroggyJob = froggyJobLibra[this.blood];
                } else {this.myFroggyJob = froggyJobScorpio[this.blood]};
                break;

            case '11':
                if (this.slicedDay <= 21) {
                    this.myFroggyJob = froggyJobScorpio[this.blood];
                } else {this.myFroggyJob = froggyJobSagittarius[this.blood]};
                break;

            case '12':
                if (this.slicedDay <= 21) {
                    this.myFroggyJob = froggyJobSagittarius[this.blood];
                } else {this.myFroggyJob = froggyJobCapricorn[this.blood]};
                break;

            default:
                this.myFroggyJob = 'Wanderer';
                break;
        }
        
        if (this.myFroggyJob == undefined) {  //pretty sure this isn't possible but just in case
            this.myFroggyJob = 'Wanderer';
        }

    }

} 


button.addEventListener('click', () => {
    //now setting all values from form as variables to create new person object
    //i probably could have made this easier but oh well

    let firstName = document.getElementById('input-first').value;
    let lastName = document.getElementById('input-last').value;
    let middleInitial = document.getElementById('input-middle').value;
    let animal = document.getElementById('input-animal').value;
    let music = document.getElementById('input-music').value;
    let dob = document.getElementById('input-birth').value;
    /*  
        i was worried that dob would return a different order of date elements based
        on user language and that browsers in english would return the date
        as a string with a different order (ie. not yyyy-dd-mm) because my 
        browser is in german but it doesn't seem to be the case but also if
        this messes up on your end that's probably why
    */ 
    let blood = document.getElementById('select-blood').value;
    let rh = document.querySelector('input[name="rh-radios"]:checked').value;
    let table = document.getElementById('tbody') //grabs tbody element for creating rows

    x = new Person(firstName, middleInitial, lastName, animal, music, 
        dob, blood, rh);
    //creates new person object with required inputs
    x.calculateJob(); //calls function to calculate job and assign to variable

    people.push(x); //this adds the person to the people counter

    //creates variable for new row for info gathered during button click
    let row = table.insertRow(); 
    row.setAttribute('id', `person-${people.length}`); //assigns custom id to each row

    //creates table header element with scope set to row and inner HTML being the 
    //current length of array storing people created
    let rowHeader = document.createElement('th');
    rowHeader.setAttribute('scope', 'row');
    rowHeader.innerHTML = people.length;
    row.appendChild(rowHeader); //places row header into row

    //next few lines create new cells in the row, displaying the 
    //calculated names and job from the user input
    let displayFirst = row.insertCell(); 
    displayFirst.innerHTML = x.calculateFroggyFirst();
    
    let displayLast = row.insertCell();
    displayLast.innerHTML = x.calculateFroggyLast();

    let displayJob = row.insertCell();
    displayJob.innerHTML = x.myFroggyJob;

    reset(); //this resets the form for *user experience*

});

//this waits for reset button click and then uses the reset()
//function to reset the form, while also deleting newly created rows
resetButton.addEventListener('click', () => {
    reset();
    
    //deletes one row at a time for as many people exist in array
    for (let i = people.length; i > 0; i--) {
        let row = document.getElementById(`person-${i}`);
        row.parentNode.removeChild(row);
    }
    people = []; //resets people arrray after table is cleared
});

