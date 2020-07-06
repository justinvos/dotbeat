const NUM_SECONDS_IN_DAY = 24 * 60 * 60;
const SWEDISH_OFFSET = (60 * 60) / NUM_SECONDS_IN_DAY * 1000;

function dotbeat() {
  const now = Date.now();
  const nowDate = new Date(now);
  const startOfDay = Date.UTC(nowDate.getUTCFullYear(), nowDate.getUTCMonth(), nowDate.getUTCDate());

  const elapsedMilliseconds = now - startOfDay;
  const beats = elapsedMilliseconds / NUM_SECONDS_IN_DAY + SWEDISH_OFFSET;

  return beats;
}
