# 🎵 Music Creator App

AIを活用した音楽生成アプリケーションです。Loudly APIを使用して、ユーザーが指定したジャンルやスタイルに基づいてオリジナルの音楽を生成できます。

## ✨ 特徴

- 🎼 **AI音楽生成**: テキストプロンプトから独自の音楽を生成
- 🎧 **音楽プレーヤー**: 生成した音楽を再生、一時停止、シーク機能付き
- 💾 **ローカル保存**: 生成した音楽をブラウザのローカルストレージに保存
- 🎨 **モダンUI**: Spotifyライクな美しいダークテーマのインターフェース
- 📱 **レスポンシブデザイン**: デスクトップからモバイルまで対応

## 🛠️ 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS 4
- **UIコンポーネント**: Radix UI
- **ルーティング**: React Router 7
- **HTTPクライアント**: Axios
- **アイコン**: Lucide React
- **リンター/フォーマッター**: ESLint + Prettier

## 📋 必要要件

- Node.js (v18以上推奨)
- npm または yarn
- Loudly API Key（https://www.loudly.com/developers/apps）

## 🚀 セットアップ

1. **リポジトリのクローン**

```bash
git clone <repository-url>
cd music-creator-app
```

2. **依存関係のインストール**

```bash
cd music-creator-app
npm install
```

3. **環境変数の設定**

プロジェクトルート（`music-creator-app/`）に `.env` ファイルを作成し、Loudly APIキーを設定してください：

```env
VITE_LOUDLY_API_KEY=your_api_key_here
```

4. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスしてください。

## 📦 ビルド

本番用にビルドする場合：

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

プレビューする場合：

```bash
npm run preview
```

## 🎯 主な機能

### メインページ（ホーム）
- 生成された音楽のコレクション表示
- サンプル音楽の再生
- 音楽プレーヤーダイアログ

### 音楽生成ページ
- **曲のタイトル**: 生成する曲のタイトルを入力
- **ジャンル選択**: Electronic、Jazz、Classical、Ambient、Rock、Popから選択
- **音楽の説明**: 生成したい音楽のスタイルや雰囲気を説明
- **リアルタイムプレビュー**: 生成された音楽を即座に再生
- **コレクションに保存**: 生成した音楽をローカルに保存

## 📁 プロジェクト構造

```
music-creator-app/
├── music-creator-app/       # メインアプリケーション
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/          # Radix UIベースのUIコンポーネント
│   │   ├── lib/
│   │   │   └── utils.ts     # ユーティリティ関数
│   │   ├── App.tsx          # メインページ
│   │   ├── CreatePage.tsx   # 音楽生成ページ
│   │   ├── main.tsx         # エントリーポイント
│   │   └── index.css        # グローバルスタイル
│   ├── public/              # 静的ファイル
│   └── package.json
└── README.md                # このファイル
```

## 🔧 利用可能なスクリプト

プロジェクトディレクトリ（`music-creator-app/`）内で以下のコマンドを実行してください：

- `npm run dev` - 開発サーバーを起動
- `npm run build` - 本番用にビルド
- `npm run preview` - ビルドしたアプリをプレビュー
- `npm run lint` - ESLintでコードをチェック
- `npm run format` - Prettierでコードをフォーマット
- `npm run format:check` - フォーマットのチェックのみ実行

## 🎨 UIコンポーネント

以下のカスタムUIコンポーネントを使用しています：

- Button
- Card
- Dialog
- Input
- Label
- Select
- Textarea

これらはRadix UIとTailwind CSSをベースに構築されています。

## 🔐 API設定

このアプリケーションは [Loudly API](https://soundtracks.loudly.com/) を使用して音楽を生成します。APIキーの取得方法：

1. Loudlyのウェブサイトにアクセス
2. アカウントを作成
3. APIキーを取得
4. `.env` ファイルに設定

## 📝 ライセンス

このプロジェクトはプライベートプロジェクトです。

## 🤝 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容について議論してください。

## 📧 お問い合わせ

質問や問題がある場合は、issueを作成してください。

