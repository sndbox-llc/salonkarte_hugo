---
url: '/docs/okyakusama/guide/'
title: 'サロンカルテ 顧客 App 使い⽅ガイド'
menuTitle: '使い方'
description: ''
toc: true
weight: 50200
tags: []
contributors: []
---

{{< callout context="caution" title="この機能はオプションです" icon="outline/info-triangle" />}}


本ガイドはサロンカルテの施術内容を顧客と共有するための⼿順についてまとめたものです。
顧客とカルテを共有するには、カルテへのアクセストークン（QRコード）を発⾏する必要があります。
トークンを発⾏し、顧客の端末にトークンを記録することで、顧客はスマートフォンから⾃⾝の施術履歴や、店舗からのお知らせを⾒ることができます

## トークンの作成

顧客⼀覧から作成したい顧客を⾒つけ、「QRコード表⽰」をタップします

{{<iTablet filename="img/token" msg="" >}}

{{<nextArrow>}}


その後、「QRコード⽣成」をタップします
{{<iTablet filename="img/generator" msg="" >}}


## 顧客のスマートフォンで QR コードその１をスキャンする 

QRコードは２種類発⾏されます。最初に上部（Step1）のQRコードをスマートフォンのカメラからスキャンします


{{<iTablet filename="img/scan1" msg="" >}}


スキャンするとサロンカルテ顧客Webアプリがブラウザで表⽰されます。
顧客の端末から、顧客Webアプリをホーム画⾯に追加します。追加⼿順はStepです。
ここではiPhoneを例に⼿順を解説します。


<div class="row">

<div class="col-xs-16 col-md-8">
{{< figure src="img/pwa1.png" alt="" caption="画面下部のメニューをタップします" >}}
</div>
<div class="col-xs-16 col-md-8">
{{< figure src="img/pwa2.png" alt="" caption="ホーム画面に追加をタップします">}}
</div>
<div class="col-xs-16 col-md-8">
{{< figure src="img/pwa3.png" alt="" caption="右上の追加をタップします">}}
</div>
<div class="col-xs-16 col-md-8">
{{< figure src="img/pwa4.png" alt="" caption="ホーム画面にアプリが追加されました">}}
</div>

</div>


## ホーム画面のアプリを起動してQRコード２をスキャン


ホーム画面に追加した後、アイコンをタップするとアプリが起動します。「QRコードをスキャン」ボタンをタップしてカメラを起動し、サロンカルテ上に表示された２番目のQRコードをスキャンします。

{{<iTablet filename="img/scan2" msg="" >}}



{{< callout context="note" title="顧客アプリからスキャンすること！" icon="outline/info-circle" >}}

スマホ本体のカメラ機能ではなく、先程ホーム画面に追加したアプリからスキャンします。
{{< figure src="img/customer.png" alt="" caption="顧客のアプリ画面例">}}

{{< /callout >}}


スキャンが成功すると、過去のカルテなどを閲覧可能になります。



## 公開される範囲
デフォルトでは施術日、担当者のみが表示されます。
写真・手書きのイラスト・テキストは項目ごとに公開、非公開を設定できます。この設定はカルテ作成の都度、手動でセットする必要があります。
この措置は安全性のためで、意図しない情報が漏洩しないための安全措置です。

## カルテの作成手順
カルテ作成時、写真やメモに対して「公開」のチェックボックスが追加されました。チェックをいれると、顧客側のアプリから見ることができます。デフォルトではチェックは常にOFFです。また、過去に作成されたカルテはすべてOFFとなっています。


{{<iTablet filename="img/karte" msg="" >}}



## カルテの履歴から公開情報を見る

カルテの履歴からも、公開、非公開状態を見ることができます。赤色は非公開、緑色は公開を表します。

{{<iTablet filename="img/log" msg="" >}}


### お客様アプリから見たカルテ

お客様アプリからカルテを表示すると次のように見えます。

{{< figure src="img/karte_phone.webp" alt="" caption="顧客のアプリ画面例">}}




## 通知の使い方
お店からのお知らせを発行できます。お知らせは「全顧客向け」と「１名の顧客向け」の２種類があります。

### 全体通知
全顧客向けは、アプリを入れた顧客全員にお知らせが届きます。１名向けの場合は、指定した顧客に対するお知らせです。全体に通知を送るには、「全体告知」にチェックを入れてください。



{{<iTablet filename="img/notify" msg="" >}}



### 個別通知

{{<iTablet filename="img/customerList" msg="" >}}


{{<nextArrow>}}


{{<iTablet filename="img/makeNotify" msg="" >}}



### 通知をお客様のアプリから読む

通知は顧客アプリ側で見ることができます。一度読んだ通知はNewの表示が消えます。このタイミングで、サロンカルテ側は閲覧数が＋１カウントされます。


{{< figure src="img/notify_phone.webp" alt="" caption="顧客のアプリ画面例">}}
