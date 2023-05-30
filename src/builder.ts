import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { DateTimeResolver } from 'graphql-scalars'
import { prisma } from './db'

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes
    Context: {}
    Scalars: {
        DateTime: {
            Input: Date
            Output: Date
        }
    }
}>({
    plugins: [PrismaPlugin, RelayPlugin],
    prisma: {
        client: prisma,
    },
    relayOptions: {
        clientMutationId: 'omit',
        cursorType: 'String',
        nodesOnConnection: true,
    },
})

builder.queryType({})
// builder.mutationType({})

builder.addScalarType('DateTime', DateTimeResolver, {});
