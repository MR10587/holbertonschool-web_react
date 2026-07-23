import { PureComponent } from "react";

class NotificationItem extends PureComponent {
  static defaultProps = {
    id: 0,
    type: "default",
    html: null,
    value: "",
    markAsRead: () => {},
  };

  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    const colorClass =
      type === "urgent"
        ? "text-urgent-notification-item"
        : "text-default-notification-item";

    const itemClass = `${colorClass} my-1 text-[12px]`;

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={itemClass}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={html}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={itemClass}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
