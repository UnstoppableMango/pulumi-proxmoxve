// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package io.muehlbachler.pulumi.proxmoxve.inputs;

import com.pulumi.core.Output;
import com.pulumi.core.annotations.Import;
import io.muehlbachler.pulumi.proxmoxve.inputs.ProviderSshNodeArgs;
import java.lang.Boolean;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import javax.annotation.Nullable;


public final class ProviderSshArgs extends com.pulumi.resources.ResourceArgs {

    public static final ProviderSshArgs Empty = new ProviderSshArgs();

    @Import(name="agent")
    private @Nullable Output<Boolean> agent;

    public Optional<Output<Boolean>> agent() {
        return Optional.ofNullable(this.agent);
    }

    @Import(name="agentSocket")
    private @Nullable Output<String> agentSocket;

    public Optional<Output<String>> agentSocket() {
        return Optional.ofNullable(this.agentSocket);
    }

    @Import(name="nodes")
    private @Nullable Output<List<ProviderSshNodeArgs>> nodes;

    public Optional<Output<List<ProviderSshNodeArgs>>> nodes() {
        return Optional.ofNullable(this.nodes);
    }

    @Import(name="password")
    private @Nullable Output<String> password;

    public Optional<Output<String>> password() {
        return Optional.ofNullable(this.password);
    }

    @Import(name="username")
    private @Nullable Output<String> username;

    public Optional<Output<String>> username() {
        return Optional.ofNullable(this.username);
    }

    private ProviderSshArgs() {}

    private ProviderSshArgs(ProviderSshArgs $) {
        this.agent = $.agent;
        this.agentSocket = $.agentSocket;
        this.nodes = $.nodes;
        this.password = $.password;
        this.username = $.username;
    }

    public static Builder builder() {
        return new Builder();
    }
    public static Builder builder(ProviderSshArgs defaults) {
        return new Builder(defaults);
    }

    public static final class Builder {
        private ProviderSshArgs $;

        public Builder() {
            $ = new ProviderSshArgs();
        }

        public Builder(ProviderSshArgs defaults) {
            $ = new ProviderSshArgs(Objects.requireNonNull(defaults));
        }

        public Builder agent(@Nullable Output<Boolean> agent) {
            $.agent = agent;
            return this;
        }

        public Builder agent(Boolean agent) {
            return agent(Output.of(agent));
        }

        public Builder agentSocket(@Nullable Output<String> agentSocket) {
            $.agentSocket = agentSocket;
            return this;
        }

        public Builder agentSocket(String agentSocket) {
            return agentSocket(Output.of(agentSocket));
        }

        public Builder nodes(@Nullable Output<List<ProviderSshNodeArgs>> nodes) {
            $.nodes = nodes;
            return this;
        }

        public Builder nodes(List<ProviderSshNodeArgs> nodes) {
            return nodes(Output.of(nodes));
        }

        public Builder nodes(ProviderSshNodeArgs... nodes) {
            return nodes(List.of(nodes));
        }

        public Builder password(@Nullable Output<String> password) {
            $.password = password;
            return this;
        }

        public Builder password(String password) {
            return password(Output.of(password));
        }

        public Builder username(@Nullable Output<String> username) {
            $.username = username;
            return this;
        }

        public Builder username(String username) {
            return username(Output.of(username));
        }

        public ProviderSshArgs build() {
            return $;
        }
    }

}
