const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code hereasync function showMessageWithDelay(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return message;
}

async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}

btn.addEventListener("click", showMessage);
