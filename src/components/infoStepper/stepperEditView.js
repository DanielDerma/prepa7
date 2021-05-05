import React from "react";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  StepButton,
  Typography,
  makeStyles,
} from "@material-ui/core";

import Labels from "./../labels";
import { Form, Formik } from "formik";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Nombres", "Apellidos", "P1", "P2", "P3", "P4", "P5", "P6"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Labels nameL="Nombres" />; // apellidos y nombres
    case 1:
      return <Labels nameL="Apellidos" />; //p1
    case 2:
      return <Labels nameL="Parcial 1" />; //p1
    case 3:
      return <Labels nameL="Parcial 2" />; //p2
    case 4:
      return <Labels nameL="Parcial 3" />; //p3
    case 5:
      return <Labels nameL="Parcial 4" />; //p4
    case 6:
      return <Labels nameL="Parcial 5" />; //p5
    case 7:
      return <Labels nameL="Parcial 6" />; //p6
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalNonLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag;

    if (!isLastStep()) {
      setSubmitting(false);
      handleNext();
      return;
    }

    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );

  const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton
                onClick={handleStep(index)}
                completed={completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" className={classes.completed}>
                      {activeStep + 1} Pasos Completados.
                    </Typography>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleComplete}
                    >
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Formik>
  );
}
