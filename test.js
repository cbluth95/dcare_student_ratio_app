function toJson(csvData) {
    var data = [];
    var rows = csvData.split("\n");
    var colNames = rows[0].split(",");

    if(typeof(rows.length) != "") {
        rows.pop();
        console.log("Removed an Empty Row")
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

    var csvFile = new XMLHttpRequest();
    csvFile.open("GET", "test.csv", true);
    csvFile.onreadystatechange = function () {
        if (csvFile.readyState === 4) {
            if (csvFile.status === 200 || csvFile.status == 0) {
                var allText = csvFile.responseText;
                var result = toJson(allText);
                
                var strResult = JSON.stringify(result);
                var obj = JSON.parse(strResult);

                //Get info
                var text = "";
                var i;
                
                for (i = 0; i < obj.length; i++) {
                    var fName = obj[i].first_name;
                    var lName = obj[i].last_name;
                    var bDate = obj[i].birthdate;
                    var homeRoom = obj[i].room_1;
                    var pEmail = obj[i].parent_1_email;

        

                    //Set info
                    text += fName + " " + lName + " " + bDate + " " + homeRoom + " " + pEmail + "<br>"; // + " " + obj[i].last_name + "<br>" removed last name
                    
                    
                }

                //Set Data
                document.getElementById("test").innerHTML = text;
            }
            

        }
    }
    csvFile.send(null);


