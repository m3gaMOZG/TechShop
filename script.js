console.log("JavaScript подключён!");

// Обработчик кнопки «Купить»
document.querySelector("#buy").addEventListener("click", function() {
  document.querySelector("#message").textContent =
    "Отлично! Товар добавлен в корзину.";
});

// Обработчик кнопки «Подробнее»
document.querySelector("#details").addEventListener("click", function() {
  document.querySelector("#info").textContent =
    "Гарантия: 12 месяцев. Подключение: Bluetooth 5.3. В комплекте — зарядный кабель.";
});

// Обработчик кнопки «Доставка»
document.querySelector("#delivery").addEventListener("click", function() {
  document.querySelector("#delivery-info").textContent =
    "Доставка по городу — 300 ₽";
});

// Дополнительная кнопка «Очистить»
document.querySelector("#clear").addEventListener("click", function() {
  document.querySelector("#message").textContent = "";
});
