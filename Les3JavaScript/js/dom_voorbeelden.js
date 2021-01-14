function haalElementenOp(){
    let fotoslider = document.getElementById("fotoslider");
    let alleFotoDivs = document.querySelectorAll('.foto');

    for (let i = 0; i < alleFotoDivs.length; i++) {
        let item = alleFotoDivs[i];

        item.style.backgroudnColor="#FF0000";
      }
  }
  
  window.addEventListener('DOMContentLoaded', haalElementenOp)