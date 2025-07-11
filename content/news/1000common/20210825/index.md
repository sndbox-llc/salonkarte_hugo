---
url: 'news/update/20210825'
menuTitle: '2021年8月25日|全文検索対応'
title: 'バージョンアップ情報　顧客一覧　全文検索を実装!'
description: 'アカウント削除　実装しました。'
date: 2021-08-25T13:00:00
categories: []
tags: []
contributors: []
pinned: false
---

全文検索は「オプション」として用意しましたので、デフォルトでは無効となっておりこれまで通りフリガナ検索が有効になっています。

有効にする場合は「設定」から

{{< lightbox src="guide1.jpg" alt="設定画面" >}}

全文検索機能はデフォルトでは無効になっています。設定から全文検索を有効にしてください。

全文検索を ON にすると検索用の制限付きキーが自動で生成されます。鍵の生成には 5〜20 秒ほどの時間がかかりま す。(サーバ側の鍵生成プログラムがスリープに入っていると最大で 20 秒の時間がかかります)

※全文検索の利用は任意です。これまで通り、フリガナによるシンプルな検索も引き続きサポートしています。

{{< lightbox src="guide2.png" alt="検索画面" >}}

もし検索の結果、Hit がなかった場合は「よりピンポイントな検索」の案内が表示されます

デフォルトは「曖昧検索」

「電話番号」「携帯」「誕生日」さらなるピンポイントナ絞り込みができます。
