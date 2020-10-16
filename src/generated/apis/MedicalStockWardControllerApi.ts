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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    MedicalWardDTO,
    MovementWardDTO,
} from '../models';

export interface GetCurrentQuantityInWardUsingGETRequest {
    medId: number;
    wardCode: string;
}

export interface GetMedicalsWardUsingGETRequest {
    wardCode: string;
}

export interface GetMovementWardUsingGETRequest {
    from: string;
    to: string;
    wardCode: string;
}

export interface GetWardMovementsToWardUsingGETRequest {
    from: string;
    targetWardCode: string;
    to: string;
}

export interface NewMovementWardUsingPOSTRequest {
    newMovementDTOs: Array<MovementWardDTO>;
}

export interface NewMovementWardUsingPOST1Request {
    newMovementDTO: MovementWardDTO;
}

export interface UpdateMovementWardUsingPUTRequest {
    movementWardDTO: MovementWardDTO;
}

/**
 * no description
 */
export class MedicalStockWardControllerApi extends BaseAPI {

    /**
     * getCurrentQuantityInWard
     */
    getCurrentQuantityInWardUsingGET = ({ medId, wardCode }: GetCurrentQuantityInWardUsingGETRequest): Observable<number> => {
        throwIfNullOrUndefined(medId, 'getCurrentQuantityInWardUsingGET');
        throwIfNullOrUndefined(wardCode, 'getCurrentQuantityInWardUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'med_id': medId,
        };

        return this.request<number>({
            path: '/medicalstockward/current/{ward_code}'.replace('{ward_code}', encodeURI(wardCode)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * getMedicalsWard
     */
    getMedicalsWardUsingGET = ({ wardCode }: GetMedicalsWardUsingGETRequest): Observable<Array<MedicalWardDTO>> => {
        throwIfNullOrUndefined(wardCode, 'getMedicalsWardUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<MedicalWardDTO>>({
            path: '/medicalstockward/{ward_code}'.replace('{ward_code}', encodeURI(wardCode)),
            method: 'GET',
            headers,
        });
    };

    /**
     * getMovementWard
     */
    getMovementWardUsingGET = ({ from, to, wardCode }: GetMovementWardUsingGETRequest): Observable<Array<MovementWardDTO>> => {
        throwIfNullOrUndefined(from, 'getMovementWardUsingGET');
        throwIfNullOrUndefined(to, 'getMovementWardUsingGET');
        throwIfNullOrUndefined(wardCode, 'getMovementWardUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'from': (from as any).toISOString(),
            'to': (to as any).toISOString(),
        };

        return this.request<Array<MovementWardDTO>>({
            path: '/medicalstockward/movements/{ward_code}'.replace('{ward_code}', encodeURI(wardCode)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * getMovementWard
     */
    getMovementWardUsingGET1 = (): Observable<Array<MovementWardDTO>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<MovementWardDTO>>({
            path: '/medicalstockward/movements',
            method: 'GET',
            headers,
        });
    };

    /**
     * getWardMovementsToWard
     */
    getWardMovementsToWardUsingGET = ({ from, targetWardCode, to }: GetWardMovementsToWardUsingGETRequest): Observable<Array<MovementWardDTO>> => {
        throwIfNullOrUndefined(from, 'getWardMovementsToWardUsingGET');
        throwIfNullOrUndefined(targetWardCode, 'getWardMovementsToWardUsingGET');
        throwIfNullOrUndefined(to, 'getWardMovementsToWardUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'from': (from as any).toISOString(),
            'to': (to as any).toISOString(),
        };

        return this.request<Array<MovementWardDTO>>({
            path: '/medicalstockward/movements/to/{target_ward_code}'.replace('{target_ward_code}', encodeURI(targetWardCode)),
            method: 'GET',
            headers,
            query,
        });
    };

    /**
     * newMovementWard
     */
    newMovementWardUsingPOST = ({ newMovementDTOs }: NewMovementWardUsingPOSTRequest): Observable<boolean> => {
        throwIfNullOrUndefined(newMovementDTOs, 'newMovementWardUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            path: '/medicalstockward/movements/all',
            method: 'POST',
            headers,
            body: newMovementDTOs,
        });
    };

    /**
     * newMovementWard
     */
    newMovementWardUsingPOST1 = ({ newMovementDTO }: NewMovementWardUsingPOST1Request): Observable<boolean> => {
        throwIfNullOrUndefined(newMovementDTO, 'newMovementWardUsingPOST1');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            path: '/medicalstockward/movements',
            method: 'POST',
            headers,
            body: newMovementDTO,
        });
    };

    /**
     * updateMovementWard
     */
    updateMovementWardUsingPUT = ({ movementWardDTO }: UpdateMovementWardUsingPUTRequest): Observable<boolean> => {
        throwIfNullOrUndefined(movementWardDTO, 'updateMovementWardUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            path: '/medicalstockward/movements',
            method: 'PUT',
            headers,
            body: movementWardDTO,
        });
    };

}
