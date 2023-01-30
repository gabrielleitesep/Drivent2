import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getTickets, getUserTickets, postTickets } from "@/controllers";
import { ticketJOI } from "@/schemas/tickets-schema";

const ticketsRouter = Router();

ticketsRouter
    .all("/*", authenticateToken)
    .get("/types", getTickets)
    .get("/", getUserTickets)
    .post("/", validateBody(ticketJOI), postTickets);

export { ticketsRouter };