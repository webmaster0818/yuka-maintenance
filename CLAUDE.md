@AGENTS.md

## 作業ログ（床メンテ yuka-maintenance.com）
- source=このリポ / deploy=../deploy（webmaster0818/yuka-maintenance-deploy）。build → `rsync -a --delete --exclude='.git' --exclude='CNAME' out/ ../deploy/` → 両方push。
- 掲載社は data/companies.json。2026-09以降の追加社は rating/reviewCount=null・reviews=[]（口コミは出典が無い限り作らない）。料金・会社情報は公式サイトの一次確認値のみ。
- 既存10社の /company/ に出典不明の口コミ・評価スコアが残っている（2026-09-30 okinaへ削除可否を確認中・判断待ち。勝手に触らない）。
- 2026-10-12: 掲載社を6社追加（クリーンクルー/PVSクリーニング/ジェブ(EPCOAT)/FSSCOAT/ユアマイスター/くまハウス）→ 22社・sitemap 89URL。title末尾「| 床メンテナンス110番」の二重付与を修正（terms/privacy/content-policyは規約系のため未変更）。口コミ無し社のボタン文言を「料金・会社概要を見る」に。
  - 見送り: ハートフルコート（会社概要に所在地・代表者の記載なく、トップと料金ページで価格が不一致）、カジタク（床メニューなし）。
