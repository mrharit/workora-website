/**
 * Public links the site points at.
 *
 * The CV-verification Telegram bot is created per client in @BotFather, so its
 * username is not hard-coded. Set VITE_TELEGRAM_BOT_USERNAME in `.env.local`
 * (git-ignored) and restart the dev server or rebuild. Until it is set,
 * TELEGRAM_BOT_LINK is empty and the site falls back to the on-site explainer
 * instead of a dead t.me link.
 */
export const TELEGRAM_BOT_USERNAME = (
  import.meta.env.VITE_TELEGRAM_BOT_USERNAME || ''
).replace(/^@/, '')

export const TELEGRAM_BOT_LINK = TELEGRAM_BOT_USERNAME
  ? `https://t.me/${TELEGRAM_BOT_USERNAME}`
  : ''

export const TELEGRAM_SECTION_PATH = '/cv-to-rows#telegram-bot'
