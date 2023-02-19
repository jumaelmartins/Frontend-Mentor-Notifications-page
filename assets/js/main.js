const noticationsCounter = document.querySelector("#notications");
const markAsRead = document.querySelector("#mark-as-read");
const unreadNotifications = document.querySelectorAll("li");

console.log(noticationsCounter, markAsRead, unreadNotifications);

const cleanNotifications = () => {
  markAsRead.addEventListener("click", (e) => {
    noticationsCounter.innerHTML = 0;
    removeUnreadClass();
  });
};

const removeUnreadClass = () => {
  unreadNotifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
};

const removeUnreadClassByClick = () => {
  unreadNotifications.forEach((item) => {
    item.addEventListener("click", (e) => {
      const notification = item.closest("li");

      if (notification.classList.contains("unread")) {
        notification.classList.remove("unread");
      }
      return;
    });
  });
};

const init = () => {
  cleanNotifications();
  removeUnreadClassByClick();
};

init();
