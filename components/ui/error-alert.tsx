import classes from "../../styles/error-alert.module.scss";

function ErrorAlert(props: any) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
