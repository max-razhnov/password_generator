const passLength = document.getElementById("length"),
  password = document.getElementById("password"),
  btnCopy = document.getElementById("copy"),
  upperCase = document.getElementById("upperCase"),
  lowerCase = document.getElementById("lowerCase"),
  numbers = document.getElementById("numbers"),
  symbols = document.getElementById("symbols"),
  btnGenerate = document.getElementById("generate");

btnCopy.addEventListener("click", copyToClipboard);

const randomFunc = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function copyToClipboard(): string {
  if (!password.innerText) {
    return "";
  } else {
    navigator.clipboard
      .writeText(`${password.innerText}`)
      .then(() => {
        alert(`Your password: ${password.innerText}`);
      })
      .catch(err => {
        console.error("Something went wrong", err);
      });
  }
}
function getRandomLowerCase(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomSymbol(): string {
  const SPEC_SYMBOLS: string = "!@#$%^&*(){}[]=<>/,.";
  return SPEC_SYMBOLS[Math.floor(Math.random() * SPEC_SYMBOLS.length)];
}

function getRandomNumber(): string {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function passwordGenerate(
  length: number,
  lower: boolean,
  upper: boolean,
  number: boolean,
  symbol: boolean
): string {
  let passwordResult: string = "";
  const typesCount: number = +lower + +upper + +number + +symbol;
  console.log("length:", length);
  console.log("typesCount:", typesCount);
  const arr = [{ lower }, { upper }, { number }, { symbol }];
  arr.filter(item => {
    console.log(Object.values(item)[0]);
  });
  return passwordResult;
}
btnGenerate.addEventListener("click", (): void => {
  const length: number = +(<HTMLInputElement>passLength).value,
    hasLowerCase: boolean = (<HTMLInputElement>lowerCase).checked,
    hasUpperCase: boolean = (<HTMLInputElement>upperCase).checked,
    hasNumbers: boolean = (<HTMLInputElement>numbers).checked,
    hasSymbols: boolean = (<HTMLInputElement>symbols).checked;

  password.innerText = passwordGenerate(
    length,
    hasLowerCase,
    hasUpperCase,
    hasNumbers,
    hasSymbols
  );
});
