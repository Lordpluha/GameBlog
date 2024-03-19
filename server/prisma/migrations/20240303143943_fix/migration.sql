/*
  Warnings:

  - The values [BLOG,ARTICLE] on the enum `TypeContent` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeContent_new" AS ENUM ('blog', 'article');
ALTER TABLE "comments" ALTER COLUMN "type" TYPE "TypeContent_new" USING ("type"::text::"TypeContent_new");
ALTER TYPE "TypeContent" RENAME TO "TypeContent_old";
ALTER TYPE "TypeContent_new" RENAME TO "TypeContent";
DROP TYPE "TypeContent_old";
COMMIT;
