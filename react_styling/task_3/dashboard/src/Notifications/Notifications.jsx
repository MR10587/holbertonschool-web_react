import { Component } from "react";
import closeButton from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  static defaultProps = {
    notifications: [],
    displayDrawer: false,
  };

  handleClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className="notification-title mr-5 mt-2.5 text-right text-[14px] font-bold">
          Your Notifications
        </div>

        {displayDrawer && (
          <div className="notification-items mx-5 border border-dashed border-[var(--color-main)] p-2.5 text-[12px]">
            {notifications.length > 0 && (
              <button
                type="button"
                aria-label="Close"
                onClick={this.handleClick}
                className="absolute right-2.5 top-2.5 cursor-pointer border-none bg-transparent"
              >
                <img
                  src={closeButton}
                  alt="Close"
                  className="block h-[10px] w-[10px]"
                />
              </button>
            )}

            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>

                <ul className="list-disc pl-7">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

export default Notifications;
