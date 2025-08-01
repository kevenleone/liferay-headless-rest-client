// This file is auto-generated by @hey-api/openapi-ts

export type Experiment = {
    readonly dateCreated?: string;
    readonly dateModified?: string;
    readonly description?: string;
    readonly id?: string;
    readonly name?: string;
    readonly siteId?: number;
    status?: string;
    winnerVariantId?: number;
    readonly 'x-class-name'?: string;
};

export type ExperimentRun = {
    confidenceLevel: number;
    experimentVariants: Array<ExperimentVariant>;
    readonly status?: string;
    readonly 'x-class-name'?: string;
};

export type ExperimentVariant = {
    id?: string;
    trafficSplit?: number;
    readonly 'x-class-name'?: string;
};

export type Status = {
    status: string;
    winnerVariantId?: string;
    readonly 'x-class-name'?: string;
};

export type DeleteExperimentData = {
    body?: never;
    path: {
        experimentId: string;
    };
    query?: never;
    url: '/o/segments-asah/v1.0/experiments/{experimentId}';
};

export type DeleteExperimentResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetExperimentData = {
    body?: never;
    path: {
        experimentId: string;
    };
    query?: never;
    url: '/o/segments-asah/v1.0/experiments/{experimentId}';
};

export type GetExperimentResponses = {
    /**
     * default response
     */
    default: Experiment;
};

export type GetExperimentResponse = GetExperimentResponses[keyof GetExperimentResponses];

export type DeleteExperimentBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/segments-asah/v1.0/experiments/batch';
};

export type DeleteExperimentBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PostExperimentRunData = {
    body?: ExperimentRun;
    path: {
        experimentId: string;
    };
    query?: never;
    url: '/o/segments-asah/v1.0/experiments/{experimentId}/run';
};

export type PostExperimentRunResponses = {
    /**
     * default response
     */
    default: ExperimentRun;
};

export type PostExperimentRunResponse = PostExperimentRunResponses[keyof PostExperimentRunResponses];

export type PostExperimentStatusData = {
    body?: Status;
    path: {
        experimentId: string;
    };
    query?: never;
    url: '/o/segments-asah/v1.0/experiments/{experimentId}/status';
};

export type PostExperimentStatusResponses = {
    /**
     * default response
     */
    default: Experiment;
};

export type PostExperimentStatusResponse = PostExperimentStatusResponses[keyof PostExperimentStatusResponses];

export type PostExperimentStatusBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path: {
        experimentId: string;
    };
    query?: {
        callbackURL?: string;
    };
    url: '/o/segments-asah/v1.0/experiments/{experimentId}/status/batch';
};

export type PostExperimentStatusBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type ClientOptions = {
    baseUrl: 'http://localhost:8080' | (string & {});
};