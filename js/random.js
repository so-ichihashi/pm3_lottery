function onClick() {
  let varFileNum = Math.floor(Math.random() * 6);

  document.getElementById("body").style.backgroundImage = "url(" + "./images/" + varFileNum + ".jpg)";

  switch (varFileNum) {
    case 0:
      resultText = "YOSHINOYA";
      break;
    case 1:
      resultText = "Mt.FUJI";
      break;
    case 2:
      resultText = "GIFU";
      break;
    case 3:
      resultText = "HIMEJI";
      break;
    case 4:
      resultText = "KYOTO";
      break;
    case 5:
      resultText = "OSAKA";
      break;
    default:
      resultText = "TOKYO";
      break;
  }
  document.getElementById("result").textContent = resultText;
}
