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


            //Get Child Info

            // var fNames = document.getElementById("chldfNames");
            // var chldAge = document.getElementById("chldAge");
            // var chldAgeUntil = document.getElementById("chldAgeUntil");


            for (i = 0; i < obj.length; i++) {
                var id = i;
                
                var fName = obj[i].first_name;
                var lName = obj[i].last_name;
                var bDate = obj[i].birthdate;
                var homeRoom = obj[i].room_1;
                var pEmail = obj[i].parent_1_email;
                var age = getAge(bDate);
                var ageUntil = getAgeUntil(bDate);


                //Create Elements
                // var fullName = document.createElement("p");
                // var fNameEl = document.createElement("p");
                // var cAge = document.createElement("p");
                // var cAgeUntil = document.createElement("p");

                //Set Elements
                // fullName.innerHTML = fName + ' ' + lName;
                // fNameEl.innerHTML = fName;
                // cAge.innerHTML = age + 'y';
                // cAgeUntil.innerHTML = ageUntil;


                //Infant Data
                if (age === 0) {
                    console.log(id)

                    var infantData = document.getElementById("infantData");
                    //Create container
                    var trEl = document.createElement("tr");
                    infantData.appendChild(trEl);
                    //Infant Data
                    var trId = document.createElement("th");
                    trId.innerHTML = '#soon';
                    trEl.appendChild(trId);


                    var trName = document.createElement("th");
                    trName.innerHTML = fName + ' ' + lName;
                    trEl.appendChild(trName);

                    var trAge = document.createElement("th");
                    trAge.innerHTML = age + ' Years Old';
                    trEl.appendChild(trAge);

                    var trAgeUntil = document.createElement("th");
                    trAgeUntil.innerHTML = ageUntil;
                    trEl.appendChild(trAgeUntil);

                    //Wobblers
                } else if (age > 0 && age < 2) {

                    var wobblerData = document.getElementById("wobblerData");
                    //Create container
                    var trEl = document.createElement("tr");
                    wobblerData.appendChild(trEl);

                    //Toddler Data
                    var trId = document.createElement("th");
                    trId.innerHTML = '#soon';
                    trEl.appendChild(trId);

                    var trName = document.createElement("th");
                    trName.innerHTML = fName + ' ' + lName;
                    trEl.appendChild(trName);

                    var trAge = document.createElement("th");
                    trAge.innerHTML = age + ' Years Old';
                    trEl.appendChild(trAge);

                    var trAgeUntil = document.createElement("th");
                    trAgeUntil.innerHTML = ageUntil;
                    trEl.appendChild(trAgeUntil);
                }
                //Toddlers
                else if (age > 1 && age < 3) {

                    var toddlerData = document.getElementById("toddlerData");
                    //Create container
                    var trEl = document.createElement("tr");
                    toddlerData.appendChild(trEl);

                    //Toddler Data
                    var trId = document.createElement("th");
                    trId.innerHTML = '#soon';
                    trEl.appendChild(trId);

                    var trName = document.createElement("th");
                    trName.innerHTML = fName + ' ' + lName;
                    trEl.appendChild(trName);

                    var trAge = document.createElement("th");
                    trAge.innerHTML = age + ' Years Old';
                    trEl.appendChild(trAge);

                    var trAgeUntil = document.createElement("th");
                    trAgeUntil.innerHTML = ageUntil;
                    trEl.appendChild(trAgeUntil);
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


