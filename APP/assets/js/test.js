function toJson(csvData) {
    var data = [];
    var rows = csvData.split("\n");
    var colNames = rows[0].split(",");

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

// Convert .CSV to JSON and Parse first and last name

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
            console.log(result)


            //Get Child Info
            var i;
            var infantFullNames = document.getElementById("chldFullNames");
            // var fNames = document.getElementById("chldfNames");
            var chldAge = document.getElementById("chldAge");
            var chldAgeUntil = document.getElementById("chldAgeUntil");


            for (i = 0; i < obj.length; i++) {

                var fName = obj[i].first_name;
                var lName = obj[i].last_name;
                var bDate = obj[i].birthdate;
                var homeRoom = obj[i].room_1;
                var pEmail = obj[i].parent_1_email;
                var age = getAge(bDate);
                var ageUntil = getAgeUntil(bDate);


                //Create Elements
                var fullName = document.createElement("p");
                // var fNameEl = document.createElement("p");
                var cAge = document.createElement("p");
                var cAgeUntil = document.createElement("p");

                //Set Elements
                fullName.innerHTML = fName + ' ' + lName;
                // fNameEl.innerHTML = fName;
                cAge.innerHTML = age + 'y';
                cAgeUntil.innerHTML = ageUntil;


                //Append Elements
                if (age === 0) {
                    infantFullNames.appendChild(fullName);
                    chldAge.appendChild(cAge);
                    chldAgeUntil.appendChild(cAgeUntil);
                } else if (age > 0 && age < 2) {

                }

                // fNames.appendChild(fNameEl);
                // chldAge.appendChild(cAge);
                // chldAgeUntil.appendChild(cAgeUntil);

                if (cAge.innerHTML == 'NaNy') {
                    cAge.innerHTML = 'No Birthday Found!'
                }

            }
        }
    }
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

dataCSV.send(null);


