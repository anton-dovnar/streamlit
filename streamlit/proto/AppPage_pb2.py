# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/AppPage.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='streamlit/proto/AppPage.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1dstreamlit/proto/AppPage.proto\"D\n\x07\x41ppPage\x12\x18\n\x10page_script_hash\x18\x01 \x01(\t\x12\x11\n\tpage_name\x18\x02 \x01(\t\x12\x0c\n\x04icon\x18\x03 \x01(\tb\x06proto3'
)




_APPPAGE = _descriptor.Descriptor(
  name='AppPage',
  full_name='AppPage',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='page_script_hash', full_name='AppPage.page_script_hash', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='page_name', full_name='AppPage.page_name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='icon', full_name='AppPage.icon', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=33,
  serialized_end=101,
)

DESCRIPTOR.message_types_by_name['AppPage'] = _APPPAGE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AppPage = _reflection.GeneratedProtocolMessageType('AppPage', (_message.Message,), {
  'DESCRIPTOR' : _APPPAGE,
  '__module__' : 'streamlit.proto.AppPage_pb2'
  # @@protoc_insertion_point(class_scope:AppPage)
  })
_sym_db.RegisterMessage(AppPage)


# @@protoc_insertion_point(module_scope)