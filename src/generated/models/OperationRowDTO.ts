// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AdmissionDTO,
    BillDTO,
    OpdDTO,
    OperationDTO,
} from './';

/**
 * @export
 * @interface OperationRowDTO
 */
export interface OperationRowDTO {
    /**
     * @type {AdmissionDTO}
     * @memberof OperationRowDTO
     */
    admission?: AdmissionDTO;
    /**
     * @type {BillDTO}
     * @memberof OperationRowDTO
     */
    bill?: BillDTO;
    /**
     * @type {number}
     * @memberof OperationRowDTO
     */
    id?: number;
    /**
     * @type {string}
     * @memberof OperationRowDTO
     */
    opDate?: string;
    /**
     * @type {string}
     * @memberof OperationRowDTO
     */
    opResult?: string;
    /**
     * @type {OpdDTO}
     * @memberof OperationRowDTO
     */
    opd?: OpdDTO;
    /**
     * @type {OperationDTO}
     * @memberof OperationRowDTO
     */
    operation?: OperationDTO;
    /**
     * @type {string}
     * @memberof OperationRowDTO
     */
    prescriber?: string;
    /**
     * @type {string}
     * @memberof OperationRowDTO
     */
    remarks?: string;
    /**
     * @type {number}
     * @memberof OperationRowDTO
     */
    transUnit?: number;
}
