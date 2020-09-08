let specialWords = [
  { userInput: "coffee", replacementWord: "Dunkin" },
  { userInput: "car keys", replacementWord: "khakis" },
  { userInput: "water fountain", replacementWord: "bubblah" },
  { userInput: "living room", replacementWord: "pahlah" },
  { userInput: "really", replacementWord: "wicked" },
  { userInput: "very", replacementWord: "wicked" },
  { userInput: "subway", replacementWord: "The T" },
  { userInput: "train", replacementWord: "The T" },
  { userInput: "Cape Cod", replacementWord: "The Cape" },
  { userInput: "snowstorm", replacementWord: "Nor'eastah" },
  { userInput: "baseball", replacementWord: "Sox" },
  { userInput: "hockey", replacementWord: "B's" },
  { userInput: "football", replacementWord: "Pats" },
  { userInput: "basketball", replacementWord: "Celts" },
  { userInput: "Tom Brady", replacementWord: "GOAT" },
  { userInput: "Brady", replacementWord: "GOAT" },
  { userInput: "Tom", replacementWord: "GOAT" },
  { userInput: "pants", replacementWord: "slacks" },
  { userInput: "jeans", replacementWord: "dungarees" },
  { userInput: "dinner", replacementWord: "suppah" },
  { userInput: "kid", replacementWord: "kehd" },
  { userInput: "awesome", replacementWord: "wicked pissah" },
  { userInput: "liquor store", replacementWord: "packie" },
  { userInput: "u-turn", replacementWord: "U-ie" },
  { userInput: "party", replacementWord: "rippah" },
  { userInput: "local", replacementWord: "townie" },
  { userInput: "sandwich", replacementWord: "grindah" },
  { userInput: "trash can", replacementWord: "barrel" },
  { userInput: "remote control", replacementWord: "clickah" },
  { userInput: "here", replacementWord: "heeyah" },
  { userInput: "shopping cart", replacementWord: "carraige" },
  { userInput: "milkshake", replacementWord: "frappe" },
  { userInput: "shake", replacementWord: "frappe" },
];

let input = document.getElementById("user-input");

function bostonify() {
  let newWord;
  let inputVal = input.value;

  for (let i = 0; i < specialWords.length; i++) {
    let word = specialWords[i];
    if (inputVal.toLowerCase() === word.userInput.toLowerCase()) {
      newWord = word.replacementWord;
      break;
    } else {
      newWord = inputVal.replace(/ar/g, "ah").replace(/er/g, "ah");
    }
  }
  document.getElementById("output-area").innerHTML = `${newWord}`;
}

input.addEventListener("keyup", function (event) {
  let key = event.key || event.keyCode;

  if (key === "Enter" || key === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

input.addEventListener("click", () => {
  input.value = "";
  document.getElementById("output-area").innerHTML = "";
  console.log(input.value);
});

input.addEventListener("keyup", () => {
  if (input.value === "") {
    document.getElementById("output-area").innerHTML = "";
  }
});
