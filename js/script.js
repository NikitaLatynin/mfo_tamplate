// -----------------------Калькулятор------------------------------------
let sumValue = document.querySelector(".sum-value");
let perValue = document.querySelector(".per-value");
let summary = document.querySelector(".summary");
let sumRange = document.getElementById("range1");
 

function formCalcUpdate() {
    // изменение значений лейбла ползунка для сумм
    let komission = 0;
    sumValue.innerHTML = document.getElementById("range1").value;
    //изменение значение лейбла ползунка для сроков
    switch (document.getElementById("range2").value) {
        case "1":
          perValue.innerHTML = "2 месяца";
          komission = 0;
          break;
        case "2":
          perValue.innerHTML = "3 месяца";
          komission = 0.09;
          break;
        case "3":
          perValue.innerHTML = "6 месяцев";
          komission = 0.09;
          break;
        case "4":
          perValue.innerHTML = "12 месяцев";
          komission = 0.27;
          break;  
        case "5":
          perValue.innerHTML = "больше 12 месяцев";
          komission = 0.27;
          break;
        default:
          perValue.innerHTML = "2 месяца";
      }
    //сумма закрытия займа
    if (sumRange.value <= 50000) {
        summary.innerHTML = sumRange.value;
    } else {
        summary.innerHTML = Number(sumRange.value) + (Number(sumRange.value) * komission);
    }
};

// -------------------------------------------------------------------------------