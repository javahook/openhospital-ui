import moment from "moment";
import { Dispatch } from "redux";
import { OpdControllerApi, OpdDTO } from "../../generated";
import { customConfiguration } from "../../libraries/apiUtils/configuration";
import { IAction } from "../types";
import {
  CREATE_OPD_FAIL,
  CREATE_OPD_LOADING,
  CREATE_OPD_RESET,
  CREATE_OPD_SUCCESS,
  DELETE_OPD_FAIL,
  DELETE_OPD_LOADING,
  DELETE_OPD_RESET,
  DELETE_OPD_SUCCESS,
  GET_OPD_FAIL,
  GET_OPD_LOADING,
  GET_OPD_RESET,
  GET_OPD_SUCCESS,
  GET_OPD_SUCCESS_EMPTY,
  SEARCH_OPD_FAIL,
  SEARCH_OPD_LOADING,
  SEARCH_OPD_RESET,
  SEARCH_OPD_SUCCESS,
  SEARCH_OPD_SUCCESS_EMPTY,
  UPDATE_OPD_FAIL,
  UPDATE_OPD_LOADING,
  UPDATE_OPD_RESET,
  UPDATE_OPD_SUCCESS,
} from "./consts";

const opdControllerApi = new OpdControllerApi(customConfiguration());

export const createOpd =
  (opdDTO: OpdDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_OPD_LOADING,
    });
    opdControllerApi.newOpdUsingPOST({ opdDTO }).subscribe(
      () => {
        dispatch({
          type: CREATE_OPD_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: CREATE_OPD_FAIL,
          error,
        });
      }
    );
  };

export const createOpdReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: CREATE_OPD_RESET,
    });
  };

export const updateOpdReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_OPD_RESET,
    });
  };

export const getOpds =
  (code: number | undefined) =>
  (dispatch: Dispatch<IAction<OpdDTO[], {}>>): void => {
    dispatch({
      type: GET_OPD_LOADING,
    });

    if (code) {
      opdControllerApi
        .getOpdByPatientUsingGET({
          pcode: code,
        })
        .subscribe(
          (payload) => {
            if (Array.isArray(payload) && payload.length > 0) {
              dispatch({
                type: GET_OPD_SUCCESS,
                payload: payload,
              });
            } else {
              dispatch({
                type: GET_OPD_SUCCESS_EMPTY,
                payload: [],
              });
            }
          },
          (error) => {
            dispatch({
              type: GET_OPD_FAIL,
              error,
            });
          }
        );
    } else {
      dispatch({
        type: GET_OPD_FAIL,
        error: "patient code should not be empty",
      });
    }
  };

export const searchOpds =
  (query: any) =>
  (dispatch: Dispatch<IAction<OpdDTO[], {}>>): void => {
    dispatch({
      type: SEARCH_OPD_LOADING,
    });

    opdControllerApi
      .getOpdByDatesUsingGET({
        sex: query.sex,
        newPatient: query.newPatient,
        dateTo: query.dateTo ?? moment().add("-30", "days").toISOString(),
        dateFrom: query.dateFrom ?? moment().toISOString(),
        ageFrom: isNaN(query.ageFrom) ? null : query.ageFrom,
        ageTo: isNaN(query.ageTo) ? null : query.ageTo,
        diseaseCode: query.diseaseCode,
        diseaseTypeCode: query.diseaseTypeCode,
        patientCode: isNaN(query.patientCode) ? null : query.patientCode,
      })
      .subscribe(
        (payload) => {
          if (Array.isArray(payload) && payload.length > 0) {
            dispatch({
              type: SEARCH_OPD_SUCCESS,
              payload: payload,
            });
          } else {
            dispatch({
              type: SEARCH_OPD_SUCCESS_EMPTY,
              payload: [],
            });
          }
        },
        (error) => {
          dispatch({
            type: SEARCH_OPD_FAIL,
            error,
          });
        }
      );
  };

export const getOpdsReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: GET_OPD_RESET,
    });
  };
export const searchOpdsReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: SEARCH_OPD_RESET,
    });
  };

export const updateOpd =
  (code: number, opdDTO: OpdDTO) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: UPDATE_OPD_LOADING,
    });
    opdControllerApi.updateOpdUsingPUT({ code, opdDTO }).subscribe(
      () => {
        dispatch({
          type: UPDATE_OPD_SUCCESS,
        });
      },
      (error) => {
        dispatch({
          type: UPDATE_OPD_FAIL,
          error,
        });
      }
    );
  };
export const deleteOpdReset =
  () =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    dispatch({
      type: DELETE_OPD_RESET,
    });
  };

export const deleteOpd =
  (code: number | undefined) =>
  (dispatch: Dispatch<IAction<null, {}>>): void => {
    if (code) {
      dispatch({
        type: DELETE_OPD_LOADING,
      });
      opdControllerApi.deleteOpdUsingDELETE({ code }).subscribe(
        () => {
          dispatch({
            type: DELETE_OPD_SUCCESS,
          });
        },
        (error) => {
          dispatch({
            type: DELETE_OPD_FAIL,
            error,
          });
        }
      );
    } else {
      dispatch({
        type: DELETE_OPD_FAIL,
        error: "OPD code should not be empty",
      });
    }
  };
