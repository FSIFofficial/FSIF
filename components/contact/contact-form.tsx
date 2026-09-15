'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

const inquiryTypes = [
  '参加・エントリー',
  '企業・団体との連携',
  '取材・メディア',
  'Orbit導入相談',
  '登壇・協賛',
  'その他',
]

const fieldClass =
  'mt-1.5 w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-fsif-blue focus:ring-2 focus:ring-fsif-blue/20'

// This form keeps its own UI and submits into a Google Form behind the
// scenes, so the layout stays fully custom while Forms handles storage,
// auto-reply, and staff notification (see the Apps Script bound to the
// form itself). Source form: https://forms.gle/ZdAQBvprq6b1kkw3A
const FORM_CONFIGURED = true
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdjie59I_RAYkv-1mCSkbYUygQz5Wk8C5nxlenz7lP3xPk7og/formResponse'
const FIELD_IDS = {
  name: 'entry.2082586519',
  org: 'entry.1602816975',
  email: 'entry.929546141',
  type: 'entry.1156602354',
  message: 'entry.810188869',
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [failed, setFailed] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFailed(false)

    if (!FORM_CONFIGURED) {
      setSubmitted(true)
      return
    }

    setSubmitting(true)
    const values = new FormData(e.currentTarget)
    const payload = new FormData()
    payload.append(FIELD_IDS.name, String(values.get('name') ?? ''))
    payload.append(FIELD_IDS.org, String(values.get('org') ?? ''))
    payload.append(FIELD_IDS.email, String(values.get('email') ?? ''))
    payload.append(FIELD_IDS.type, String(values.get('type') ?? ''))
    payload.append(FIELD_IDS.message, String(values.get('message') ?? ''))

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque
      // under no-cors — a resolved fetch is the only success signal available.
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body: payload })
      setSubmitted(true)
    } catch {
      setFailed(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-secondary p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-fsif-blue" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-bold text-foreground">送信を受け付けました</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          お問い合わせいただきありがとうございます。内容を確認のうえ、担当より数営業日以内にご連絡いたします。
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-fsif-blue hover:underline"
        >
          もう一度送信する
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            お名前 <span className="text-fsif-blue">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="org" className="text-sm font-medium text-foreground">
            所属（任意）
          </label>
          <input id="org" name="org" autoComplete="organization" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            メールアドレス <span className="text-fsif-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="type" className="text-sm font-medium text-foreground">
            お問い合わせ種別 <span className="text-fsif-blue">*</span>
          </label>
          <select id="type" name="type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              選択してください
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          お問い合わせ内容 <span className="text-fsif-blue">*</span>
        </label>
        <textarea id="message" name="message" required rows={6} className={fieldClass} />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 size-4 rounded border-border text-fsif-blue focus:ring-fsif-blue/30"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
          プライバシーポリシーに同意のうえ送信します。
        </label>
      </div>

      {failed && (
        <p className="text-sm text-destructive">
          送信に失敗しました。通信環境をご確認のうえ、時間をおいて再度お試しください。
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-fsif-blue px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-[#0057c4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fsif-blue disabled:opacity-60"
      >
        {submitting ? '送信中…' : '送信する'}
      </button>
    </form>
  )
}
