let string = "";
let buttons = document.querySelectorAll('.button');
let display = document.querySelector('.display');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let btn = e.target.innerHTML;

    if (btn === "=") {
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        display.value = "Error";
        string = "";
      }
    } else if (btn == "Ac") {
      string = ""
      display.value = string;
    } else if (btn === "X") {
      display.value = string;
      string = string.slice(0, -1);
      display.value = string;
    } else if (btn === "%") {
      // Treat % as modulus operator
      string = string + "/100";
      display.value = string;
    } else {
      string = string + btn;
      display.value = string;
    }
  });
});
