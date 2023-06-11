/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
} from '@metaplex-foundation/umi';
import {
  ChangeLogEventV1,
  ChangeLogEventV1Args,
  getChangeLogEventV1Serializer,
} from '.';

export type ChangeLogEvent = { __kind: 'V1'; fields: [ChangeLogEventV1] };

export type ChangeLogEventArgs = {
  __kind: 'V1';
  fields: [ChangeLogEventV1Args];
};

export function getChangeLogEventSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ChangeLogEventArgs, ChangeLogEvent> {
  const s = context.serializer;
  return s.dataEnum<ChangeLogEvent>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<ChangeLogEvent, 'V1'>>([
          ['fields', s.tuple([getChangeLogEventV1Serializer(context)])],
        ]),
      ],
    ],
    { description: 'ChangeLogEvent' }
  ) as Serializer<ChangeLogEventArgs, ChangeLogEvent>;
}

// Data Enum Helpers.
export function changeLogEvent(
  kind: 'V1',
  data: GetDataEnumKindContent<ChangeLogEventArgs, 'V1'>['fields']
): GetDataEnumKind<ChangeLogEventArgs, 'V1'>;
export function changeLogEvent<K extends ChangeLogEventArgs['__kind']>(
  kind: K,
  data?: any
): Extract<ChangeLogEventArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isChangeLogEvent<K extends ChangeLogEvent['__kind']>(
  kind: K,
  value: ChangeLogEvent
): value is ChangeLogEvent & { __kind: K } {
  return value.__kind === kind;
}