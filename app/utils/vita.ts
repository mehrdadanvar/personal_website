const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}

const MONTH_NUM: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
  july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
}

const MONTH_WORD = /january|february|march|april|may|june|july|august|september|october|november|december/i

function monthIndex(str: string): number | null {
  const match = str.toLowerCase().match(MONTH_WORD)
  return match ? MONTHS[match[0]] : null
}

export function dateScore(value: unknown): number {
  if (typeof value === "number") return value * 12
  const str = String(value ?? "")
  if (!str) return 0
  if (/present/i.test(str)) return 9999 * 12
  const year = Number(/\b(19|20)\d{2}\b/.exec(str)?.[0] ?? 0)
  return year * 12 + (monthIndex(str) ?? 0)
}

export function sortTimeline<T extends Record<string, any>>(
  items: T[],
  field: string,
  direction: "asc" | "desc" = "desc",
): T[] {
  return [...items].sort((a, b) => {
    const scoreA = dateScore(a[field])
    const scoreB = dateScore(b[field])
    if (scoreA === scoreB) return 0
    return direction === "desc" ? scoreB - scoreA : scoreA - scoreB
  })
}

export function sortByFieldDesc<T extends Record<string, any>>(items: T[], field: string): T[] {
  return [...items].sort((a, b) => (b[field] ?? 0) - (a[field] ?? 0))
}

export function formatPeriod(period: string): string {
  return period.replace(/\s*-\s*/g, " – ").trim()
}

export function pickItems(items?: Record<string, any>[] | null, fallback: Record<string, any> = []): Record<string, any>[] {
  return items && Array.isArray(items) && items.length > 0 ? items : fallback
}

/** "2013-March-21" -> "03/21/2013"; year-only "(2016 - 2019)" -> "2016" */
export function usDate(value?: string | null): string | null {
  if (!value) return null
  const parts = String(value).split(/[-\s]+/).filter(Boolean)
  let year: number | null = null
  let month: number | null = null
  let day: number | null = null
  for (const part of parts) {
    if (/^(19|20)\d{2}$/.test(part)) year = Number(part)
    else if (MONTH_NUM[part.toLowerCase()]) month = MONTH_NUM[part.toLowerCase()]
    else if (/^\d{1,2}$/.test(part)) day = Number(part)
  }
  if (year == null) return null
  const mm = month != null ? String(month).padStart(2, "0") + "/" : ""
  const dd = day != null ? String(day).padStart(2, "0") + "/" : ""
  return `${mm}${dd}${year}`
}

export function usDateRange(start?: string | null, end?: string | null): string {
  const from = usDate(start)
  const to = usDate(end)
  if (from && to) return `${from} - ${to}`
  return from ?? to ?? ""
}

export const ME = "Mehrdad Anvar"

export function isMe(author: string): boolean {
  return author.trim().toLowerCase() === ME.toLowerCase()
}
