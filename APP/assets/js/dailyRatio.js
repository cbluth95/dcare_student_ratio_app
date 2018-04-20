// function toJson(csvData) {
//     var data = [];
//     var rows = csvData.split("\n");
//     var colNames = rows[0].replace(/\s+/g, '_').split(",");

//     if (typeof (rows.length) != "") {
//         rows.pop();
//         console.log("Removed Last Row. Its Empty")
//     }
//     for (var i = 1; i < rows.length; i++) {
//         var record = {};

//         var sections = rows[i].split(",");

//         for (var j = 0; j < sections.length; j++) {
//             record[colNames[j]] = sections[j];

//         }
//         data.push(record);

//     }
//     return data;

// }


// var checkedInCSV = new XMLHttpRequest();
// checkedInCSV.open("GET", "checkedin.csv", true);
// checkedInCSV.onreadystatechange = function () {
//     if (checkedInCSV.readyState === 4) {
//         if (checkedInCSV.status === 200 || checkedInCSV.status == 0) {
//             var allText = checkedInCSV.responseText;
//             //Parse JSON Objects
//             var result = toJson(allText);
//             var strResult = JSON.stringify(result);
//             var obj = JSON.parse(strResult);
//             var nameArray = [];
//             var i;
//             //Get Child Info

//             for (i = 0; i < obj.length; i++) {

//                 var fName = obj[i].First_Name;
//                 var lName = obj[i].Last_Name;
//                 var fullName = [fName + ' ' + lName];

//                 fullName.forEach(function (name) {
//                     nameArray.push({ name });
//                 });

//                 // var age = getAge(bDate);
//                 // var ageUntil = getAgeUntil(bDate);

//             };
//             var newArray = removeDuplicate(nameArray, 'name');
//             var chldFullNames = document.getElementById("chldFullNames");
//             for (i = 0; i < newArray.length; i++) {

//                 //Get object elements
//                 var uniName = [newArray[i].name];

//                 //Create Elements
//                 var uniNameEl = document.createElement("p");


//                 //Set Elements
//                 uniNameEl.innerHTML = uniName;




//                 //Append Elements
//                 chldFullNames.appendChild(uniNameEl);
//             };
//             console.log(newArray)
//         }
//     }
// }

// // Convert .CSV to JSON and Parse first and last name
// var dataCSV = new XMLHttpRequest();
// var ageArray = [];

// dataCSV.open("GET", "data.csv", true);
// dataCSV.onreadystatechange = function () {
//     if (dataCSV.readyState === 4) {
//         if (dataCSV.status === 200 || dataCSV.status == 0) {
//             var allText = dataCSV.responseText;
//             //Parse JSON Objects
//             var result = toJson(allText);
//             var strResult = JSON.stringify(result);
//             var obj = JSON.parse(strResult);


//             for (i = 0; i < obj.length; i++) {

//                 var fName = obj[i].first_name;
//                 var lName = obj[i].last_name;
//                 var bDate = obj[i].birthdate;
//                 var homeRoom = obj[i].room_1;
//                 var pEmail = obj[i].parent_1_email;
//                 var age = getAge(bDate);
//                 var ageUntil = getAgeUntil(bDate);

//                 ageArray.forEach(function () {
//                     ageArray.push({ age, fName, lName, bDate, ageUntil });

//                 });






//                 // //Create Elements
//                 // var fullName = document.createElement("p");
//                 // // var fNameEl = document.createElement("p");
//                 // var cAge = document.createElement("p");
//                 // var cAgeUntil = document.createElement("p");

//                 // //Set Elements
//                 // fullName.innerHTML = fName + ' ' + lName;
//                 // // fNameEl.innerHTML = fName;
//                 // cAge.innerHTML = age + 'y';
//                 // cAgeUntil.innerHTML = ageUntil;


//                 // //Append Elements
//                 // chldFullNames.appendChild(fullName);
//                 // // fNames.appendChild(fNameEl);
//                 // chldAge.appendChild(cAge);
//                 // chldAgeUntil.appendChild(cAgeUntil);

//                 // if (cAge.innerHTML == 'NaNy') {
//                 //     cAge.innerHTML = 'No Birthday Found!'
//                 // }
//             }
//             // var fullN = ageArray[i].fName + ageArray[i].lName;
//             // console.log(fullN)
//             // if (ageArray[i].fName == document.getElementsByTagName("p")) {
//             //     console.log('yay')
//             // }

//         }
//     }
// }
// var doc = document.getElementById("chldFullNames");

// console.log(doc)
// function removeDuplicate(arr, prop) {
//     var new_arr = [];
//     var lookup = {};
//     for (var i in arr) {
//         lookup[arr[i][prop]] = arr[i];
//     }
//     for (i in lookup) {
//         new_arr.push(lookup[i]);
//     }
//     return new_arr;

// }

// function getAge(bDate) {
//     var today = new Date();
//     var birthDate = new Date(bDate);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var month = today.getMonth() - birthDate.getMonth();

//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;

// }

// function getAgeUntil(bDate) {
//     var today = new Date();
//     var birthDate = new Date(bDate);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var month = today.getMonth() - birthDate.getMonth();
//     var m = month;
//     var ageUntil = age;

//     if (m < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         m -= m * 2;
//         age--;
//     } else if (m >= 0) {
//         m = 12 - m;
//         ageUntil++;

//     }

//     return m + ' months until turns ' + ageUntil;
// }



// checkedInCSV.send(null);
// dataCSV.send(null);

// function getFullName() {
//     return document.getElementById('chldFullNames').innerHTML;
//   }

// function doStuff() {
//     var name = getFullName();

//     console.log(name);
//   }

//   doStuff();

function toJson(csvData) {
    var data = [];
    var rows = csvData.split("\n");
    var colNames = rows[0].replace(/\s+/g, '_').split(",");

    if (typeof (rows.length) != "") {
        rows.pop();
        console.log("Removed Last Row. Its Empty")
    }
    for (var i = 1; i < rows.length; i++) {
        var record = {};

        var sections = rows[i].split(",");

        for (var j = 0; j < sections.length; j++) {
            record[colNames[j]] = sections[j];

        }
        data.push(record);

    }
    return data;
}

function doStuff() {
    var array1 = getDataCSV();


    document.getElementById("chldFullNames").innerHTML = array1;


    console.log();
}
doStuff();


function getDataCSV() {
    var objData = [];

    var dataCSV = new XMLHttpRequest();
    dataCSV.open("GET", "data.csv", true);
    dataCSV.onreadystatechange = function () {
        
        if (dataCSV.readyState === 4) {
            if (dataCSV.status === 200 || dataCSV.status == 0) {
                var allText = dataCSV.responseText;
                //Parse JSON Objects
                var result = toJson(allText);
                var strResult = JSON.stringify(result);
                var obj = JSON.parse(strResult);
                document.getElementById("chldFullNames").innerHTML = strResult;





                for (i = 0; i < obj.length; i++) {

                    var fName = obj[i].first_name;
                    var lName = obj[i].last_name;
                    var bDate = obj[i].birthdate;
                    var homeRoom = obj[i].room_1;
                    var pEmail = obj[i].parent_1_email;
                    var age = getAge(bDate);
                    var ageUntil = getAgeUntil(bDate);

                    objData[i] = { fName, age, ageUntil };


                }
            }
            // console.log(objData)
            
        }
    }
    dataCSV.send(objData);
    return objData;
}

function getAge(bDate) {
    var today = new Date();
    var birthDate = new Date(bDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;

}

function getAgeUntil(bDate) {
    var today = new Date();
    var birthDate = new Date(bDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var m = month;
    var ageUntil = age;

    if (m < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        m -= m * 2;
        age--;
    } else if (m >= 0) {
        m = 12 - m;
        ageUntil++;

    }

    return m + ' months until turns ' + ageUntil;
}


