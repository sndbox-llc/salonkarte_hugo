---
url: '/docs/other/search/'
title: '検索する'
menuTitle: ''
description: ''
toc: true
weight: 80200
tags: []
contributors: []
---

{{< callout context="note" title="案件・タスク・関係者の一覧表は使い方が同一です" icon="outline/info-circle" />}}

## 一覧から選んで検索

大量のデータから効率よくデータを探す機能が備わっています。  
シンプルなケースとして、担当者による絞り込み検索をしてみましょう。

1. 担当列の「担当」をクリック
2. 検索したい担当者を選択（複数選択可能）
3. 検索開始ボタンを押下

{{< picture src="img/staffFilter_tablet.webp" alt="" >}}

このように、列ごとに直感的に検索が行えます。
状態やタグによる検索も、同様の手順で行うことが可能です。

## 文字入力による検索

タスクのタイトルやタスク内容など、「文字データ」を検索するには文字を入力して検索できます。

{{< picture src="img/textFilter_tablet.webp" alt="" >}}

{{< callout context="note" title="最低２文字を推奨" icon="outline/info-circle" >}}
検索精度や容量による問題で、検索は基本的に２文字以上で機能します。しかしカスタム入力フォームの「１文字対応テキスト」を使用したデータに限り、１文字での検索が可能です

{{</callout>}}

## よく使う検索を保存する{#save}

検索条件を保存することで、次回からワンクリックで同じ検索が可能です。

1. 通常の手順で検索する
2. 「この検索条件を保存」をクリック
3. わかりやすい名前をつける

{{< picture src="img/saveQuery_tablet.webp" alt="" >}}

## 保存した検索条件を使用する

保存した検索は「保存した検索条件」のエリアにボタンのデザインで配置されます。
検索条件は何種類でも保存可能ですが、多すぎると操作性が低下するため、5つ程度に留めておくことを推奨します。

{{< picture src="img/useQuery_tablet.webp" alt="" >}}

## 自動検索の有効・無効について{#autoQuery}

自動検索とは、検索条件を変更したタイミングで自動で再検索を行う機能です。初期値はOFFです。

{{< picture src="img/autoQuery_tablet.webp" alt="" >}}
