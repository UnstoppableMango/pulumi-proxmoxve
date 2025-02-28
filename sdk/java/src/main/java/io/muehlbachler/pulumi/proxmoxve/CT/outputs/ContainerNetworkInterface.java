// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package io.muehlbachler.pulumi.proxmoxve.CT.outputs;

import com.pulumi.core.annotations.CustomType;
import java.lang.Boolean;
import java.lang.Double;
import java.lang.Integer;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class ContainerNetworkInterface {
    /**
     * @return The name of the network bridge (defaults
     * to `vmbr0`).
     * 
     */
    private @Nullable String bridge;
    /**
     * @return Whether to enable the network device (defaults
     * to `true`).
     * 
     */
    private @Nullable Boolean enabled;
    /**
     * @return Whether this interface&#39;s firewall rules should be
     * used (defaults to `false`).
     * 
     */
    private @Nullable Boolean firewall;
    /**
     * @return The MAC address.
     * 
     */
    private @Nullable String macAddress;
    /**
     * @return Maximum transfer unit of the interface. Cannot be
     * larger than the bridge&#39;s MTU.
     * 
     */
    private @Nullable Integer mtu;
    /**
     * @return The network interface name.
     * 
     */
    private String name;
    /**
     * @return The rate limit in megabytes per second.
     * 
     */
    private @Nullable Double rateLimit;
    /**
     * @return The VLAN identifier.
     * 
     */
    private @Nullable Integer vlanId;

    private ContainerNetworkInterface() {}
    /**
     * @return The name of the network bridge (defaults
     * to `vmbr0`).
     * 
     */
    public Optional<String> bridge() {
        return Optional.ofNullable(this.bridge);
    }
    /**
     * @return Whether to enable the network device (defaults
     * to `true`).
     * 
     */
    public Optional<Boolean> enabled() {
        return Optional.ofNullable(this.enabled);
    }
    /**
     * @return Whether this interface&#39;s firewall rules should be
     * used (defaults to `false`).
     * 
     */
    public Optional<Boolean> firewall() {
        return Optional.ofNullable(this.firewall);
    }
    /**
     * @return The MAC address.
     * 
     */
    public Optional<String> macAddress() {
        return Optional.ofNullable(this.macAddress);
    }
    /**
     * @return Maximum transfer unit of the interface. Cannot be
     * larger than the bridge&#39;s MTU.
     * 
     */
    public Optional<Integer> mtu() {
        return Optional.ofNullable(this.mtu);
    }
    /**
     * @return The network interface name.
     * 
     */
    public String name() {
        return this.name;
    }
    /**
     * @return The rate limit in megabytes per second.
     * 
     */
    public Optional<Double> rateLimit() {
        return Optional.ofNullable(this.rateLimit);
    }
    /**
     * @return The VLAN identifier.
     * 
     */
    public Optional<Integer> vlanId() {
        return Optional.ofNullable(this.vlanId);
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(ContainerNetworkInterface defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable String bridge;
        private @Nullable Boolean enabled;
        private @Nullable Boolean firewall;
        private @Nullable String macAddress;
        private @Nullable Integer mtu;
        private String name;
        private @Nullable Double rateLimit;
        private @Nullable Integer vlanId;
        public Builder() {}
        public Builder(ContainerNetworkInterface defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.bridge = defaults.bridge;
    	      this.enabled = defaults.enabled;
    	      this.firewall = defaults.firewall;
    	      this.macAddress = defaults.macAddress;
    	      this.mtu = defaults.mtu;
    	      this.name = defaults.name;
    	      this.rateLimit = defaults.rateLimit;
    	      this.vlanId = defaults.vlanId;
        }

        @CustomType.Setter
        public Builder bridge(@Nullable String bridge) {
            this.bridge = bridge;
            return this;
        }
        @CustomType.Setter
        public Builder enabled(@Nullable Boolean enabled) {
            this.enabled = enabled;
            return this;
        }
        @CustomType.Setter
        public Builder firewall(@Nullable Boolean firewall) {
            this.firewall = firewall;
            return this;
        }
        @CustomType.Setter
        public Builder macAddress(@Nullable String macAddress) {
            this.macAddress = macAddress;
            return this;
        }
        @CustomType.Setter
        public Builder mtu(@Nullable Integer mtu) {
            this.mtu = mtu;
            return this;
        }
        @CustomType.Setter
        public Builder name(String name) {
            this.name = Objects.requireNonNull(name);
            return this;
        }
        @CustomType.Setter
        public Builder rateLimit(@Nullable Double rateLimit) {
            this.rateLimit = rateLimit;
            return this;
        }
        @CustomType.Setter
        public Builder vlanId(@Nullable Integer vlanId) {
            this.vlanId = vlanId;
            return this;
        }
        public ContainerNetworkInterface build() {
            final var _resultValue = new ContainerNetworkInterface();
            _resultValue.bridge = bridge;
            _resultValue.enabled = enabled;
            _resultValue.firewall = firewall;
            _resultValue.macAddress = macAddress;
            _resultValue.mtu = mtu;
            _resultValue.name = name;
            _resultValue.rateLimit = rateLimit;
            _resultValue.vlanId = vlanId;
            return _resultValue;
        }
    }
}
