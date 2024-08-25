import { d as defineEventHandler, u as useDatabase } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';

const getActivePlanets = defineEventHandler(async (event) => {
  const db = useDatabase("db");
  const { rows } = await db.sql`SELECT * FROM activePlanets`;
  rows.sort((a, b) => b.percentage - a.percentage);
  return rows;
});

export { getActivePlanets as default };
//# sourceMappingURL=getActivePlanets.mjs.map
