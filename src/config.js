/**
 * Public links the site points at.
 *
 * The CV-verification Telegram bot is @workorademobot. A bot username is public
 * (it is the t.me link itself), so it is safe to ship in the bundle; the bot
 * token is not, and never appears in this repo. To point the site at a different
 * bot, e.g. once BotFather gives a better username, set VITE_TELEGRAM_BOT_USERNAME
 * in `.env.local` or in the host's environment settings and rebuild.
 *
 * If the username is ever emptied out, TELEGRAM_BOT_LINK is empty and the header
 * and page fall back to the on-site explainer instead of a dead t.me link.
 */
const DEFAULT_TELEGRAM_BOT_USERNAME = 'workorademobot'

// Opening t.me/<bot>?start=<tag> puts Telegram's Start straight in front of the visitor (and sends
// /start for them if they have used the bot before). The bot treats this exact tag as a plain start,
// never as a personal invite code, so it must match PUBLIC_START_TAGS in the bot's engine.py.
const TELEGRAM_START_TAG = 'website'

export const TELEGRAM_BOT_USERNAME = (
  import.meta.env.VITE_TELEGRAM_BOT_USERNAME ?? DEFAULT_TELEGRAM_BOT_USERNAME
).replace(/^@/, '')

export const TELEGRAM_BOT_LINK = TELEGRAM_BOT_USERNAME
  ? `https://t.me/${TELEGRAM_BOT_USERNAME}?start=${TELEGRAM_START_TAG}`
  : ''

export const TELEGRAM_SECTION_PATH = '/cv-to-rows#telegram-bot'
