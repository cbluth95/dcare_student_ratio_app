function toJson(csvData) {
    var data = [];
    var rows = csvData.split("\n");
    var colNames = rows[0].split(",");
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

// convert .CSV to JSON and Parse first and last name

    var csvFile = new XMLHttpRequest();
    csvFile.open("GET", "test.csv", true);
    csvFile.onreadystatechange = function () {
        if (csvFile.readyState === 4) {
            if (csvFile.status === 200 || csvFile.status == 0) {
                var allText = csvFile.responseText;
                var result = toJson(allText);
                var strResult = JSON.stringify(result);
                var obj = JSON.parse(strResult);

                //Get Name
                var text = "";
                var i;
                for (i = 0; i < obj.length; i++) {
                    text += obj[i].first_name + " " + obj[i].last_name + "<br>"; // + " " + obj[i].last_name + "<br>" removed last name
                }

                //Set Name
                document.getElementById("test").innerHTML = text;
            }
            

        }
    }
    csvFile.send(null);


