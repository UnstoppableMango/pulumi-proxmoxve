// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package io.muehlbachler.pulumi.proxmoxve.VM.outputs;

import com.pulumi.core.annotations.CustomType;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;

@CustomType
public final class VirtualMachineSmbios {
    /**
     * @return The family string.
     * 
     */
    private @Nullable String family;
    /**
     * @return The manufacturer.
     * 
     */
    private @Nullable String manufacturer;
    /**
     * @return The product ID.
     * 
     */
    private @Nullable String product;
    /**
     * @return The serial number.
     * 
     */
    private @Nullable String serial;
    /**
     * @return The SKU number.
     * 
     */
    private @Nullable String sku;
    /**
     * @return The UUID (defaults to randomly generated UUID).
     * 
     */
    private @Nullable String uuid;
    /**
     * @return The version.
     * 
     */
    private @Nullable String version;

    private VirtualMachineSmbios() {}
    /**
     * @return The family string.
     * 
     */
    public Optional<String> family() {
        return Optional.ofNullable(this.family);
    }
    /**
     * @return The manufacturer.
     * 
     */
    public Optional<String> manufacturer() {
        return Optional.ofNullable(this.manufacturer);
    }
    /**
     * @return The product ID.
     * 
     */
    public Optional<String> product() {
        return Optional.ofNullable(this.product);
    }
    /**
     * @return The serial number.
     * 
     */
    public Optional<String> serial() {
        return Optional.ofNullable(this.serial);
    }
    /**
     * @return The SKU number.
     * 
     */
    public Optional<String> sku() {
        return Optional.ofNullable(this.sku);
    }
    /**
     * @return The UUID (defaults to randomly generated UUID).
     * 
     */
    public Optional<String> uuid() {
        return Optional.ofNullable(this.uuid);
    }
    /**
     * @return The version.
     * 
     */
    public Optional<String> version() {
        return Optional.ofNullable(this.version);
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(VirtualMachineSmbios defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private @Nullable String family;
        private @Nullable String manufacturer;
        private @Nullable String product;
        private @Nullable String serial;
        private @Nullable String sku;
        private @Nullable String uuid;
        private @Nullable String version;
        public Builder() {}
        public Builder(VirtualMachineSmbios defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.family = defaults.family;
    	      this.manufacturer = defaults.manufacturer;
    	      this.product = defaults.product;
    	      this.serial = defaults.serial;
    	      this.sku = defaults.sku;
    	      this.uuid = defaults.uuid;
    	      this.version = defaults.version;
        }

        @CustomType.Setter
        public Builder family(@Nullable String family) {
            this.family = family;
            return this;
        }
        @CustomType.Setter
        public Builder manufacturer(@Nullable String manufacturer) {
            this.manufacturer = manufacturer;
            return this;
        }
        @CustomType.Setter
        public Builder product(@Nullable String product) {
            this.product = product;
            return this;
        }
        @CustomType.Setter
        public Builder serial(@Nullable String serial) {
            this.serial = serial;
            return this;
        }
        @CustomType.Setter
        public Builder sku(@Nullable String sku) {
            this.sku = sku;
            return this;
        }
        @CustomType.Setter
        public Builder uuid(@Nullable String uuid) {
            this.uuid = uuid;
            return this;
        }
        @CustomType.Setter
        public Builder version(@Nullable String version) {
            this.version = version;
            return this;
        }
        public VirtualMachineSmbios build() {
            final var _resultValue = new VirtualMachineSmbios();
            _resultValue.family = family;
            _resultValue.manufacturer = manufacturer;
            _resultValue.product = product;
            _resultValue.serial = serial;
            _resultValue.sku = sku;
            _resultValue.uuid = uuid;
            _resultValue.version = version;
            return _resultValue;
        }
    }
}
