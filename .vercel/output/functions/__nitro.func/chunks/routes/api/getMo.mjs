import { d as defineEventHandler, u as useDatabase } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';

const getMo = defineEventHandler(async (event) => {
  const db = useDatabase("db");
  const { rows } = await db.sql`SELECT * FROM orders WHERE isActive = 1`;
  rows.map(async (row) => {
    row.progress = await JSON.parse(row.progress || "");
  });
  return rows;
});

export { getMo as default };
//# sourceMappingURL=getMo.mjs.map
