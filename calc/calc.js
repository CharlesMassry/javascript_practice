function calculate() {
  var left = parseInt(document.getElementById("left").value);
  var right = parseInt(document.getElementById("right").value);
  var operator = document.getElementById("operator").value;

  if(operator == "+") {
    var result = left + right;
  } else if(operator == "-") {
    var result = left - right;
  } else if(operator == "*") {
    var result = left * right;
  } else if(operator == "/") {
    var result = left / right;
  }

  document.getElementById("result").innerHTML = result

  return false;
}
