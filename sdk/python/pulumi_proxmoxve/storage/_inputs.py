# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

__all__ = [
    'FileSourceFileArgs',
    'FileSourceRawArgs',
]

@pulumi.input_type
class FileSourceFileArgs:
    def __init__(__self__, *,
                 path: pulumi.Input[str],
                 changed: Optional[pulumi.Input[bool]] = None,
                 checksum: Optional[pulumi.Input[str]] = None,
                 file_name: Optional[pulumi.Input[str]] = None,
                 insecure: Optional[pulumi.Input[bool]] = None):
        """
        :param pulumi.Input[str] path: A path to a local file or a URL.
        :param pulumi.Input[str] checksum: The SHA256 checksum of the source file.
        :param pulumi.Input[str] file_name: The file name.
        :param pulumi.Input[bool] insecure: Whether to skip the TLS verification step for
               HTTPS sources (defaults to `false`).
        """
        pulumi.set(__self__, "path", path)
        if changed is not None:
            pulumi.set(__self__, "changed", changed)
        if checksum is not None:
            pulumi.set(__self__, "checksum", checksum)
        if file_name is not None:
            pulumi.set(__self__, "file_name", file_name)
        if insecure is not None:
            pulumi.set(__self__, "insecure", insecure)

    @property
    @pulumi.getter
    def path(self) -> pulumi.Input[str]:
        """
        A path to a local file or a URL.
        """
        return pulumi.get(self, "path")

    @path.setter
    def path(self, value: pulumi.Input[str]):
        pulumi.set(self, "path", value)

    @property
    @pulumi.getter
    def changed(self) -> Optional[pulumi.Input[bool]]:
        return pulumi.get(self, "changed")

    @changed.setter
    def changed(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "changed", value)

    @property
    @pulumi.getter
    def checksum(self) -> Optional[pulumi.Input[str]]:
        """
        The SHA256 checksum of the source file.
        """
        return pulumi.get(self, "checksum")

    @checksum.setter
    def checksum(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "checksum", value)

    @property
    @pulumi.getter(name="fileName")
    def file_name(self) -> Optional[pulumi.Input[str]]:
        """
        The file name.
        """
        return pulumi.get(self, "file_name")

    @file_name.setter
    def file_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "file_name", value)

    @property
    @pulumi.getter
    def insecure(self) -> Optional[pulumi.Input[bool]]:
        """
        Whether to skip the TLS verification step for
        HTTPS sources (defaults to `false`).
        """
        return pulumi.get(self, "insecure")

    @insecure.setter
    def insecure(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "insecure", value)


@pulumi.input_type
class FileSourceRawArgs:
    def __init__(__self__, *,
                 data: pulumi.Input[str],
                 file_name: pulumi.Input[str],
                 resize: Optional[pulumi.Input[int]] = None):
        """
        :param pulumi.Input[str] data: The raw data.
        :param pulumi.Input[str] file_name: The file name.
        :param pulumi.Input[int] resize: The number of bytes to resize the file to.
        """
        pulumi.set(__self__, "data", data)
        pulumi.set(__self__, "file_name", file_name)
        if resize is not None:
            pulumi.set(__self__, "resize", resize)

    @property
    @pulumi.getter
    def data(self) -> pulumi.Input[str]:
        """
        The raw data.
        """
        return pulumi.get(self, "data")

    @data.setter
    def data(self, value: pulumi.Input[str]):
        pulumi.set(self, "data", value)

    @property
    @pulumi.getter(name="fileName")
    def file_name(self) -> pulumi.Input[str]:
        """
        The file name.
        """
        return pulumi.get(self, "file_name")

    @file_name.setter
    def file_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "file_name", value)

    @property
    @pulumi.getter
    def resize(self) -> Optional[pulumi.Input[int]]:
        """
        The number of bytes to resize the file to.
        """
        return pulumi.get(self, "resize")

    @resize.setter
    def resize(self, value: Optional[pulumi.Input[int]]):
        pulumi.set(self, "resize", value)


