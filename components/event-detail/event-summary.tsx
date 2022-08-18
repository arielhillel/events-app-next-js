import classes from "../../styles/event-summary.module.scss";

const EventSummary = (props: any) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
