import { pgTable, text, serial, integer, jsonb, array } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (keeping the existing user schema for backward compatibility)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Log schema for future implementation
export const logs = pgTable("logs", {
  id: serial("id").primaryKey(),
  log_id: text("log_id").notNull().unique(),
  timestamp: text("timestamp").notNull(),
  username: text("username").notNull(),
  user_domain: text("user_domain").notNull(),
  source_ip: text("source_ip").notNull(),
  privilege_list: array(text("privilege_list")).notNull(),
  reason: text("reason").notNull(),
  model_type: text("model_type").notNull(),
  review_status: text("review_status"),
  is_true_positive: integer("is_true_positive"),
  reviewed_at: text("reviewed_at"),
  reviewed_by: text("reviewed_by"),
});

export const insertLogSchema = createInsertSchema(logs).omit({
  id: true,
  review_status: true,
  is_true_positive: true,
  reviewed_at: true,
  reviewed_by: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLog = z.infer<typeof insertLogSchema>;
export type Log = typeof logs.$inferSelect;
