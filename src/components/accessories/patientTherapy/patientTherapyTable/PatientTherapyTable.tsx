import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MedicalDTO, TherapyRowDTO } from "../../../../generated";
import { IState } from "../../../../types";
import Table from "../../table/Table";
import { getTherapiesByPatientId } from "../../../../state/therapies/actions";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@material-ui/core";
import { getMedicals } from "../../../../state/medicals/actions";
import { dateComparator } from "../../../../libraries/sortUtils/sortUtils";
import InfoBox from "../../infoBox/InfoBox";
import moment from "moment";

interface IOwnProps {
  shouldUpdateTable: boolean;
  handleEdit: <T>(row: T) => void;
}

const PatientTherapyTable: FunctionComponent<IOwnProps> = ({
  shouldUpdateTable,
  handleEdit,
}) => {
  const { t } = useTranslation();

  const header = ["startDate", "endDate"];

  const label = {
    therapyID: t("common.code"),
    startDate: t("therapy.startDate"),
    endDate: t("therapy.endDate"),
    qty: t("therapy.quantity"),
    freqInDay: t("therapy.frequencyInDay"),
    freqInPeriod: t("therapy.frequencyInPeriod"),
    note: t("therapy.note"),
    medicalId: t("therapy.medical"),
  };
  const order = ["startDate", "endDate"];

  const dispatch = useDispatch();

  const data = useSelector<IState, TherapyRowDTO[]>((state) =>
    state.therapies.therapiesByPatientId.data
      ? state.therapies.therapiesByPatientId.data
      : []
  );

  const medicals = useSelector<IState, MedicalDTO[]>((state) =>
    state.medicals.medicalsOrderByName.data
      ? state.medicals.medicalsOrderByName.data
      : []
  );

  const patientCode = useSelector<IState, number | undefined>(
    (state) => state.patients.selectedPatient.data?.code
  );

  useEffect(() => {
    dispatch(getMedicals());
  }, [dispatch, getMedicals]);

  useEffect(() => {
    if (shouldUpdateTable || patientCode) {
      dispatch(getTherapiesByPatientId(patientCode));
    }
  }, [shouldUpdateTable, dispatch, patientCode, getTherapiesByPatientId]);

  const formatDataToDisplay = (data: TherapyRowDTO[]) => {
    return data
      .map((item) => {
        const medical = medicals.find((medoc) => medoc.code === item.medicalId);
        return {
          therapyID: item.therapyID,
          medicalId: medical ? medical.description : item.medicalId,
          startDate: item.startDate
            ? moment(item.startDate).isValid()
              ? moment(item.startDate).format("DD/MM/YYYY")
              : moment(+item.startDate).format("DD/MM/YYYY")
            : "",
          endDate: item.endDate
            ? moment(item.endDate).isValid()
              ? moment(item.endDate).format("DD/MM/YYYY")
              : moment(+item.endDate).format("DD/MM/YYYY")
            : "",
          qty: item.qty,
          freqInDay: item.freqInDay,
          freqInPeriod: item.freqInPeriod,
          note: item.note,
        };
      })
      .sort(dateComparator("desc", "startDate"));
  };
  const therapyStatus = useSelector<IState, string | undefined>(
    (state) => state.therapies.therapiesByPatientId.status
  );
  const onDelete = () => {
    console.log("delete");
  };

  const onEdit = (row: any) => {
    handleEdit(data.find((item) => item.therapyID === row.therapyID));
  };

  const onEView = () => {};

  return (
    <div className="patientTherapyTable">
      {(() => {
        switch (therapyStatus) {
          case "FAIL":
            return (
              <InfoBox type="error" message={t("common.somethingwrong")} />
            );
          case "LOADING":
            return (
              <CircularProgress
                style={{ marginLeft: "50%", position: "relative" }}
              />
            );

          case "SUCCESS":
            return (
              <Table
                rowData={formatDataToDisplay(data)}
                compareRows={dateComparator}
                tableHeader={header}
                labelData={label}
                columnsOrder={order}
                rowsPerPage={5}
                onDelete={onDelete}
                isCollapsabile={true}
                onEdit={onEdit}
                onView={onEView}
              />
            );

          case "SUCCESS_EMPTY":
            return <InfoBox type="warning" message={t("common.emptydata")} />;

          default:
            return;
        }
      })()}
    </div>
  );
};

export default PatientTherapyTable;
