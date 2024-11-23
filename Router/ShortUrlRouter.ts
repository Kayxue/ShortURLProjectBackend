import { Hono } from "jsr:@hono/hono";
import { nanoid } from "npm:nanoid";
import { zValidator } from "npm:@hono/zod-validator";
import IRouterExport from "../Interfaces/Interface.ts";
import { createUrlSchema } from "../Schema/Schema.ts";

const hono = new Hono();

hono.post("/create", zValidator("json", createUrlSchema), async (c) => {
	const { userId, customParam, url, password } = await c.req.json();
	return c.json({ userId, customParam, url, password });
});

export default { route: "/shorturl", router: hono } as IRouterExport;
