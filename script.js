const formContainer = document.querySelector(".cards_form_container");
const successSubmitContainer = document.querySelector(".cards_success_submit");
const successSubmitButton = successSubmitContainer.querySelector("button");
const theFormEl = formContainer.querySelector("form");

// card Variable Elements
const cardNameEl = document.querySelector(".card_front_img_content_name p"),
  cardExpDateEl = document.querySelector(".card_front_img_content_name span"),
  cardNumberEl = document.querySelector(".card_front_img_content_number h3"),
  cardCvcEl = document.querySelector(".card_back_img_content span"),
  // card Form Input Variable Elements
  cardNameFormEl = document.querySelector(".card_form_name"),
  cardNumberFormEl = document.querySelector(".card_form_number"),
  cardMonthFormEl = document.querySelector(".card_form_month"),
  cardYearFormEl = document.querySelector(".card_form_year"),
  cardCvcFormEl = document.querySelector(".card_form_cvc"),
  // Error Variable Elements
  cardNameErrorEl = document.querySelector(".card_form_name_error"),
  cardNumberErrorEl = document.querySelector(".card_form_number_error"),
  cardExpDateErrorEl = document.querySelector(
    ".class_form_security_date_inputs_error"
  ),
  cardCvcErrorEl = document.querySelector(".card_form_cvc_error");

// Functions
const setValidationError = (inputElement, errorElement, errorMessage) => {
  inputElement.style.borderColor = "var(--red_clr)";
  errorElement.textContent = errorMessage;

  setTimeout(() => {
    inputElement.style.borderColor = "var(--light_grayish_violet)";
    errorElement.textContent = "";
  }, 1500);
};

cardNameFormEl.addEventListener("keyup", () => {
  let letterRegeEx = /[0-9]/g.test(cardNameFormEl.value);
  if (letterRegeEx) {
    cardNameFormEl.style.borderColor = "var(--red_clr)";
    cardNameErrorEl.textContent = "Wrong format, Letters only!";
  } else {
    cardNameFormEl.style.borderColor = "var(--light_grayish_violet)";
    cardNameErrorEl.textContent = "";
  }
});

cardNumberFormEl.addEventListener("keyup", () => {
  let letterRegeEx = /[a-zA-Z]/g.test(cardNumberFormEl.value);
  if (letterRegeEx) {
    cardNumberFormEl.style.borderColor = "var(--red_clr)";
    cardNumberErrorEl.textContent = "Wrong format, numbers only!";
  } else {
    cardNumberFormEl.style.borderColor = "var(--light_grayish_violet)";
    cardNumberErrorEl.textContent = "";
  }
});

cardYearFormEl.addEventListener("keyup", () => {
  let letterRegeEx = /[a-zA-Z]/g.test(cardYearFormEl.value);
  if (letterRegeEx) {
    cardYearFormEl.style.borderColor = "var(--red_clr)";
    cardExpDateErrorEl.textContent = "Wrong format, numbers only!";
  } else {
    cardYearFormEl.style.borderColor = "var(--light_grayish_violet)";
    cardExpDateErrorEl.textContent = "";
  }
});

cardCvcFormEl.addEventListener("keyup", () => {
  let letterRegeEx = /[a-zA-Z]/g.test(cardCvcFormEl.value);
  if (letterRegeEx) {
    cardCvcFormEl.style.borderColor = "var(--red_clr)";
    cardCvcErrorEl.textContent = "Wrong format, numbers only!";
  } else {
    cardCvcFormEl.style.borderColor = "var(--light_grayish_violet)";
    cardCvcErrorEl.textContent = "";
  }
});

theFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cardNameFormEl.value === "") {
    setValidationError(
      cardNameFormEl,
      cardNameErrorEl,
      "Card owner's name required!"
    );
    return;
  } else {
    let letterRegeEx = /[0-9]/g.test(cardNameFormEl.value);
    if (letterRegeEx) {
      setValidationError(
        cardNameFormEl,
        cardNameErrorEl,
        "Wrong format, Letters only!"
      );
      return;
    }
  }

  if (cardNumberFormEl.value === "") {
    setValidationError(
      cardNumberFormEl,
      cardNumberErrorEl,
      "Card number is required!"
    );
    return;
  } else {
    let letterRegeEx = /[a-zA-Z]/g.test(cardNumberFormEl.value);
    if (letterRegeEx) {
      setValidationError(
        cardNumberFormEl,
        cardNumberErrorEl,
        "Wrong format, numbers only!"
      );
      return;
    }
  }

  if (cardMonthFormEl.value === "") {
    setValidationError(cardMonthFormEl, cardExpDateErrorEl, "Can't be blank!");
    return;
  }

  if (cardYearFormEl.value === "") {
    setValidationError(cardYearFormEl, cardExpDateErrorEl, "Can't be blank!");
    return;
  } else if (cardYearFormEl.value < 22) {
    setValidationError(cardYearFormEl, cardExpDateErrorEl, "Card Expired!");
    return;
  } else {
    let letterRegeEx = /[a-zA-Z]/g.test(cardYearFormEl.value);
    if (letterRegeEx) {
      setValidationError(
        cardYearFormEl,
        cardExpDateErrorEl,
        "Wrong format, numbers only!"
      );
      return;
    }
  }

  if (cardCvcFormEl.value === "") {
    setValidationError(cardCvcFormEl, cardCvcErrorEl, "Can't be blank!");
    return;
  } else {
    let letterRegeEx = /[a-zA-Z]/g.test(cardCvcFormEl.value);
    if (letterRegeEx) {
      setValidationError(
        cardCvcFormEl,
        cardCvcErrorEl,
        "Wrong format, numbers only!"
      );
      return;
    }
  }

  // If everything is Okay, set the Values to the Card
  cardNameEl.textContent = cardNameFormEl.value;

  cardNumberEl.textContent = [...cardNumberFormEl.value]
    .map((d, i) => (i % 4 == 0 ? " " + d : d))
    .join("")
    .trim();

  cardExpDateEl.textContent = `${cardMonthFormEl.value}/${
    cardYearFormEl.value > 10
      ? cardYearFormEl.value
      : `0${cardYearFormEl.value}`
  }`;

  cardCvcEl.textContent = cardCvcFormEl.value;

  // Transition Screens
  formContainer.style.display = "none";
  successSubmitContainer.style.display = "flex";
});

successSubmitButton.addEventListener("click", () => {
  // Reset Card Values
  cardNameEl.textContent = "Joann Doe";
  cardNumberEl.textContent = "0000 0000 0000 0000";
  cardExpDateEl.textContent = "00/00";
  cardCvcEl.textContent = "000";
  // Reset Form Values
  cardNameFormEl.value = "";
  cardNumberFormEl.value = "";
  cardMonthFormEl.value = "";
  cardYearFormEl.value = "";
  cardCvcFormEl.value = "";

  successSubmitContainer.style.display = "none";
  formContainer.style.display = "flex";
});
