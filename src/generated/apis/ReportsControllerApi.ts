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
import { BaseAPI, HttpHeaders } from '../runtime';

/**
 * no description
 */
export class ReportsControllerApi extends BaseAPI {

    /**
     * printDiseasesListPdf
     */
    printDiseasesListPdfUsingGET = (): Observable<string> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            path: '/reports/diseases-list',
            method: 'GET',
            headers,
        });
    };

    /**
     * printExamsListPdf
     */
    printExamsListPdfUsingGET = (): Observable<string> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            path: '/reports/exams-list',
            method: 'GET',
            headers,
        });
    };

}
