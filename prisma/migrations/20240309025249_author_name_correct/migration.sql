/*
  Warnings:

  - You are about to drop the column `authot` on the `books` table. All the data in the column will be lost.
  - Added the required column `author` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "author" TEXT NOT NULL
);
INSERT INTO "new_books" ("description", "genre", "id", "title") SELECT "description", "genre", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
