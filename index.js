function reqListener() {
    var jsonString = this.responseText.match(/(?<="table":).*(?=}\);)/g)[0];
    var json = JSON.parse(jsonString);
    var table = null;
    for (var i = 0; i < json.rows.length; i++) {

      table += '<div style="flex-direction: row;">';
      for (var j = 0; j < json.cols.length - 1; j++) {

        if (json.rows[i].c[j] != null) {

          console.log(json.rows[i].c[j].v);

          table += '<div style="background: yellow">' + '<p>' + j + ': ' + json.rows[i].c[j].v + '</p>' + '</div>';
        }

      }
      table += '<br><br></div>';

    }
    document.getElementById("halo").innerHTML = table;
  }

  var id = '1vhsrf1feNVc-roo-lOJPYt28eoHHaklE-l-80IJEBZo';
  var gid = '0';
  var url = 'https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&tq&gid=' + gid;
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.open("get", url, true);
  oReq.send();
