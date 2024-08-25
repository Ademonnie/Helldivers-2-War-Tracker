import { d as defineEventHandler, u as useDatabase, g as getRouterParam } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'db0';
import 'db0/connectors/better-sqlite3';

const _id_ = defineEventHandler(async (event) => {
  const db = useDatabase("db");
  const id = getRouterParam(event, "id");
  const { rows } = await db.sql`SELECT * FROM planets WHERE id = ${Number(id)}`;
  return rows;
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
