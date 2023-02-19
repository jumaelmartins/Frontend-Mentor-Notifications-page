const noticationsCounter = document.querySelector("#notications");
const markAsRead = document.querySelector("#mark-as-read");
const unreadNotifications = document.querySelectorAll("li");

console.log(noticationsCounter, markAsRead, unreadNotifications);

const cleanNotifications = () => {
  markAsRead.addEventListener("click", (e) => {
    noticationsCounter.innerHTML = 0;
  });
};

const init = () => {
  cleanNotifications();
};

init();
