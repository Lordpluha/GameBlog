/*
  Warnings:

  - You are about to drop the column `name` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `CategoriesOnArticles` table. All the data in the column will be lost.
  - Added the required column `content` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Article" ("createdAt", "id", "slug", "updatedAt") SELECT "createdAt", "id", "slug", "updatedAt" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");
CREATE TABLE "new_CategoriesOnArticles" (
    "articleId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("articleId", "categoryId"),
    CONSTRAINT "CategoriesOnArticles_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriesOnArticles_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CategoriesOnArticles" ("articleId", "assignedAt", "categoryId") SELECT "articleId", "assignedAt", "categoryId" FROM "CategoriesOnArticles";
DROP TABLE "CategoriesOnArticles";
ALTER TABLE "new_CategoriesOnArticles" RENAME TO "CategoriesOnArticles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
