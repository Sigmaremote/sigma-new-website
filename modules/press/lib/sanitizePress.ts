export function sanitizePressMarkdown(raw: string): string {
  // 1) strip emojis (only remove specific emoji characters)
  const noEmoji = raw
    .replace(/[✅🎯📣👉⭐️🔥💡🧩🚀🎨📌🔗🌎🌍💸🌐📈🧠📞🏦]/g, '');

  // 2) normalize bullets at line start to "- "
  const normalizedBullets = noEmoji
    .split('\n')
    .map(line => {
      const trimmed = line.trimStart();
      if (/^(\*|•|–|—|-|\u2022|\u2013|\u2014)\s+/.test(trimmed)) {
        return '- ' + trimmed.replace(/^(\*|•|–|—|-|\u2022|\u2013|\u2014)\s+/, '');
      }
      // convert lines starting with digits (1) 2) etc.) into ordered list
      if (/^\d+[\).\)]\s+/.test(trimmed)) {
        return '1. ' + trimmed.replace(/^\d+[\).\)]\s+/, '');
      }
      return line;
    })
    .join('\n');

  // 3) collapse >2 blank lines
  return normalizedBullets.replace(/\n{3,}/g, '\n\n').trim();
}
