// Це я написала по Репеті, до того, як дізналася, що можна було простіше)

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
// };
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector("[data-action=increment]");
//   refs.decrementBtn = refs.container.querySelector("[data-action=decrement]");
//   refs.value = refs.container.querySelector("#value");
//   return refs;
// };
// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener("click", () => {
//     this.increment();
//     this.updateValueVisual();
//   });
//   this._refs.decrementBtn.addEventListener("click", () => {
//     this.decrement();

//     this.updateValueVisual();
//   });
// };
// CounterPlugin.prototype.updateValueVisual = function () {
//   this._refs.value.textContent = this._value;
// };
// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };
// const counterFirst = new CounterPlugin({ rootSelector: "#counter", step: 1 });
// console.log("counterFirst", counterFirst);

let counterValue = 0;
const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");
const valueVisual = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueVisual.textContent = counterValue;
});
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueVisual.textContent = counterValue;
});
