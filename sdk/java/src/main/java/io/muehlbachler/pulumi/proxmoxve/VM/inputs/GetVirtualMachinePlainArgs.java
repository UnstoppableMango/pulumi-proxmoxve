// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package io.muehlbachler.pulumi.proxmoxve.VM.inputs;

import com.pulumi.core.annotations.Import;
import java.lang.Integer;
import java.lang.String;
import java.util.Objects;


public final class GetVirtualMachinePlainArgs extends com.pulumi.resources.InvokeArgs {

    public static final GetVirtualMachinePlainArgs Empty = new GetVirtualMachinePlainArgs();

    /**
     * The node name.
     * 
     */
    @Import(name="nodeName", required=true)
    private String nodeName;

    /**
     * @return The node name.
     * 
     */
    public String nodeName() {
        return this.nodeName;
    }

    /**
     * The VM identifier.
     * 
     */
    @Import(name="vmId", required=true)
    private Integer vmId;

    /**
     * @return The VM identifier.
     * 
     */
    public Integer vmId() {
        return this.vmId;
    }

    private GetVirtualMachinePlainArgs() {}

    private GetVirtualMachinePlainArgs(GetVirtualMachinePlainArgs $) {
        this.nodeName = $.nodeName;
        this.vmId = $.vmId;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(GetVirtualMachinePlainArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private GetVirtualMachinePlainArgs $;

        public Builder() {
            $ = new GetVirtualMachinePlainArgs();
        }

        public Builder(GetVirtualMachinePlainArgs defaults) {
            $ = new GetVirtualMachinePlainArgs(Objects.requireNonNull(defaults));
        }

        /**
         * @param nodeName The node name.
         * 
         * @return builder
         * 
         */
        public Builder nodeName(String nodeName) {
            $.nodeName = nodeName;
            return this;
        }

        /**
         * @param vmId The VM identifier.
         * 
         * @return builder
         * 
         */
        public Builder vmId(Integer vmId) {
            $.vmId = vmId;
            return this;
        }

        public GetVirtualMachinePlainArgs build() {
            $.nodeName = Objects.requireNonNull($.nodeName, "expected parameter 'nodeName' to be non-null");
            $.vmId = Objects.requireNonNull($.vmId, "expected parameter 'vmId' to be non-null");
            return $;
        }
    }

}
