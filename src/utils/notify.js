import { NotificationManager } from "react-notifications"

const success = (msg, title) => {
    NotificationManager.success(msg, title);
}

const warning = (msg, title) => {
    NotificationManager.warning(msg, title);
}

const info = (msg, title) => {
    NotificationManager.info(msg, title);
}

const danger = (msg, title) => {
    NotificationManager.danger(msg, title);
}

const notify = {
    success,
    warning, 
    info,
    danger
};

export default notify;