var arrSoN = [];
// Bài 1
function themSoNVaoMang() {
  //Xử lí lấy dữ liệu người dùng nhập
  var soN = document.getElementById("txt-soN").value * 1;
  arrSoN.push(soN);
  document.querySelector(".render_arr").innerHTML = arrSoN;
}
document.getElementById("btn_nhap").onclick = themSoNVaoMang;

function tinhTongSoDuong() {
  // Chạy một vào lặp duyệt qua từng phần tử
  var sum = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      sum += arrSoN[i];
    }
  }
  document.getElementById("kq1").innerHTML = `Tổng số dương: ${sum}`;
}
document.getElementById("btn_kq1").onclick = tinhTongSoDuong;

// Bài 2
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      count++;
    }
  }

  document.getElementById("kq2").innerHTML = `Có ${count} số dương trong mảng`;
}
document.getElementById("btn_kq2").onclick = demSoDuong;

// Bài 3
function soNhoNhat() {
  var soNN = arrSoN[0];
  for (var i = 1; i < arrSoN.length; i++) {
    if (soNN > arrSoN[i]) {
      soNN = arrSoN[i];
    }
  }
  console.log(soNN);
  document.getElementById(
    "kq3"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${soNN}`;
}
document.getElementById("btn_kq3").onclick = soNhoNhat;

// Bài 4
function soDuongNhoNhat() {
  var soDNN = arrSoN[0];
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0 && soDNN > arrSoN[i]) {
      soDNN = arrSoN[i];
    }
  }
  document.getElementById(
    "kq4"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là:${soDNN}`;
}
document.getElementById("btn_kq4").onclick = soDuongNhoNhat;

// Bài 5
function soChanCuoiCung() {
  var soN = -1;
  for (var i = arrSoN.length - 1; i >= 0; i--) {
    if (arrSoN[i] % 2 == 0) {
      soN = arrSoN[i];
      break;
    }
  }
  console.log(soN);
  document.getElementById(
    "kq5"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${soN}`;
}
document.getElementById("btn_kq5").onclick = soChanCuoiCung;

// Bài 6
function swap2value() {
  var viTri1 = document.getElementById("viTri1").value;
  var viTri2 = document.getElementById("viTri2").value;
  var tmp;
  for (var i = 0; i < arrSoN.length; i++) {
    if (i == viTri1) {
      for (var j = 1; j < arrSoN.length; j++) {
        if (j == viTri2) {
          tmp = arrSoN[i];
          arrSoN[i] = arrSoN[j];
          arrSoN[j] = tmp;
        }
      }
    }
  }
  document.getElementById(
    "kq6"
  ).innerHTML = `Mảng sau khi đổi chỗ là: ${arrSoN}`;
}
document.getElementById("btn_kq6").onclick = swap2value;

// Bài 7
function sapXepTangDan() {
  arrSoN.sort(function (a, b) {
    return a - b;
  });

  document.getElementById(
    "kq7"
  ).innerHTML = `Mảng sau khi sắp xếp là: ${arrSoN}`;
}
document.getElementById("btn_kq7").onclick = sapXepTangDan;

// Bài 8
// Cách kiểm tra snt là coi thử snt đó có chia hết cho các số trong khoảng từ 2 đến căn bậc 2 của snt đó
function soNguyenTo(snt) {
  if (snt < 2) {
    return false;
  } else {
    for (var i = 2; i < Math.sqrt(snt); i++) {
      if (snt % i == 0) {
        return false;
      }
    }
    return true;
  }
}
function timSoNguyenToDauTien() {
  for (var i = 0; i < arrSoN.length; i++) {
    if (soNguyenTo(arrSoN[i]) === true) {
      document.getElementById(
        "kq8"
      ).innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${arrSoN[i]}`;
      break;
    }
  }
}
document.getElementById("btn_kq8").onclick = timSoNguyenToDauTien;

// Bài 9
function kiemTraSoNguyen() {
  var count = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (Number.isInteger(arrSoN[i])) {
      count++;
    }
  }
  document.getElementById("kq9").innerHTML = `Có ${count} số nguyên trong mảng`;
}
document.getElementById("btn_kq9").onclick = kiemTraSoNguyen;

// Bài 10
function soSanhDuongAm() {
  var duong = 0;
  var am = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] == 0) {
      return;
    } else if (arrSoN[i] > 0) {
      duong++;
    } else {
      am++;
    }
  }

  if (duong > am) {
    document.getElementById("kq10").innerHTML = `Số dương nhiều hơn số âm`;
  } else if (duong < am) {
    document.getElementById("kq10").innerHTML = `Số âm nhiều hơn số dương`;
  } else {
    document.getElementById("kq10").innerHTML = `Số dương và số âm băng nhau`;
  }
}
document.getElementById("btn_kq10").onclick = soSanhDuongAm;
