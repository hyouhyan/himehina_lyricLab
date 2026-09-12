# HIMEHINA Lyric LAB

ヒメヒナ楽曲の歌詞をパート分けして掲載している非公式ファンサイトです。

https://himehina.hyouhyan.com

[Hugo](https://gohugo.io/) + [Stack](https://github.com/CaiJimmy/hugo-theme-stack) 製。`main` に push すると GitHub Actions が GitHub Pages にデプロイします。

## ローカルで動かす

Go と Hugo extended (v0.158.0 以上) が必要です。

```bash
make run    # http://localhost:1313
```

## 楽曲を追加する

`content/post/{cover,original,special}/` 配下に `index.md` を作ります。

```markdown
---
title: レクイエム
slug: requiem
date: 2023-09-22
categories:
  - Cover
youtube_id: IwOFJzE1pGw
---

Key +-0

---

{{< hina >}}
曖昧ディスコミュ まるで狂気の花  
泣きそうに悲しそうに あなたに伝えたい  
{{< /hina >}}
{{< hime >}}
愛のRE:ラビュー それは 魔法の言葉  
{{< /hime >}}
```

- `youtube_id` を書けば、サムネイル（カバー画像・OG画像）とページ下部の動画が自動で入ります
- 行末の半角スペース2つが改行になります

### パート分け

| ショートコード | 用途 |
| --- | --- |
| `{{< hime >}}` | 田中ヒメ |
| `{{< hina >}}` | 鈴木ヒナ |
| `{{< part-3 >}}` 〜 `{{< part-7 >}}` | ゲストなど |

第1引数に `b` を渡すと、文字色ではなく背景のハイライトになります。

```markdown
{{< hime b >}}マーカー風に光る{{< /hime >}}
```

### ルビ

```markdown
{{< ruby まばた >}}瞬{{< /ruby >}}きで宙に{{< ruby とんざ >}}頓挫{{< /ruby >}}して
```

## コミットメッセージ

歌詞まわりは用途を表す prefix を付けます。

| prefix | 用途 |
| --- | --- |
| `lyric` | 歌詞追加 |
| `part` | パート分け |
| `ruby` | ルビ(ふりがな)振り |
| `key` | キー表記 |

`feat(part):` のように Conventional Commits の scope として使っても構いません。

## 免責

本サイトは非公式のファンサイトであり、[HIMEHINA公式](https://himehina.jp/)のものではありません。
歌詞の著作権はそれぞれの楽曲の権利者に帰属します。
