/*
  Warnings:

  - You are about to alter the column `cartItems` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `amount` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to drop the column `rating` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.
  - You are about to alter the column `category` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `images` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratings` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `cartItems` JSON NOT NULL,
    MODIFY `amount` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `rating`,
    DROP COLUMN `review`,
    ADD COLUMN `images` VARCHAR(191) NOT NULL,
    ADD COLUMN `numOfReviews` VARCHAR(191) NULL,
    ADD COLUMN `ratings` VARCHAR(191) NOT NULL,
    MODIFY `price` VARCHAR(191) NOT NULL,
    MODIFY `category` VARCHAR(191) NOT NULL;
