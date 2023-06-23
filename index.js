let ob1 = false;
let ob2 = false;
let ob3 = false;

class Click {
  constructor() {
    this.handlers = []; // observers
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      return item !== fn;
    });
  }

  fire(o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}

const click = new Click();
//let count = 0;
function notifyClick() {
  // count = count +1 ;


  if (ob1) {
    document.getElementById("ob1").textContent = "New Notification";
  }
  if (ob2) {
    document.getElementById("ob2").textContent = "New Notification";
  }
  if (ob3) {
    document.getElementById("ob3").textContent = "New Notification";
  }
}

function sub(observer) {
  if (observer === "ob1") {
    ob1 = true;
    click.subscribe(notifyClick);
  } else if (observer === "ob2") {
    ob2 = true;
    click.subscribe(notifyClick);
  } else if (observer === "ob3") {
    ob3 = true;
    click.subscribe(notifyClick);
  }
}

function unsub(observer) {
  if (observer === "ob1") {
    ob1 = false;
    click.unsubscribe(notifyClick);
    document.getElementById("ob1").textContent = "unsubscribed";
  } else if (observer === "ob2") {
    ob2 = false;
    click.unsubscribe(notifyClick);
    document.getElementById("ob2").textContent = "unsubscribed";
  } else if (observer === "ob3") {
    ob3 = false;
    click.unsubscribe(notifyClick);
    document.getElementById("ob3").textContent = "unsubscribed";
  }
}
