// Zadatak 1

function curenntDate(){
    // let year= new Date().getFullYear();
    // let month= new Date().getMonth();
    // let date= new Date().getDate();
    // return console.log(date, sign, month, sign, year);
  let date=new Date().toLocaleDateString();
  return date
}

console.log(curenntDate());


// Zadatak 2

function days(date){
    let day="";
    switch (date.getDay()) {
        case 0:
            day = "Sun";
            break;
        case 1:
            day = "Mon";
            break;
        case 2:
            day = "Tue";
            break;
        case 3:
            day = "Wed";
            break;
        case 4:
            day = "Thu";
            break;
        case 5:
            day = "Fri";
            break;
        case 6:
            day = "Sat";
    }
    console.log(day);
}

days(new Date(2022,5,17));

// Zadatak 3

function twoDigitYear(datum){
    let year=datum.getFullYear().toString().slice(2,4);
    console.log(year);
}

twoDigitYear(new Date(1999,3,3))