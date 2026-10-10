/**
 * 切らずに全体を見せたい画像の縦横比(画像そのものの大きさ)。
 * 枠の縦横比をこの値にすると、object-cover のままでも画像が切れない。
 * 画像を差し替えた時は、ここの値も合わせる。
 */
const IMAGE_ASPECT: Record<string, string> = {
  '/images/cosmobase.png': '1920 / 1006',
  '/images/ohsumi-hero.png': '2400 / 1260',
}

/** 画像に合わせた枠の style(登録していない画像なら undefined。今の枠の縦横比のまま) */
export function imageAspectStyle(src: string | undefined): { aspectRatio: string } | undefined {
  const ratio = src ? IMAGE_ASPECT[src] : undefined
  return ratio ? { aspectRatio: ratio } : undefined
}
