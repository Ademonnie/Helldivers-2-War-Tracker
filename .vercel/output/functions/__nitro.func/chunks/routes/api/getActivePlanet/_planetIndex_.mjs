import { d as defineEventHandler, u as useDatabase, g as getRouterParam } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';

const _planetIndex_ = defineEventHandler(async (event) => {
  const db = useDatabase("db");
  const id = getRouterParam(event, "planetIndex");
  const { rows } = await db.sql`SELECT * FROM activePlanets WHERE planetIndex = ${Number(id)}`;
  return rows;
});

export { _planetIndex_ as default };
//# sourceMappingURL=_planetIndex_.mjs.map
