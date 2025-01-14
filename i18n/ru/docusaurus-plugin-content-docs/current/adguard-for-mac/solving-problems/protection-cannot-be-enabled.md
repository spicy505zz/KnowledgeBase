---
title: Не удаётся включить защиту
sidebar_position: 2
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Если по каким-либо причинам не удаётся включить защиту AdGuard, выполните следующие действия:

1. Click the AdGuard icon at the menu bar and go to *Advanced* → *Reset settings...* → *Quit AdGuard...*

2. В поиске Spotlight введите Терминал, введите `sudo rm -R /Library/Application\ Support/com.adguard.adguard` и выполните команду.

3. Перезагрузите компьютер.

4. В Терминале проверьте, что папка стёрлась, выполнив команду: `ls -al /Library/StagedExtensions/Library/Application\ Support/com.adguard.Adguard/`. Вы должны увидеть следующее сообщение: `No such file or directory`.

5. Start AdGuard and enter your login information when prompted.
