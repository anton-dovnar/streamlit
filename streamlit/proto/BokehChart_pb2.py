# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/BokehChart.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='streamlit/proto/BokehChart.proto',
  package='',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n streamlit/proto/BokehChart.proto\"M\n\nBokehChart\x12\x0e\n\x06\x66igure\x18\x01 \x01(\t\x12\x1b\n\x13use_container_width\x18\x02 \x01(\x08\x12\x12\n\nelement_id\x18\x03 \x01(\tb\x06proto3'
)




_BOKEHCHART = _descriptor.Descriptor(
  name='BokehChart',
  full_name='BokehChart',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='figure', full_name='BokehChart.figure', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='use_container_width', full_name='BokehChart.use_container_width', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='element_id', full_name='BokehChart.element_id', index=2,
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
  serialized_start=36,
  serialized_end=113,
)

DESCRIPTOR.message_types_by_name['BokehChart'] = _BOKEHCHART
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

BokehChart = _reflection.GeneratedProtocolMessageType('BokehChart', (_message.Message,), {
  'DESCRIPTOR' : _BOKEHCHART,
  '__module__' : 'streamlit.proto.BokehChart_pb2'
  # @@protoc_insertion_point(class_scope:BokehChart)
  })
_sym_db.RegisterMessage(BokehChart)


# @@protoc_insertion_point(module_scope)
