const sayHello = function(string, count) {
  // Now printing 'Hello'...
  if (count === 1) { // Stop the press!
    clearInterval(timer);
    return string;
  }
  return string + sayHello(string, count - 1);
}
const timer = setInterval(sayHello, 3000);

console.log(sayHello("Hello\n", 5));

// clearInterval(timer);