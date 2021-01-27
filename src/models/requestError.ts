/**
 * Request errors
 */
export default class RequestError extends Error {
    constructor(
        public code: number,
        public status: string
    ) {
        super(status);
    }
}