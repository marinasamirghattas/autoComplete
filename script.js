var data2 = [];
var data;

function getTitles() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var dataResponse = xhr.responseText;
            data = JSON.parse(dataResponse);

            for (let i of data) {
                document.getElementById("output").innerHTML += i.title + " " + "<br>";
                data2.push(i.title);
            }
        }
    }
}

getTitles();

/******************************************************************************************** */

function autoComplete() {
    var s = document.getElementById("input").value;
    document.getElementById("output").innerHTML = '';
    for (let i in data2) {
        if (data2[i].startsWith(s)) {

            document.getElementById("output").innerHTML += data2[i] + "<br>";

        } else if (!data2[i].startsWith(s)) {
            continue;
        }
    }

}