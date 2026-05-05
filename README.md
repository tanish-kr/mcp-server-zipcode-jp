# mcp-server-zipcode-jp

日本の郵便番号を検索するための Model Context Protocol (MCP) サーバです。
[zipcloud](https://zipcloud.ibsnet.co.jp/doc/api) の郵便番号検索 API を使用して、住所情報を取得します。

## 特徴

- 日本の郵便番号（7桁）から住所情報を検索
- Model Context Protocol (MCP) に準拠

## インストール

```bash
npm install
npm run build
```

## 設定

### Claude Desktop での使用

`~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) に以下の設定を追加してください。

```json
{
  "mcpServers": {
    "zipcode-jp": {
      "command": "node",
      "args": ["/path/to/mcp-server-zipcode-jp/build/index.js"]
    }
  }
}
```

※ `/path/to/mcp-server-zipcode-jp` は、このプロジェクトをクローンした実際のパスに置き換えてください。

## 利用可能なツール

### `search_zip_code`

郵便番号から住所情報を検索します。

**引数:**
- `zipCode` (string): 7桁の郵便番号（ハイフンあり/なし両対応）

**レスポンス例:**
```json
{
  "results": [
    {
      "address1": "東京都",
      "address2": "新宿区",
      "address3": "西新宿",
      "kana1": "ﾄｳｷｮｳﾄ",
      "kana2": "ｼﾝｼﾞｭｸｸ",
      "kana3": "ﾆｼｼﾝｼﾞｭｸ",
      "prefcode": "13",
      "zipcode": "1600023"
    }
  ],
  "status": 200,
  "message": null
}
```

## 開発

### ビルド

```bash
npm run build
```

## ライセンス

ISC
