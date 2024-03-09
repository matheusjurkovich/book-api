/*
  Warnings:

  - You are about to drop the column `bar_code` on the `books` table. All the data in the column will be lost.
  - Added the required column `authot` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "authot" TEXT NOT NULL
);
INSERT INTO "new_books" ("description", "id", "title") SELECT "description", "id", "title" FROM "books";
DROP TABLE "books";
ALTER TABLE "new_books" RENAME TO "books";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
