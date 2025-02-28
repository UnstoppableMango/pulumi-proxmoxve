// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.ProxmoxVE.VM.Outputs
{

    [OutputType]
    public sealed class VirtualMachineUsb
    {
        /// <summary>
        /// The USB device ID. Use either this or `mapping`.
        /// </summary>
        public readonly string Host;
        /// <summary>
        /// The resource mapping name of the device, for
        /// example usbdevice. Use either this or `id`.
        /// </summary>
        public readonly string? Mapping;
        /// <summary>
        /// Makes the USB device a USB3 device for the VM (defaults
        /// to `false`).
        /// </summary>
        public readonly bool? Usb3;

        [OutputConstructor]
        private VirtualMachineUsb(
            string host,

            string? mapping,

            bool? usb3)
        {
            Host = host;
            Mapping = mapping;
            Usb3 = usb3;
        }
    }
}
