import { PatientDTO } from "../../../generated";
import { IForm } from "../../../libraries/formDataHandling/types";
interface IOwnProps {
  profilePicture?: any;
  shouldResetForm: boolean;
  resetFormCallback: () => void;
}

export type TAgeFieldName = "age" | "agetype" | "birthDate";

export type TProps = IForm<TPatientDataFormFieldName, PatientDTO> & IOwnProps;

export type TPatientDataFormFieldName =
  | "firstName"
  | "secondName"
  | "birthDate"
  | "age"
  | "agetype"
  | "sex"
  | "height"
  | "weight"
  | "address"
  | "city"
  | "telephone"
  | "note"
  | "mother_name"
  | "mother"
  | "father_name"
  | "father"
  | "bloodType"
  | "hasInsurance"
  | "parentTogether"
  | "taxCode"
  | "blobPhoto";
