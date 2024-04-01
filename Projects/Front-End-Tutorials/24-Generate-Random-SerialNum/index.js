let serial = document.querySelector(".serial");
let generate = document.querySelector(".generate");

generate.onclick = function () {
  let charcters =
    "123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVVBNM";
  let charNum = 10;
  let ramdomSerial = "";

  for (let i = 0; i < charNum; i++) {
    ramdomSerial += charcters[Math.trunc(Math.random() * charcters.length)];
  }
  serial.innerHTML = ramdomSerial;
};
