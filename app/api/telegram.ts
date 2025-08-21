import type { NextApiRequest, NextApiResponse } from 'next';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

bot.start((ctx) => ctx.reply('Привет! Я бот на Next.js!'));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await bot.handleUpdate(req.body);
    res.status(200).end();
  } else {
    res.status(405).end();
  }
}