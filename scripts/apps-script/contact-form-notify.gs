/**
 * FSIF お問い合わせフォーム — 自動返信 ＆ 運営通知
 *
 * 導入手順:
 * 1. 対象のGoogleフォームを開く → 右上の「⋮」→「スクリプト エディタ」
 * 2. デフォルトの Code.gs の中身をこのファイルの内容で置き換えて保存
 * 3. 左メニューの「トリガー」(時計アイコン) →「トリガーを追加」
 *      実行する関数: onFormSubmit
 *      イベントのソース: フォームから
 *      イベントの種類: フォーム送信時
 *    → 保存（初回はGoogleアカウントの権限承認が必要）
 * 4. NOTIFY_EMAIL と TITLES を実際の内容に合わせて書き換える
 *    （TITLES はフォームの質問文と一字一句 完全に一致させること）
 */

const NOTIFY_EMAIL = 'fsif.official@gmail.com' // 運営への通知先。実際の宛先に変更してください
const ORG_NAME = '未来宇宙産業フォーラム（FSIF）'

// フォームの質問タイトルと完全に一致させてください
const TITLES = {
  name: 'お名前',
  org: '所属',
  email: 'メールアドレス',
  type: 'お問い合わせ種別',
  message: 'お問い合わせ内容',
}

function onFormSubmit(e) {
  const answers = {}
  e.response.getItemResponses().forEach((item) => {
    answers[item.getItem().getTitle()] = item.getResponse()
  })

  const name = answers[TITLES.name] || ''
  const org = answers[TITLES.org] || ''
  const email = answers[TITLES.email] || ''
  const type = answers[TITLES.type] || ''
  const message = answers[TITLES.message] || ''

  // 送信者への自動返信
  if (email) {
    MailApp.sendEmail({
      to: email,
      subject: `【${ORG_NAME}】お問い合わせありがとうございます`,
      body:
        `${name} 様\n\n` +
        `この度はお問い合わせいただき、誠にありがとうございます。\n` +
        `内容を確認のうえ、担当より数営業日以内にご連絡いたします。\n\n` +
        `――――――――――――――――\n` +
        `お問い合わせ種別：${type}\n` +
        `お問い合わせ内容：\n${message}\n` +
        `――――――――――――――――\n\n` +
        `${ORG_NAME}`,
    })
  }

  // 運営への通知
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `【新規お問い合わせ】${type || '種別未設定'} / ${name}`,
    body:
      `お名前：${name}\n` +
      `所属：${org}\n` +
      `メールアドレス：${email}\n` +
      `種別：${type}\n\n` +
      `内容：\n${message}\n`,
  })
}
