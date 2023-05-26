
    function calculateIPK() {
      var matkul1 = document.getElementById("name_matkul1").value;
      var matkul2 = document.getElementById("name_matkul2").value;
      var matkul3 = document.getElementById("name_matkul3").value;
      var matkul4 = document.getElementById("name_matkul4").value;
      var matkul5 = document.getElementById("name_matkul5").value;

      var nilai_matkul1 = parseFloat(document.getElementById("nilai_matkul1").value);
      var nilai_matkul2 = parseFloat(document.getElementById("nilai_matkul2").value);
      var nilai_matkul3 = parseFloat(document.getElementById("nilai_matkul3").value);
      var nilai_matkul4 = parseFloat(document.getElementById("nilai_matkul4").value);
      var nilai_matkul5 = parseFloat(document.getElementById("nilai_matkul5").value);

      var sks_matkul1 = parseFloat(document.getElementById("sks_matkul1").value);
      var sks_matkul2 = parseFloat(document.getElementById("sks_matkul2").value);
      var sks_matkul3 = parseFloat(document.getElementById("sks_matkul3").value);
      var sks_matkul4 = parseFloat(document.getElementById("sks_matkul4").value);
      var sks_matkul5 = parseFloat(document.getElementById("sks_matkul5").value);

      var ip_matkul1;

      if (nilai_matkul1 >= 4) {
          ip_matkul1 = "A";
      }
      if (nilai_matkul1 >= 3) {
          ip_matkul1 = "B";
      }
      if (nilai_matkul1 >= 2) {
          ip_matkul1 = "C";
      }
      if (nilai_matkul1 >= 1) {
          ip_matkul1 = "D";
      }
      if (nilai_matkul1 >= 0) {
          ip_matkul1 = "E";
      }

            var ip_matkul2;

      if (nilai_matkul2 >= 4) {
          ip_matkul2 = "A";
      }
      if (nilai_matkul2 >= 3) {
          ip_matkul2 = "B";
      }
      if (nilai_matkul2 >= 2) {
          ip_matkul2 = "C";
      }
      if (nilai_matkul1 >= 1) {
          ip_matkul2 = "D";
      }
      if (nilai_matkul1 >= 0) {
          ip_matkul2 = "E";
      }

            var ip_matkul3;

      if (nilai_matkul3 >= 4) {
          ip_matkul3 = "A";
      }
      if (nilai_matkul3 >= 3) {
          ip_matkul3 = "B";
      }
      if (nilai_matkul3 >= 2) {
          ip_matkul3 = "C";
      }
      if (nilai_matkul3 >= 1) {
          ip_matkul3 = "D";
      }
      if (nilai_matkul3 >= 0) {
          ip_matkul3 = "E";
      }

            var ip_matkul4;

      if (nilai_matkul4 >= 4) {
          ip_matkul4 = "A";
      }
      if (nilai_matkul4 >= 3) {
          ip_matkul4 = "B";
      }
      if (nilai_matkul4 >= 2) {
          ip_matkul4 = "C";
      }
      if (nilai_matkul4 >= 1) {
          ip_matkul4 = "D";
      }
      if (nilai_matkul4 >= 0) {
          ip_matkul4 = "E";
      }

            var ip_matkul5;

      if (nilai_matkul5 >= 4) {
          ip_matkul5 = "A";
      }
      if (nilai_matkul5 >= 3) {
          ip_matkul5 = "B";
      }
      if (nilai_matkul5 >= 2) {
          ip_matkul5 = "C";
      }
      if (nilai_matkul5 >= 1) {
          ip_matkul5 = "D";
      }
      if (nilai_matkul5 >= 0) {
          ip_matkul5 = "E";
      }

var total_IPK = ((nilai_matkul1 * sks_matkul1)+(nilai_matkul2 * sks_matkul2)+(nilai_matkul3 * sks_matkul3)+(nilai_matkul4 * sks_matkul4)+(nilai_matkul5 * sks_matkul5)) / (sks_matkul1+sks_matkul2+sks_matkul3+sks_matkul4+sks_matkul5);

      var hasil_perhitungan1 = "Mata Kuliah 1: " + matkul1 + "<br>" +
                              "SKS Mata Kuliah 1: " + sks_matkul1 + "<br>" +
                              "Grade Mata Kuliah 1: " + ip_matkul1 + 

                              "<hr>Mata Kuliah 2: " + matkul2 + "<br>" +
                              "SKS Mata Kuliah 2: " + sks_matkul2 + "<br>" +
                              "Grade Mata Kuliah 2: " + ip_matkul2 +

                              "<hr>Mata Kuliah 3: " + matkul3 + "<br>" +
                              "SKS Mata Kuliah 3: " + sks_matkul3 + "<br>" +
                              "Grade Mata Kuliah 3: " + ip_matkul3 +

                              "<hr>Mata Kuliah 4: " + matkul4 + "<br>" +
                              "SKS Mata Kuliah 4: " + sks_matkul4 + "<br>" +
                              "Grade Mata Kuliah 4: " + ip_matkul4 +

                              "<hr>Mata Kuliah 5: " + matkul5 + "<br>" +
                              "SKS Mata Kuliah 5: " + sks_matkul5 + "<br>" +
                              "Grade Mata Kuliah 5: " + ip_matkul5 +

                              "<hr><center>TOTAL IPK: <br>" + total_IPK;
                              ;

      document.getElementById("hasil_perhitungan1").innerHTML = hasil_perhitungan1;
    }
