import moment from "moment";
import { TFields } from "../../../libraries/formDataHandling/types";
import { ExamFormFieldName } from "./examForm/type";
import { ExamFilterFormFieldName } from "./filter/types";

export const initialFilterFields: TFields<ExamFilterFormFieldName> = {
  dateFrom: { type: "date", value: moment().startOf("month").toISOString() },
  dateTo: { type: "date", value: moment().toISOString() },
  examName: { type: "text", value: "" },
  patientCode: { type: "number", value: "" },
};

export const initialFields: TFields<ExamFormFieldName> = {
  exam: {
    value: "",
    type: "text",
  },
  patientCode: {
    value: "",
    type: "number",
  },
  examDate: {
    value: "",
    type: "text",
  },
  note: {
    value: "",
    type: "text",
  },
  result: {
    value: "",
    type: "text",
  },
  material: {
    value: "",
    type: "text",
  },
};
