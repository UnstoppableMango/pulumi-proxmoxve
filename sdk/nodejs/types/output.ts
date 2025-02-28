// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface GetHostsEntry {
    address: string;
    /**
     * The hostnames associated with each of the IP addresses.
     */
    hostnames: string[];
}

export interface HostsEntry {
    /**
     * The IP address.
     */
    address: string;
    /**
     * The hostnames.
     */
    hostnames: string[];
}

export namespace CT {
    export interface ContainerClone {
        /**
         * The identifier for the datastore to create the
         * disk in (defaults to `local`).
         */
        datastoreId?: string;
        /**
         * The name of the node to assign the container to.
         */
        nodeName?: string;
        /**
         * The container identifier
         */
        vmId: number;
    }

    export interface ContainerConsole {
        /**
         * Whether to enable the network device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * The number of available TTY (defaults to `2`).
         */
        ttyCount?: number;
        /**
         * The type (defaults to `unmanaged`).
         */
        type?: string;
    }

    export interface ContainerCpu {
        /**
         * The CPU architecture (defaults to `amd64`).
         */
        architecture?: string;
        /**
         * The number of CPU cores (defaults to `1`).
         */
        cores?: number;
        /**
         * The CPU units (defaults to `1024`).
         */
        units?: number;
    }

    export interface ContainerDisk {
        /**
         * The identifier for the datastore to create the
         * disk in (defaults to `local`).
         */
        datastoreId?: string;
        /**
         * Volume size (only for volume mount points).
         * Can be specified with a unit suffix (e.g. `10G`).
         */
        size?: number;
    }

    export interface ContainerFeatures {
        /**
         * Whether the container supports FUSE mounts (defaults
         * to `false`)
         */
        fuse?: boolean;
        /**
         * Whether the container supports `keyctl()` system
         * call (defaults to `false`)
         */
        keyctl?: boolean;
        /**
         * List of allowed mount types (`cifs` or `nfs`)
         */
        mounts?: string[];
        /**
         * Whether the container is nested (defaults
         * to `false`)
         */
        nesting?: boolean;
    }

    export interface ContainerInitialization {
        /**
         * The DNS configuration.
         */
        dns?: outputs.CT.ContainerInitializationDns;
        /**
         * The hostname.
         */
        hostname?: string;
        /**
         * The IP configuration (one block per network
         * device).
         */
        ipConfigs?: outputs.CT.ContainerInitializationIpConfig[];
        /**
         * The user account configuration.
         */
        userAccount?: outputs.CT.ContainerInitializationUserAccount;
    }

    export interface ContainerInitializationDns {
        /**
         * The DNS search domain.
         */
        domain?: string;
        /**
         * The DNS server. The `server` attribute is deprecated and will be removed in a future release. Please use the `servers` attribute instead.
         *
         * @deprecated The `server` attribute is deprecated and will be removed in a future release. Please use the `servers` attribute instead.
         */
        server?: string;
        /**
         * The list of DNS servers.
         */
        servers?: string[];
    }

    export interface ContainerInitializationIpConfig {
        /**
         * The IPv4 configuration.
         */
        ipv4?: outputs.CT.ContainerInitializationIpConfigIpv4;
        /**
         * The IPv4 configuration.
         */
        ipv6?: outputs.CT.ContainerInitializationIpConfigIpv6;
    }

    export interface ContainerInitializationIpConfigIpv4 {
        /**
         * The IPv6 address (use `dhcp` for
         * autodiscovery).
         */
        address?: string;
        /**
         * The IPv6 gateway (must be omitted
         * when `dhcp` is used as the address).
         */
        gateway?: string;
    }

    export interface ContainerInitializationIpConfigIpv6 {
        /**
         * The IPv6 address (use `dhcp` for
         * autodiscovery).
         */
        address?: string;
        /**
         * The IPv6 gateway (must be omitted
         * when `dhcp` is used as the address).
         */
        gateway?: string;
    }

    export interface ContainerInitializationUserAccount {
        /**
         * The SSH keys for the root account.
         */
        keys?: string[];
        /**
         * The password for the root account.
         */
        password?: string;
    }

    export interface ContainerMemory {
        /**
         * The dedicated memory in megabytes (defaults
         * to `512`).
         */
        dedicated?: number;
        /**
         * The swap size in megabytes (defaults to `0`).
         */
        swap?: number;
    }

    export interface ContainerMountPoint {
        /**
         * Explicitly enable or disable ACL support.
         */
        acl?: boolean;
        /**
         * Whether to include the mount point in backups (only
         * used for volume mount points).
         */
        backup?: boolean;
        /**
         * List of extra mount options.
         */
        mountOptions?: string[];
        /**
         * Path to the mount point as seen from inside the
         * container.
         */
        path: string;
        /**
         * Enable user quotas inside the container (not supported
         * with ZFS subvolumes).
         */
        quota?: boolean;
        /**
         * Read-only mount point.
         */
        readOnly?: boolean;
        /**
         * Will include this volume to a storage replica job.
         */
        replicate?: boolean;
        /**
         * Mark this non-volume mount point as available on all
         * nodes.
         */
        shared?: boolean;
        /**
         * Volume size (only for volume mount points).
         * Can be specified with a unit suffix (e.g. `10G`).
         */
        size?: string;
        /**
         * Volume, device or directory to mount into the
         * container.
         */
        volume: string;
    }

    export interface ContainerNetworkInterface {
        /**
         * The name of the network bridge (defaults
         * to `vmbr0`).
         */
        bridge?: string;
        /**
         * Whether to enable the network device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * Whether this interface's firewall rules should be
         * used (defaults to `false`).
         */
        firewall?: boolean;
        /**
         * The MAC address.
         */
        macAddress?: string;
        /**
         * Maximum transfer unit of the interface. Cannot be
         * larger than the bridge's MTU.
         */
        mtu?: number;
        /**
         * The network interface name.
         */
        name: string;
        /**
         * The rate limit in megabytes per second.
         */
        rateLimit?: number;
        /**
         * The VLAN identifier.
         */
        vlanId?: number;
    }

    export interface ContainerOperatingSystem {
        /**
         * The identifier for an OS template file.
         */
        templateFileId: string;
        /**
         * The type (defaults to `unmanaged`).
         */
        type?: string;
    }

}

export namespace Network {
    export interface FirewallIPSetCidr {
        /**
         * Arbitrary string annotation.
         */
        comment?: string;
        /**
         * Network/IP specification in CIDR format.
         */
        name: string;
        /**
         * Entries marked as `nomatch` are skipped as if those
         * were not added to the set.
         */
        nomatch?: boolean;
    }

    export interface FirewallLogRatelimit {
        /**
         * Initial burst of packages which will always get
         * logged before the rate is applied (defaults to `5`).
         */
        burst?: number;
        /**
         * Enable or disable the log rate limit.
         */
        enabled?: boolean;
        /**
         * Frequency with which the burst bucket gets refilled (defaults to `1/second`).
         */
        rate?: string;
    }

    export interface FirewallRulesRule {
        /**
         * Rule action (`ACCEPT`, `DROP`, `REJECT`).
         */
        action?: string;
        /**
         * Rule comment.
         */
        comment?: string;
        /**
         * Restrict packet destination address. This can
         * refer to a single IP address, an IP set ('+ipsetname') or an IP alias
         * definition. You can also specify an address range
         * like `20.34.101.207-201.3.9.99`, or a list of IP addresses and
         * networks (entries are separated by comma). Please do not mix IPv4 and
         * IPv6 addresses inside such lists.
         */
        dest?: string;
        /**
         * Restrict TCP/UDP destination port. You can use
         * service names or simple numbers (0-65535), as defined
         * in `/etc/services`. Port ranges can be specified with '\d+:\d+', for
         * example `80:85`, and you can use comma separated list to match several
         * ports or ranges.
         */
        dport?: string;
        /**
         * Enable this rule. Defaults to `true`.
         */
        enabled?: boolean;
        /**
         * Network interface name. You have to use network
         * configuration key names for VMs and containers ('net\d+'). Host
         * related rules can use arbitrary strings.
         */
        iface?: string;
        /**
         * Log level for this rule (`emerg`, `alert`, `crit`,
         * `err`, `warning`, `notice`, `info`, `debug`, `nolog`).
         */
        log?: string;
        /**
         * Macro name. Use predefined standard macro
         * from <https://pve.proxmox.com/pve-docs/pve-admin-guide.html#_firewall_macro_definitions>
         */
        macro?: string;
        /**
         * Position of the rule in the list.
         */
        pos: number;
        /**
         * Restrict packet protocol. You can use protocol
         * names as defined in '/etc/protocols'.
         */
        proto?: string;
        /**
         * Security group name.
         */
        securityGroup?: string;
        /**
         * Restrict packet source address. This can refer
         * to a single IP address, an IP set ('+ipsetname') or an IP alias
         * definition. You can also specify an address range
         * like `20.34.101.207-201.3.9.99`, or a list of IP addresses and
         * networks (entries are separated by comma). Please do not mix IPv4 and
         * IPv6 addresses inside such lists.
         */
        source?: string;
        /**
         * Restrict TCP/UDP source port. You can use
         * service names or simple numbers (0-65535), as defined
         * in `/etc/services`. Port ranges can be specified with '\d+:\d+', for
         * example `80:85`, and you can use comma separated list to match several
         * ports or ranges.
         * - a security group insertion block, which includes the following arguments:
         */
        sport?: string;
        /**
         * Rule type (`in`, `out`).
         */
        type?: string;
    }

    export interface FirewallSecurityGroupRule {
        /**
         * Rule action (`ACCEPT`, `DROP`, `REJECT`).
         */
        action?: string;
        /**
         * Rule comment.
         */
        comment?: string;
        /**
         * Restrict packet destination address. This can refer to
         * a single IP address, an IP set ('+ipsetname') or an IP alias definition.
         * You can also specify an address range like `20.34.101.207-201.3.9.99`, or
         * a list of IP addresses and networks (entries are separated by comma).
         * Please do not mix IPv4 and IPv6 addresses inside such lists.
         */
        dest?: string;
        /**
         * Restrict TCP/UDP destination port. You can use
         * service names or simple numbers (0-65535), as defined in '/etc/services'.
         * Port ranges can be specified with '\d+:\d+', for example `80:85`, and
         * you can use comma separated list to match several ports or ranges.
         */
        dport?: string;
        enabled?: boolean;
        /**
         * Network interface name. You have to use network
         * configuration key names for VMs and containers ('net\d+'). Host related
         * rules can use arbitrary strings.
         */
        iface?: string;
        /**
         * Log level for this rule (`emerg`, `alert`, `crit`,
         * `err`, `warning`, `notice`, `info`, `debug`, `nolog`).
         */
        log?: string;
        /**
         * Macro name. Use predefined standard macro
         * from <https://pve.proxmox.com/pve-docs/pve-admin-guide.html#_firewall_macro_definitions>
         */
        macro?: string;
        /**
         * Position of the rule in the list.
         */
        pos: number;
        /**
         * Restrict packet protocol. You can use protocol names
         * as defined in '/etc/protocols'.
         */
        proto?: string;
        securityGroup?: string;
        /**
         * Restrict packet source address. This can refer
         * to a single IP address, an IP set ('+ipsetname') or an IP alias
         * definition. You can also specify an address range like
         * `20.34.101.207-201.3.9.99`, or a list of IP addresses and networks (
         * entries are separated by comma). Please do not mix IPv4 and IPv6 addresses
         * inside such lists.
         */
        source?: string;
        /**
         * Restrict TCP/UDP source port. You can use
         * service names or simple numbers (0-65535), as defined in '/etc/services'.
         * Port ranges can be specified with '\d+:\d+', for example `80:85`, and
         * you can use comma separated list to match several ports or ranges.
         */
        sport?: string;
        /**
         * Rule type (`in`, `out`).
         */
        type?: string;
    }

}

export namespace Permission {
    export interface GetGroupAcl {
        /**
         * The path.
         */
        path: string;
        /**
         * Whether to propagate to child paths.
         */
        propagate: boolean;
        /**
         * The role identifier.
         */
        roleId: string;
    }

    export interface GetPoolMember {
        /**
         * The datastore identifier.
         */
        datastoreId: string;
        /**
         * The member identifier.
         */
        id: string;
        /**
         * The node name.
         */
        nodeName: string;
        /**
         * The member type.
         */
        type: string;
        /**
         * The virtual machine identifier.
         */
        vmId: number;
    }

    export interface GetUserAcl {
        /**
         * The path.
         */
        path: string;
        /**
         * Whether to propagate to child paths.
         */
        propagate: boolean;
        /**
         * The role identifier.
         */
        roleId: string;
    }

    export interface GroupAcl {
        /**
         * The path.
         */
        path: string;
        /**
         * Whether to propagate to child paths.
         */
        propagate?: boolean;
        /**
         * The role identifier.
         */
        roleId: string;
    }

    export interface PoolMember {
        /**
         * The datastore identifier.
         */
        datastoreId: string;
        /**
         * The member identifier.
         */
        id: string;
        /**
         * The node name.
         */
        nodeName: string;
        /**
         * The member type.
         */
        type: string;
        /**
         * The virtual machine identifier.
         */
        vmId: number;
    }

    export interface UserAcl {
        /**
         * The path.
         */
        path: string;
        /**
         * Whether to propagate to child paths.
         */
        propagate?: boolean;
        /**
         * The role identifier.
         */
        roleId: string;
    }

}

export namespace Storage {
    export interface FileSourceFile {
        changed?: boolean;
        /**
         * The SHA256 checksum of the source file.
         */
        checksum?: string;
        /**
         * The file name.
         */
        fileName?: string;
        /**
         * Whether to skip the TLS verification step for
         * HTTPS sources (defaults to `false`).
         */
        insecure?: boolean;
        /**
         * A path to a local file or a URL.
         */
        path: string;
    }

    export interface FileSourceRaw {
        /**
         * The raw data.
         */
        data: string;
        /**
         * The file name.
         */
        fileName: string;
        /**
         * The number of bytes to resize the file to.
         */
        resize?: number;
    }

}

export namespace VM {
    export interface GetVirtualMachinesVm {
        /**
         * The virtual machine name.
         */
        name: string;
        /**
         * The node name.
         */
        nodeName: string;
        /**
         * A list of tags to filter the VMs. The VM must have all
         * the tags to be included in the result.
         */
        tags: string[];
        /**
         * The VM identifier.
         */
        vmId: number;
    }

    export interface VirtualMachineAgent {
        /**
         * Whether to enable the VGA device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * The maximum amount of time to wait for data from
         * the QEMU agent to become available ( defaults to `15m`).
         */
        timeout?: string;
        /**
         * Whether to enable the FSTRIM feature in the QEMU agent
         * (defaults to `false`).
         */
        trim?: boolean;
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
    }

    export interface VirtualMachineAudioDevice {
        /**
         * The device (defaults to `socket`).
         * - `/dev/*` - A host serial device.
         */
        device?: string;
        /**
         * The driver (defaults to `spice`).
         */
        driver?: string;
        /**
         * Whether to enable the VGA device (defaults
         * to `true`).
         */
        enabled?: boolean;
    }

    export interface VirtualMachineCdrom {
        /**
         * Whether to enable the VGA device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * The file ID for a disk image (experimental -
         * might cause high CPU utilization during import, especially with large
         * disk images).
         */
        fileId?: string;
        /**
         * The hardware interface to connect the cloud-init
         * image to. Must be one of `ide0..3`, `sata0..5`, `scsi0..30`. Will be
         * detected if the setting is missing but a cloud-init image is present,
         * otherwise defaults to `ide2`.
         */
        interface?: string;
    }

    export interface VirtualMachineClone {
        /**
         * The identifier for the datastore to create the
         * cloud-init disk in (defaults to `local-lvm`).
         */
        datastoreId?: string;
        /**
         * Full or linked clone (defaults to `true`).
         */
        full?: boolean;
        /**
         * The name of the node to assign the virtual machine
         * to.
         */
        nodeName?: string;
        /**
         * Number of retries in Proxmox for clone vm.
         * Sometimes Proxmox errors with timeout when creating multiple clones at
         * once.
         */
        retries?: number;
        /**
         * The VM identifier.
         */
        vmId: number;
    }

    export interface VirtualMachineCpu {
        /**
         * The CPU architecture (defaults to `x8664`).
         */
        architecture?: string;
        /**
         * The number of CPU cores (defaults to `1`).
         */
        cores?: number;
        /**
         * The CPU flags.
         * - `+aes`/`-aes` - Activate AES instruction set for HW acceleration.
         * - `+amd-no-ssb`/`-amd-no-ssb` - Notifies guest OS that host is not
         * vulnerable for Spectre on AMD CPUs.
         * - `+amd-ssbd`/`-amd-ssbd` - Improves Spectre mitigation performance with
         * AMD CPUs, best used with "virt-ssbd".
         * - `+hv-evmcs`/`-hv-evmcs` - Improve performance for nested
         * virtualization (only supported on Intel CPUs).
         * - `+hv-tlbflush`/`-hv-tlbflush` - Improve performance in overcommitted
         * Windows guests (may lead to guest BSOD on old CPUs).
         * - `+ibpb`/`-ibpb` - Allows improved Spectre mitigation on AMD CPUs.
         * - `+md-clear`/`-md-clear` - Required to let the guest OS know if MDS is
         * mitigated correctly.
         * - `+pcid`/`-pcid` - Meltdown fix cost reduction on Westmere, Sandy- and
         * Ivy Bridge Intel CPUs.
         * - `+pdpe1gb`/`-pdpe1gb` - Allows guest OS to use 1 GB size pages, if
         * host HW supports it.
         * - `+spec-ctrl`/`-spec-ctrl` - Allows improved Spectre mitigation with
         * Intel CPUs.
         * - `+ssbd`/`-ssbd` - Protection for "Speculative Store Bypass" for Intel
         * models.
         * - `+virt-ssbd`/`-virt-ssbd` - Basis for "Speculative Store Bypass"
         * protection for AMD models.
         */
        flags?: string[];
        /**
         * The number of hotplugged vCPUs (defaults
         * to `0`).
         */
        hotplugged?: number;
        /**
         * Limit of CPU usage, `0...128`. (defaults to `0` -- no limit).
         */
        limit?: number;
        /**
         * Enable/disable NUMA. (default to `false`)
         */
        numa?: boolean;
        /**
         * The number of CPU sockets (defaults to `1`).
         */
        sockets?: number;
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
        /**
         * The CPU units (defaults to `1024`).
         */
        units?: number;
    }

    export interface VirtualMachineDisk {
        /**
         * The cache type (defaults to `none`).
         */
        cache?: string;
        /**
         * The identifier for the datastore to create the
         * cloud-init disk in (defaults to `local-lvm`).
         */
        datastoreId?: string;
        /**
         * Whether to pass discard/trim requests to the
         * underlying storage. Supported values are `on`/`ignore` (defaults
         * to `ignore`).
         */
        discard?: string;
        /**
         * The file format.
         */
        fileFormat: string;
        /**
         * The file ID for a disk image (experimental -
         * might cause high CPU utilization during import, especially with large
         * disk images).
         */
        fileId?: string;
        /**
         * The hardware interface to connect the cloud-init
         * image to. Must be one of `ide0..3`, `sata0..5`, `scsi0..30`. Will be
         * detected if the setting is missing but a cloud-init image is present,
         * otherwise defaults to `ide2`.
         */
        interface: string;
        /**
         * Whether to use iothreads for this disk (defaults
         * to `false`).
         */
        iothread?: boolean;
        /**
         * The in-datastore path to the disk image.
         * ***Experimental.***Use to attach another VM's disks,
         * or (as root only) host's filesystem paths (`datastoreId` empty string).
         * See "*Example: Attached disks*".
         */
        pathInDatastore: string;
        /**
         * The disk size in gigabytes (defaults to `8`).
         */
        size?: number;
        /**
         * The speed limits.
         */
        speed?: outputs.VM.VirtualMachineDiskSpeed;
        /**
         * Whether to use an SSD emulation option for this disk (
         * defaults to `false`). Note that SSD emulation is not supported on VirtIO
         * Block drives.
         */
        ssd?: boolean;
    }

    export interface VirtualMachineDiskSpeed {
        /**
         * The maximum read speed in megabytes per second.
         */
        read?: number;
        /**
         * The maximum burstable read speed in
         * megabytes per second.
         */
        readBurstable?: number;
        /**
         * The maximum write speed in megabytes per second.
         */
        write?: number;
        /**
         * The maximum burstable write speed in
         * megabytes per second.
         */
        writeBurstable?: number;
    }

    export interface VirtualMachineEfiDisk {
        /**
         * The identifier for the datastore to create the
         * cloud-init disk in (defaults to `local-lvm`).
         */
        datastoreId?: string;
        /**
         * The file format.
         */
        fileFormat: string;
        /**
         * Use am EFI vars template with
         * distribution-specific and Microsoft Standard keys enrolled, if used with
         * EFI type=`4m`. Ignored for VMs with cpu.architecture=`aarch64` (defaults
         * to `false`).
         */
        preEnrolledKeys?: boolean;
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
    }

    export interface VirtualMachineHostpci {
        /**
         * The device (defaults to `socket`).
         * - `/dev/*` - A host serial device.
         */
        device: string;
        /**
         * The PCI device ID. This parameter is not compatible
         * with `apiToken` and requires the root `username` and `password`
         * configured in the proxmox provider. Use either this or `mapping`.
         */
        id?: string;
        /**
         * The resource mapping name of the device, for
         * example usbdevice. Use either this or `id`.
         */
        mapping?: string;
        /**
         * The mediated device ID to use.
         */
        mdev?: string;
        /**
         * Tells Proxmox to use a PCIe or PCI port. Some
         * guests/device combination require PCIe rather than PCI. PCIe is only
         * available for q35 machine types.
         */
        pcie?: boolean;
        /**
         * A path to a ROM file for the device to use. This
         * is a relative path under `/usr/share/kvm/`.
         */
        romFile?: string;
        /**
         * Makes the firmware ROM visible for the VM (defaults
         * to `true`).
         */
        rombar?: boolean;
        /**
         * Marks the PCI(e) device as the primary GPU of the VM.
         * With this enabled the `vga` configuration argument will be ignored.
         */
        xvga?: boolean;
    }

    export interface VirtualMachineInitialization {
        /**
         * The identifier for the datastore to create the
         * cloud-init disk in (defaults to `local-lvm`).
         */
        datastoreId?: string;
        /**
         * The DNS configuration.
         */
        dns?: outputs.VM.VirtualMachineInitializationDns;
        /**
         * The hardware interface to connect the cloud-init
         * image to. Must be one of `ide0..3`, `sata0..5`, `scsi0..30`. Will be
         * detected if the setting is missing but a cloud-init image is present,
         * otherwise defaults to `ide2`.
         */
        interface?: string;
        /**
         * The IP configuration (one block per network
         * device).
         */
        ipConfigs?: outputs.VM.VirtualMachineInitializationIpConfig[];
        /**
         * The identifier for a file containing
         * all meta data passed to the VM via cloud-init.
         */
        metaDataFileId?: string;
        /**
         * The identifier for a file containing
         * network configuration data passed to the VM via cloud-init (conflicts
         * with `ipConfig`).
         */
        networkDataFileId?: string;
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
        /**
         * The user account configuration (conflicts
         * with `userDataFileId`).
         */
        userAccount?: outputs.VM.VirtualMachineInitializationUserAccount;
        /**
         * The identifier for a file containing
         * custom user data (conflicts with `userAccount`).
         */
        userDataFileId?: string;
        /**
         * The identifier for a file containing
         * all vendor data passed to the VM via cloud-init.
         */
        vendorDataFileId?: string;
    }

    export interface VirtualMachineInitializationDns {
        /**
         * The DNS search domain.
         */
        domain?: string;
        /**
         * The DNS server. The `server` attribute is deprecated and will be removed in a future release. Please use the `servers` attribute instead.
         *
         * @deprecated The `server` attribute is deprecated and will be removed in a future release. Please use the `servers` attribute instead.
         */
        server?: string;
        /**
         * The list of DNS servers.
         */
        servers?: string[];
    }

    export interface VirtualMachineInitializationIpConfig {
        /**
         * The IPv4 configuration.
         */
        ipv4?: outputs.VM.VirtualMachineInitializationIpConfigIpv4;
        /**
         * The IPv4 configuration.
         */
        ipv6?: outputs.VM.VirtualMachineInitializationIpConfigIpv6;
    }

    export interface VirtualMachineInitializationIpConfigIpv4 {
        /**
         * The IPv6 address in CIDR notation
         * (e.g. fd1c:000:0000::0000:000:7334/64).  Alternatively, set this
         * to `dhcp` for autodiscovery.
         */
        address?: string;
        /**
         * The IPv6 gateway (must be omitted
         * when `dhcp` is used as the address).
         */
        gateway?: string;
    }

    export interface VirtualMachineInitializationIpConfigIpv6 {
        /**
         * The IPv6 address in CIDR notation
         * (e.g. fd1c:000:0000::0000:000:7334/64).  Alternatively, set this
         * to `dhcp` for autodiscovery.
         */
        address?: string;
        /**
         * The IPv6 gateway (must be omitted
         * when `dhcp` is used as the address).
         */
        gateway?: string;
    }

    export interface VirtualMachineInitializationUserAccount {
        /**
         * The SSH keys.
         */
        keys?: string[];
        /**
         * The SSH password.
         */
        password?: string;
        /**
         * The SSH username.
         */
        username?: string;
    }

    export interface VirtualMachineMemory {
        /**
         * The dedicated memory in megabytes (defaults
         * to `512`).
         */
        dedicated?: number;
        /**
         * The floating memory in megabytes (defaults
         * to `0`).
         */
        floating?: number;
        /**
         * The shared memory in megabytes (defaults to `0`).
         */
        shared?: number;
    }

    export interface VirtualMachineNetworkDevice {
        /**
         * The name of the network bridge (defaults
         * to `vmbr0`).
         */
        bridge?: string;
        /**
         * Whether to enable the VGA device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * Whether this interface's firewall rules should be
         * used (defaults to `false`).
         */
        firewall?: boolean;
        /**
         * The MAC address.
         */
        macAddress: string;
        /**
         * The network device model (defaults to `virtio`).
         */
        model?: string;
        /**
         * Force MTU, for VirtIO only. Set to 1 to use the bridge
         * MTU. Cannot be larger than the bridge MTU.
         */
        mtu?: number;
        /**
         * The number of queues for VirtIO (1..64).
         */
        queues?: number;
        /**
         * The rate limit in megabytes per second.
         */
        rateLimit?: number;
        /**
         * The VLAN identifier.
         */
        vlanId?: number;
    }

    export interface VirtualMachineOperatingSystem {
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
    }

    export interface VirtualMachineSerialDevice {
        /**
         * The device (defaults to `socket`).
         * - `/dev/*` - A host serial device.
         */
        device?: string;
    }

    export interface VirtualMachineSmbios {
        /**
         * The family string.
         */
        family?: string;
        /**
         * The manufacturer.
         */
        manufacturer?: string;
        /**
         * The product ID.
         */
        product?: string;
        /**
         * The serial number.
         */
        serial?: string;
        /**
         * The SKU number.
         */
        sku?: string;
        /**
         * The UUID (defaults to randomly generated UUID).
         */
        uuid: string;
        /**
         * The version.
         */
        version?: string;
    }

    export interface VirtualMachineStartup {
        downDelay?: number;
        /**
         * A non-negative number defining the general startup
         * order.
         */
        order?: number;
        upDelay?: number;
    }

    export interface VirtualMachineTpmState {
        /**
         * The identifier for the datastore to create the
         * cloud-init disk in (defaults to `local-lvm`).
         */
        datastoreId?: string;
        /**
         * The version.
         */
        version?: string;
    }

    export interface VirtualMachineUsb {
        /**
         * The USB device ID. Use either this or `mapping`.
         */
        host: string;
        /**
         * The resource mapping name of the device, for
         * example usbdevice. Use either this or `id`.
         */
        mapping?: string;
        /**
         * Makes the USB device a USB3 device for the VM (defaults
         * to `false`).
         */
        usb3?: boolean;
    }

    export interface VirtualMachineVga {
        /**
         * Whether to enable the VGA device (defaults
         * to `true`).
         */
        enabled?: boolean;
        /**
         * The VGA memory in megabytes (defaults to `16`).
         */
        memory?: number;
        /**
         * The VGA type (defaults to `std`).
         */
        type?: string;
    }

}

export namespace config {
    export interface Ssh {
        agent?: boolean;
        agentSocket?: string;
        nodes?: outputs.config.SshNode[];
        password?: string;
        username?: string;
    }

    export interface SshNode {
        address: string;
        name: string;
        port?: number;
    }

}
