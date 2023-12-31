-- AlterTable
ALTER TABLE "Article" ADD COLUMN "anyTags" TEXT;

-- CreateTable
CREATE TABLE "_ArticleToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ArticleToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Article" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ArticleToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToTags_AB_unique" ON "_ArticleToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToTags_B_index" ON "_ArticleToTags"("B");
