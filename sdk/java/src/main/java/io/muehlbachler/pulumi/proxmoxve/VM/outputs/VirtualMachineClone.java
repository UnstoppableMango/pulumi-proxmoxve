// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package io.muehlbachler.pulumi.proxmoxve.VM.outputs;

import com.pulumi.core.annotations.CustomType;
import java.lang.Boolean;
import java.lang.Integer;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class VirtualMachineClone {
    /**
     * @return The identifier for the datastore to create the
     * cloud-init disk in (defaults to `local-lvm`).
     * 
     */
    private @Nullable String datastoreId;
    /**
     * @return Full or linked clone (defaults to `true`).
     * 
     */
    private @Nullable Boolean full;
    /**
     * @return The name of the node to assign the virtual machine
     * to.
     * 
     */
    private @Nullable String nodeName;
    /**
     * @return Number of retries in Proxmox for clone vm.
     * Sometimes Proxmox errors with timeout when creating multiple clones at
     * once.
     * 
     */
    private @Nullable Integer retries;
    /**
     * @return The VM identifier.
     * 
     */
    private Integer vmId;

    private VirtualMachineClone() {}
    /**
     * @return The identifier for the datastore to create the
     * cloud-init disk in (defaults to `local-lvm`).
     * 
     */
    public Optional<String> datastoreId() {
        return Optional.ofNullable(this.datastoreId);
    }
    /**
     * @return Full or linked clone (defaults to `true`).
     * 
     */
    public Optional<Boolean> full() {
        return Optional.ofNullable(this.full);
    }
    /**
     * @return The name of the node to assign the virtual machine
     * to.
     * 
     */
    public Optional<String> nodeName() {
        return Optional.ofNullable(this.nodeName);
    }
    /**
     * @return Number of retries in Proxmox for clone vm.
     * Sometimes Proxmox errors with timeout when creating multiple clones at
     * once.
     * 
     */
    public Optional<Integer> retries() {
        return Optional.ofNullable(this.retries);
    }
    /**
     * @return The VM identifier.
     * 
     */
    public Integer vmId() {
        return this.vmId;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(VirtualMachineClone defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable String datastoreId;
        private @Nullable Boolean full;
        private @Nullable String nodeName;
        private @Nullable Integer retries;
        private Integer vmId;
        public Builder() {}
        public Builder(VirtualMachineClone defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.datastoreId = defaults.datastoreId;
    	      this.full = defaults.full;
    	      this.nodeName = defaults.nodeName;
    	      this.retries = defaults.retries;
    	      this.vmId = defaults.vmId;
        }

        @CustomType.Setter
        public Builder datastoreId(@Nullable String datastoreId) {
            this.datastoreId = datastoreId;
            return this;
        }
        @CustomType.Setter
        public Builder full(@Nullable Boolean full) {
            this.full = full;
            return this;
        }
        @CustomType.Setter
        public Builder nodeName(@Nullable String nodeName) {
            this.nodeName = nodeName;
            return this;
        }
        @CustomType.Setter
        public Builder retries(@Nullable Integer retries) {
            this.retries = retries;
            return this;
        }
        @CustomType.Setter
        public Builder vmId(Integer vmId) {
            this.vmId = Objects.requireNonNull(vmId);
            return this;
        }
        public VirtualMachineClone build() {
            final var _resultValue = new VirtualMachineClone();
            _resultValue.datastoreId = datastoreId;
            _resultValue.full = full;
            _resultValue.nodeName = nodeName;
            _resultValue.retries = retries;
            _resultValue.vmId = vmId;
            return _resultValue;
        }
    }
}
