import React, { FC, useEffect, useRef, useState } from "react";
import PatientTherapyTable from "./patientTherapyTable/PatientTherapyTable";
import TherapyForm from "./therapyForm/TherapyForm";
import "./styles.scss";
import {
  IDispatchProps,
  IStateProps,
  TActivityTransitionState,
  TProps,
} from "./types";
import { initialFields } from "./consts";
import { useTranslation } from "react-i18next/*";
import { scrollToElement } from "../../../libraries/uiUtils/scrollToElement";
import { TherapyDTO } from "../../../generated";
const PatientTherapy: FC<TProps> = ({
  createTherapy,
  createTherapyReset,
  isLoading,
  hasSucceeded,
  hasFailed,
}) => {
  const { t } = useTranslation();
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const [shouldResetForm, setShouldResetForm] = useState(false);
  const [shouldUpdateTable, setShouldUpdateTable] = useState(false);
  const [activityTransitionState, setActivityTransitionState] =
    useState<TActivityTransitionState>("IDLE");

  useEffect(() => {
    if (hasFailed) {
      scrollToElement(infoBoxRef.current);
    }
  }, [hasFailed]);

  useEffect(() => {
    if (activityTransitionState === "TO_RESET") {
      createTherapyReset();
      setShouldResetForm(true);
      setShouldUpdateTable(true);
    }
  }, [activityTransitionState, createTherapyReset]);

  const onSubmit = (therapy: TherapyDTO) => {
    setShouldResetForm(false);
    createTherapy(therapy);
  };

  const resetFormCallback = () => {
    setShouldResetForm(false);
    setShouldUpdateTable(false);
    setActivityTransitionState("IDLE");
    scrollToElement(null);
  };

  return (
    <div className="patientTherapy">
      <TherapyForm
        fields={initialFields}
        onSubmit={onSubmit}
        submitButtonLabel={t("common.savetriage")}
        resetButtonLabel={t("common.discard")}
        shouldResetForm={shouldResetForm}
        resetFormCallback={resetFormCallback}
        isLoading={isLoading}
      />
      <PatientTherapyTable shouldUpdateTable={shouldUpdateTable} />
    </div>
  );
};

export default PatientTherapy;
