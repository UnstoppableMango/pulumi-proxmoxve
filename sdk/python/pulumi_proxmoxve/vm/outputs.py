# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from . import outputs

__all__ = [
    'VirtualMachineAgent',
    'VirtualMachineAudioDevice',
    'VirtualMachineCdrom',
    'VirtualMachineClone',
    'VirtualMachineCpu',
    'VirtualMachineDisk',
    'VirtualMachineDiskSpeed',
    'VirtualMachineInitialization',
    'VirtualMachineInitializationDns',
    'VirtualMachineInitializationIpConfig',
    'VirtualMachineInitializationIpConfigIpv4',
    'VirtualMachineInitializationIpConfigIpv6',
    'VirtualMachineInitializationUserAccount',
    'VirtualMachineMemory',
    'VirtualMachineNetworkDevice',
    'VirtualMachineOperatingSystem',
    'VirtualMachineSerialDevice',
    'VirtualMachineVga',
]

@pulumi.output_type
class VirtualMachineAgent(dict):
    def __init__(__self__, *,
                 enabled: Optional[bool] = None,
                 timeout: Optional[str] = None,
                 trim: Optional[bool] = None,
                 type: Optional[str] = None):
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if timeout is not None:
            pulumi.set(__self__, "timeout", timeout)
        if trim is not None:
            pulumi.set(__self__, "trim", trim)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def timeout(self) -> Optional[str]:
        return pulumi.get(self, "timeout")

    @property
    @pulumi.getter
    def trim(self) -> Optional[bool]:
        return pulumi.get(self, "trim")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")


@pulumi.output_type
class VirtualMachineAudioDevice(dict):
    def __init__(__self__, *,
                 device: Optional[str] = None,
                 driver: Optional[str] = None,
                 enabled: Optional[bool] = None):
        if device is not None:
            pulumi.set(__self__, "device", device)
        if driver is not None:
            pulumi.set(__self__, "driver", driver)
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)

    @property
    @pulumi.getter
    def device(self) -> Optional[str]:
        return pulumi.get(self, "device")

    @property
    @pulumi.getter
    def driver(self) -> Optional[str]:
        return pulumi.get(self, "driver")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")


@pulumi.output_type
class VirtualMachineCdrom(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "fileId":
            suggest = "file_id"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineCdrom. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineCdrom.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineCdrom.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 enabled: Optional[bool] = None,
                 file_id: Optional[str] = None):
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if file_id is not None:
            pulumi.set(__self__, "file_id", file_id)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="fileId")
    def file_id(self) -> Optional[str]:
        return pulumi.get(self, "file_id")


@pulumi.output_type
class VirtualMachineClone(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "vmId":
            suggest = "vm_id"
        elif key == "datastoreId":
            suggest = "datastore_id"
        elif key == "nodeName":
            suggest = "node_name"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineClone. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineClone.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineClone.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 vm_id: int,
                 datastore_id: Optional[str] = None,
                 full: Optional[bool] = None,
                 node_name: Optional[str] = None,
                 retries: Optional[int] = None):
        pulumi.set(__self__, "vm_id", vm_id)
        if datastore_id is not None:
            pulumi.set(__self__, "datastore_id", datastore_id)
        if full is not None:
            pulumi.set(__self__, "full", full)
        if node_name is not None:
            pulumi.set(__self__, "node_name", node_name)
        if retries is not None:
            pulumi.set(__self__, "retries", retries)

    @property
    @pulumi.getter(name="vmId")
    def vm_id(self) -> int:
        return pulumi.get(self, "vm_id")

    @property
    @pulumi.getter(name="datastoreId")
    def datastore_id(self) -> Optional[str]:
        return pulumi.get(self, "datastore_id")

    @property
    @pulumi.getter
    def full(self) -> Optional[bool]:
        return pulumi.get(self, "full")

    @property
    @pulumi.getter(name="nodeName")
    def node_name(self) -> Optional[str]:
        return pulumi.get(self, "node_name")

    @property
    @pulumi.getter
    def retries(self) -> Optional[int]:
        return pulumi.get(self, "retries")


@pulumi.output_type
class VirtualMachineCpu(dict):
    def __init__(__self__, *,
                 architecture: Optional[str] = None,
                 cores: Optional[int] = None,
                 flags: Optional[Sequence[str]] = None,
                 hotplugged: Optional[int] = None,
                 sockets: Optional[int] = None,
                 type: Optional[str] = None,
                 units: Optional[int] = None):
        if architecture is not None:
            pulumi.set(__self__, "architecture", architecture)
        if cores is not None:
            pulumi.set(__self__, "cores", cores)
        if flags is not None:
            pulumi.set(__self__, "flags", flags)
        if hotplugged is not None:
            pulumi.set(__self__, "hotplugged", hotplugged)
        if sockets is not None:
            pulumi.set(__self__, "sockets", sockets)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if units is not None:
            pulumi.set(__self__, "units", units)

    @property
    @pulumi.getter
    def architecture(self) -> Optional[str]:
        return pulumi.get(self, "architecture")

    @property
    @pulumi.getter
    def cores(self) -> Optional[int]:
        return pulumi.get(self, "cores")

    @property
    @pulumi.getter
    def flags(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "flags")

    @property
    @pulumi.getter
    def hotplugged(self) -> Optional[int]:
        return pulumi.get(self, "hotplugged")

    @property
    @pulumi.getter
    def sockets(self) -> Optional[int]:
        return pulumi.get(self, "sockets")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def units(self) -> Optional[int]:
        return pulumi.get(self, "units")


@pulumi.output_type
class VirtualMachineDisk(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "datastoreId":
            suggest = "datastore_id"
        elif key == "fileFormat":
            suggest = "file_format"
        elif key == "fileId":
            suggest = "file_id"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineDisk. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineDisk.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineDisk.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 interface: str,
                 datastore_id: Optional[str] = None,
                 discard: Optional[str] = None,
                 file_format: Optional[str] = None,
                 file_id: Optional[str] = None,
                 iothread: Optional[bool] = None,
                 size: Optional[int] = None,
                 speed: Optional['outputs.VirtualMachineDiskSpeed'] = None):
        pulumi.set(__self__, "interface", interface)
        if datastore_id is not None:
            pulumi.set(__self__, "datastore_id", datastore_id)
        if discard is not None:
            pulumi.set(__self__, "discard", discard)
        if file_format is not None:
            pulumi.set(__self__, "file_format", file_format)
        if file_id is not None:
            pulumi.set(__self__, "file_id", file_id)
        if iothread is not None:
            pulumi.set(__self__, "iothread", iothread)
        if size is not None:
            pulumi.set(__self__, "size", size)
        if speed is not None:
            pulumi.set(__self__, "speed", speed)

    @property
    @pulumi.getter
    def interface(self) -> str:
        return pulumi.get(self, "interface")

    @property
    @pulumi.getter(name="datastoreId")
    def datastore_id(self) -> Optional[str]:
        return pulumi.get(self, "datastore_id")

    @property
    @pulumi.getter
    def discard(self) -> Optional[str]:
        return pulumi.get(self, "discard")

    @property
    @pulumi.getter(name="fileFormat")
    def file_format(self) -> Optional[str]:
        return pulumi.get(self, "file_format")

    @property
    @pulumi.getter(name="fileId")
    def file_id(self) -> Optional[str]:
        return pulumi.get(self, "file_id")

    @property
    @pulumi.getter
    def iothread(self) -> Optional[bool]:
        return pulumi.get(self, "iothread")

    @property
    @pulumi.getter
    def size(self) -> Optional[int]:
        return pulumi.get(self, "size")

    @property
    @pulumi.getter
    def speed(self) -> Optional['outputs.VirtualMachineDiskSpeed']:
        return pulumi.get(self, "speed")


@pulumi.output_type
class VirtualMachineDiskSpeed(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "readBurstable":
            suggest = "read_burstable"
        elif key == "writeBurstable":
            suggest = "write_burstable"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineDiskSpeed. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineDiskSpeed.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineDiskSpeed.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 read: Optional[int] = None,
                 read_burstable: Optional[int] = None,
                 write: Optional[int] = None,
                 write_burstable: Optional[int] = None):
        if read is not None:
            pulumi.set(__self__, "read", read)
        if read_burstable is not None:
            pulumi.set(__self__, "read_burstable", read_burstable)
        if write is not None:
            pulumi.set(__self__, "write", write)
        if write_burstable is not None:
            pulumi.set(__self__, "write_burstable", write_burstable)

    @property
    @pulumi.getter
    def read(self) -> Optional[int]:
        return pulumi.get(self, "read")

    @property
    @pulumi.getter(name="readBurstable")
    def read_burstable(self) -> Optional[int]:
        return pulumi.get(self, "read_burstable")

    @property
    @pulumi.getter
    def write(self) -> Optional[int]:
        return pulumi.get(self, "write")

    @property
    @pulumi.getter(name="writeBurstable")
    def write_burstable(self) -> Optional[int]:
        return pulumi.get(self, "write_burstable")


@pulumi.output_type
class VirtualMachineInitialization(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "datastoreId":
            suggest = "datastore_id"
        elif key == "ipConfigs":
            suggest = "ip_configs"
        elif key == "userAccount":
            suggest = "user_account"
        elif key == "userDataFileId":
            suggest = "user_data_file_id"
        elif key == "vendorDataFileId":
            suggest = "vendor_data_file_id"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineInitialization. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineInitialization.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineInitialization.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 datastore_id: Optional[str] = None,
                 dns: Optional['outputs.VirtualMachineInitializationDns'] = None,
                 ip_configs: Optional[Sequence['outputs.VirtualMachineInitializationIpConfig']] = None,
                 type: Optional[str] = None,
                 user_account: Optional['outputs.VirtualMachineInitializationUserAccount'] = None,
                 user_data_file_id: Optional[str] = None,
                 vendor_data_file_id: Optional[str] = None):
        if datastore_id is not None:
            pulumi.set(__self__, "datastore_id", datastore_id)
        if dns is not None:
            pulumi.set(__self__, "dns", dns)
        if ip_configs is not None:
            pulumi.set(__self__, "ip_configs", ip_configs)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if user_account is not None:
            pulumi.set(__self__, "user_account", user_account)
        if user_data_file_id is not None:
            pulumi.set(__self__, "user_data_file_id", user_data_file_id)
        if vendor_data_file_id is not None:
            pulumi.set(__self__, "vendor_data_file_id", vendor_data_file_id)

    @property
    @pulumi.getter(name="datastoreId")
    def datastore_id(self) -> Optional[str]:
        return pulumi.get(self, "datastore_id")

    @property
    @pulumi.getter
    def dns(self) -> Optional['outputs.VirtualMachineInitializationDns']:
        return pulumi.get(self, "dns")

    @property
    @pulumi.getter(name="ipConfigs")
    def ip_configs(self) -> Optional[Sequence['outputs.VirtualMachineInitializationIpConfig']]:
        return pulumi.get(self, "ip_configs")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="userAccount")
    def user_account(self) -> Optional['outputs.VirtualMachineInitializationUserAccount']:
        return pulumi.get(self, "user_account")

    @property
    @pulumi.getter(name="userDataFileId")
    def user_data_file_id(self) -> Optional[str]:
        return pulumi.get(self, "user_data_file_id")

    @property
    @pulumi.getter(name="vendorDataFileId")
    def vendor_data_file_id(self) -> Optional[str]:
        return pulumi.get(self, "vendor_data_file_id")


@pulumi.output_type
class VirtualMachineInitializationDns(dict):
    def __init__(__self__, *,
                 domain: Optional[str] = None,
                 server: Optional[str] = None):
        if domain is not None:
            pulumi.set(__self__, "domain", domain)
        if server is not None:
            pulumi.set(__self__, "server", server)

    @property
    @pulumi.getter
    def domain(self) -> Optional[str]:
        return pulumi.get(self, "domain")

    @property
    @pulumi.getter
    def server(self) -> Optional[str]:
        return pulumi.get(self, "server")


@pulumi.output_type
class VirtualMachineInitializationIpConfig(dict):
    def __init__(__self__, *,
                 ipv4: Optional['outputs.VirtualMachineInitializationIpConfigIpv4'] = None,
                 ipv6: Optional['outputs.VirtualMachineInitializationIpConfigIpv6'] = None):
        if ipv4 is not None:
            pulumi.set(__self__, "ipv4", ipv4)
        if ipv6 is not None:
            pulumi.set(__self__, "ipv6", ipv6)

    @property
    @pulumi.getter
    def ipv4(self) -> Optional['outputs.VirtualMachineInitializationIpConfigIpv4']:
        return pulumi.get(self, "ipv4")

    @property
    @pulumi.getter
    def ipv6(self) -> Optional['outputs.VirtualMachineInitializationIpConfigIpv6']:
        return pulumi.get(self, "ipv6")


@pulumi.output_type
class VirtualMachineInitializationIpConfigIpv4(dict):
    def __init__(__self__, *,
                 address: Optional[str] = None,
                 gateway: Optional[str] = None):
        if address is not None:
            pulumi.set(__self__, "address", address)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)

    @property
    @pulumi.getter
    def address(self) -> Optional[str]:
        return pulumi.get(self, "address")

    @property
    @pulumi.getter
    def gateway(self) -> Optional[str]:
        return pulumi.get(self, "gateway")


@pulumi.output_type
class VirtualMachineInitializationIpConfigIpv6(dict):
    def __init__(__self__, *,
                 address: Optional[str] = None,
                 gateway: Optional[str] = None):
        if address is not None:
            pulumi.set(__self__, "address", address)
        if gateway is not None:
            pulumi.set(__self__, "gateway", gateway)

    @property
    @pulumi.getter
    def address(self) -> Optional[str]:
        return pulumi.get(self, "address")

    @property
    @pulumi.getter
    def gateway(self) -> Optional[str]:
        return pulumi.get(self, "gateway")


@pulumi.output_type
class VirtualMachineInitializationUserAccount(dict):
    def __init__(__self__, *,
                 keys: Optional[Sequence[str]] = None,
                 password: Optional[str] = None,
                 username: Optional[str] = None):
        if keys is not None:
            pulumi.set(__self__, "keys", keys)
        if password is not None:
            pulumi.set(__self__, "password", password)
        if username is not None:
            pulumi.set(__self__, "username", username)

    @property
    @pulumi.getter
    def keys(self) -> Optional[Sequence[str]]:
        return pulumi.get(self, "keys")

    @property
    @pulumi.getter
    def password(self) -> Optional[str]:
        return pulumi.get(self, "password")

    @property
    @pulumi.getter
    def username(self) -> Optional[str]:
        return pulumi.get(self, "username")


@pulumi.output_type
class VirtualMachineMemory(dict):
    def __init__(__self__, *,
                 dedicated: Optional[int] = None,
                 floating: Optional[int] = None,
                 shared: Optional[int] = None):
        if dedicated is not None:
            pulumi.set(__self__, "dedicated", dedicated)
        if floating is not None:
            pulumi.set(__self__, "floating", floating)
        if shared is not None:
            pulumi.set(__self__, "shared", shared)

    @property
    @pulumi.getter
    def dedicated(self) -> Optional[int]:
        return pulumi.get(self, "dedicated")

    @property
    @pulumi.getter
    def floating(self) -> Optional[int]:
        return pulumi.get(self, "floating")

    @property
    @pulumi.getter
    def shared(self) -> Optional[int]:
        return pulumi.get(self, "shared")


@pulumi.output_type
class VirtualMachineNetworkDevice(dict):
    @staticmethod
    def __key_warning(key: str):
        suggest = None
        if key == "macAddress":
            suggest = "mac_address"
        elif key == "rateLimit":
            suggest = "rate_limit"
        elif key == "vlanId":
            suggest = "vlan_id"

        if suggest:
            pulumi.log.warn(f"Key '{key}' not found in VirtualMachineNetworkDevice. Access the value via the '{suggest}' property getter instead.")

    def __getitem__(self, key: str) -> Any:
        VirtualMachineNetworkDevice.__key_warning(key)
        return super().__getitem__(key)

    def get(self, key: str, default = None) -> Any:
        VirtualMachineNetworkDevice.__key_warning(key)
        return super().get(key, default)

    def __init__(__self__, *,
                 bridge: Optional[str] = None,
                 enabled: Optional[bool] = None,
                 mac_address: Optional[str] = None,
                 model: Optional[str] = None,
                 rate_limit: Optional[float] = None,
                 vlan_id: Optional[int] = None):
        if bridge is not None:
            pulumi.set(__self__, "bridge", bridge)
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if mac_address is not None:
            pulumi.set(__self__, "mac_address", mac_address)
        if model is not None:
            pulumi.set(__self__, "model", model)
        if rate_limit is not None:
            pulumi.set(__self__, "rate_limit", rate_limit)
        if vlan_id is not None:
            pulumi.set(__self__, "vlan_id", vlan_id)

    @property
    @pulumi.getter
    def bridge(self) -> Optional[str]:
        return pulumi.get(self, "bridge")

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="macAddress")
    def mac_address(self) -> Optional[str]:
        return pulumi.get(self, "mac_address")

    @property
    @pulumi.getter
    def model(self) -> Optional[str]:
        return pulumi.get(self, "model")

    @property
    @pulumi.getter(name="rateLimit")
    def rate_limit(self) -> Optional[float]:
        return pulumi.get(self, "rate_limit")

    @property
    @pulumi.getter(name="vlanId")
    def vlan_id(self) -> Optional[int]:
        return pulumi.get(self, "vlan_id")


@pulumi.output_type
class VirtualMachineOperatingSystem(dict):
    def __init__(__self__, *,
                 type: Optional[str] = None):
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")


@pulumi.output_type
class VirtualMachineSerialDevice(dict):
    def __init__(__self__, *,
                 device: Optional[str] = None):
        if device is not None:
            pulumi.set(__self__, "device", device)

    @property
    @pulumi.getter
    def device(self) -> Optional[str]:
        return pulumi.get(self, "device")


@pulumi.output_type
class VirtualMachineVga(dict):
    def __init__(__self__, *,
                 enabled: Optional[bool] = None,
                 memory: Optional[int] = None,
                 type: Optional[str] = None):
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if memory is not None:
            pulumi.set(__self__, "memory", memory)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[bool]:
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def memory(self) -> Optional[int]:
        return pulumi.get(self, "memory")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        return pulumi.get(self, "type")


