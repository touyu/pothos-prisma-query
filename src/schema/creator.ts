import {builder} from "../builder";

builder.prismaNode('Creator', {
    id: { field: 'databaseId' },
    fields: (t) => ({
        databaseId: t.exposeInt('databaseId'),
    }),
})
