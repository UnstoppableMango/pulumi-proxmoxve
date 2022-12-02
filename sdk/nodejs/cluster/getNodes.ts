// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export function getNodes(opts?: pulumi.InvokeOptions): Promise<GetNodesResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("proxmoxve:Cluster/getNodes:getNodes", {
    }, opts);
}

/**
 * A collection of values returned by getNodes.
 */
export interface GetNodesResult {
    readonly cpuCounts: number[];
    readonly cpuUtilizations: number[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly memoryAvailables: number[];
    readonly memoryUseds: number[];
    readonly names: string[];
    readonly onlines: boolean[];
    readonly sslFingerprints: string[];
    readonly supportLevels: string[];
    readonly uptimes: number[];
}
