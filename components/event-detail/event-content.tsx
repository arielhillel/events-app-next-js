import classes from "../../styles/event-content.module.scss";

const EventContent = (props: any) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
