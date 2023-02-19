const noticationsCounter = document.querySelector("#notications");
const markAsRead = document.querySelector("#mark-as-read");
const unreadNotifications = document.querySelectorAll("li");

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

      decrementCounterByClickNotification();

      if (notification.classList.contains("unread")) {
        notification.classList.remove("unread");
      }
      return;
    });
  });
};

const decrementCounterByClickNotification = () => {
  const notificationUnreadCounter = Array.from(unreadNotifications).filter(
    (item) => {
      return item.classList.contains("unread");
    }
  );

  noticationsCounter.innerHTML = notificationUnreadCounter.length - 1;
};

const init = () => {
  cleanNotifications();
  removeUnreadClassByClick();
};

init();
