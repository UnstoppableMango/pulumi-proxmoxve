// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ProxmoxVE.VM
{
    public static class GetVirtualMachines
    {
        /// <summary>
        /// Retrieves information about all VMs in the Proxmox cluster.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using ProxmoxVE = Pulumi.ProxmoxVE;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var ubuntuVms = ProxmoxVE.VM.GetVirtualMachines.Invoke(new()
        ///     {
        ///         Tags = new[]
        ///         {
        ///             "ubuntu",
        ///         },
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetVirtualMachinesResult> InvokeAsync(GetVirtualMachinesArgs? args = null, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetVirtualMachinesResult>("proxmoxve:VM/getVirtualMachines:getVirtualMachines", args ?? new GetVirtualMachinesArgs(), options.WithDefaults());

        /// <summary>
        /// Retrieves information about all VMs in the Proxmox cluster.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using ProxmoxVE = Pulumi.ProxmoxVE;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var ubuntuVms = ProxmoxVE.VM.GetVirtualMachines.Invoke(new()
        ///     {
        ///         Tags = new[]
        ///         {
        ///             "ubuntu",
        ///         },
        ///     });
        /// 
        /// });
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetVirtualMachinesResult> Invoke(GetVirtualMachinesInvokeArgs? args = null, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetVirtualMachinesResult>("proxmoxve:VM/getVirtualMachines:getVirtualMachines", args ?? new GetVirtualMachinesInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetVirtualMachinesArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The node name.
        /// </summary>
        [Input("nodeName")]
        public string? NodeName { get; set; }

        [Input("tags")]
        private List<string>? _tags;

        /// <summary>
        /// A list of tags to filter the VMs. The VM must have all
        /// the tags to be included in the result.
        /// </summary>
        public List<string> Tags
        {
            get => _tags ?? (_tags = new List<string>());
            set => _tags = value;
        }

        public GetVirtualMachinesArgs()
        {
        }
        public static new GetVirtualMachinesArgs Empty => new GetVirtualMachinesArgs();
    }

    public sealed class GetVirtualMachinesInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The node name.
        /// </summary>
        [Input("nodeName")]
        public Input<string>? NodeName { get; set; }

        [Input("tags")]
        private InputList<string>? _tags;

        /// <summary>
        /// A list of tags to filter the VMs. The VM must have all
        /// the tags to be included in the result.
        /// </summary>
        public InputList<string> Tags
        {
            get => _tags ?? (_tags = new InputList<string>());
            set => _tags = value;
        }

        public GetVirtualMachinesInvokeArgs()
        {
        }
        public static new GetVirtualMachinesInvokeArgs Empty => new GetVirtualMachinesInvokeArgs();
    }


    [OutputType]
    public sealed class GetVirtualMachinesResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The node name.
        /// </summary>
        public readonly string? NodeName;
        /// <summary>
        /// A list of tags of the VM.
        /// </summary>
        public readonly ImmutableArray<string> Tags;
        /// <summary>
        /// The VMs list.
        /// </summary>
        public readonly ImmutableArray<Outputs.GetVirtualMachinesVmResult> Vms;

        [OutputConstructor]
        private GetVirtualMachinesResult(
            string id,

            string? nodeName,

            ImmutableArray<string> tags,

            ImmutableArray<Outputs.GetVirtualMachinesVmResult> vms)
        {
            Id = id;
            NodeName = nodeName;
            Tags = tags;
            Vms = vms;
        }
    }
}
