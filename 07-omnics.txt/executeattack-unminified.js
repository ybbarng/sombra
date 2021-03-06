function getRandomInt(e, n) {
    return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e)) + e;
}

function getRandomIntInclusive(e, n) {
    return e = Math.ceil(e), n = Math.floor(n), Math.floor(Math.random() * (n - e + 1)) + e;
}

function drawChart() {
    var e = 0, n = [ getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65), getRandomIntInclusive(35, 65) ], o = google.visualization.arrayToDataTable([ [ "t", "1", "2", "3", "4", "5", "6", "7", "8" ], [ e ].concat(n) ]), t = google.visualization.arrayToDataTable([ [ "Label", "Value" ], [ "1", n[0] ], [ "2", n[1] ], [ "3", n[2] ], [ "4", n[3] ], [ "5", n[4] ], [ "6", n[5] ], [ "7", n[6] ], [ "8", n[7] ] ]), a = {
        curveType: "function",
        width: 948,
        legend: {
            position: "bottom"
        },
        vAxis: {
            minValue: 0,
            maxValue: 100
        }
    }, i = {
        legend: {
            position: "bottom"
        },
        pieHole: .4,
        pieSliceText: "none"
    }, r = {
        width: 948,
        height: 120,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5
    }, l = new google.visualization.LineChart(document.getElementById("lines")), d = new google.visualization.PieChart(document.getElementById("donut")), u = new google.visualization.Gauge(document.getElementById("gauges")), g = function() {
        e += .25;
        for (var n = [ e ], a = 0; a < t.getNumberOfRows(); a++) {
            var i = t.getValue(a, 1), r = getRandomIntInclusive(-2, 2), l = i + r;
            l < 0 && (l = 0), l > 100 && (l = 100), n.push(l), t.setValue(a, 1, l);
        }
        o.addRow(n), o.getNumberOfRows() > 40 && o.removeRow(0);
    };
    for (x = 0; x < 40; x++) g();
    l.draw(o, a), d.draw(t, i), u.draw(t, r), setInterval(function() {
        g(), l.draw(o, a), d.draw(t, i), u.draw(t, r);
    }, 250);
}

google.charts.load("current", {
    packages: [ "corechart", "gauge" ]
}), google.charts.setOnLoadCallback(drawChart), function(e, n) {
    n(".terminal").terminal(function(e, n) {
        n.echo("[[b;red;]Terminal Está Desconectado]");
    }, {
        greetings: "Bienvenido a la terminal de administrador de LumériCo!",
        name: "lumerico",
        height: 250,
        prompt: "lmrco > "
    });
}(window, window.jQuery);