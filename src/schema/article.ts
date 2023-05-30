import { builder } from '../builder'
import { prisma } from "../db";

builder.prismaNode('Article', {
    id: { field: 'databaseId' },
    fields: (t) => ({
        databaseId: t.exposeInt('databaseId'),
        creator: t.relation('creator', {
            nullable: true,
        }),
    }),
})

builder.queryField('articles', (t) =>
    t.prismaConnection({
        type: 'Article',
        cursor: 'databaseId',
        resolve: (query) => {
            return prisma.article.findMany({ ...query })
        }
    })
)
