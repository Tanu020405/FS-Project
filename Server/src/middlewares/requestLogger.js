export const requestLogger = (req, res, next) => {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
    const logEntry = {
      time: new Date().toISOString(),
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      tenantId: req.tenantId || req.user?.tenantId || null,
      durationMs: Number(durationMs.toFixed(2)),
    };

    console.log(`[request] ${JSON.stringify(logEntry)}`);
  });

  next();
};
