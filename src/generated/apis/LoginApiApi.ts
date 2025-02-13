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
import { BaseAPI, HttpHeaders, OperationOpts, RawAjaxResponse } from '../runtime';

/**
 * no description
 */
export class LoginApiApi extends BaseAPI {

    /**
     * Logout the current user.
     * Logout
     */
    logoutUsingPOST(): Observable<void>
    logoutUsingPOST(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>>
    logoutUsingPOST(opts?: OperationOpts): Observable<void | RawAjaxResponse<void>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<void>({
            url: '/auth/logout',
            method: 'POST',
            headers,
        }, opts?.responseOpts);
    };

}
