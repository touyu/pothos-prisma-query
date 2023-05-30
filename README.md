# pothos prisma N+1 query sample

```
$ yarn install
$ yarn dev
```

## Problem

Prisma spits out many queries when requested with the following queries

```graphql
{
  articles(first:30) {
    nodes {
      databaseId
      creator {
        databaseId
      }
    }
  }
}
```


```
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE 1=1 ORDER BY `main`.`articles`.`id` ASC LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`articles`.`id`, `main`.`articles`.`creator_id` FROM `main`.`articles` WHERE (`main`.`articles`.`id` = ? AND 1=1) LIMIT ? OFFSET ?
prisma:query SELECT `main`.`creators`.`id` FROM `main`.`creators` WHERE `main`.`creators`.`id` IN (?) LIMIT ? OFFSET ?
```
