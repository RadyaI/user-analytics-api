-- AddForeignKey
ALTER TABLE `activity` ADD CONSTRAINT `activity_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
