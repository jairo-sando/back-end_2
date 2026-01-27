
import TicketDAO from "../dao/mongo/ticket.dao.js";

export default class TicketRepository {
  constructor() {
    this.dao = new TicketDAO();
  }

  create(data) {
    return this.dao.create(data);
  }
}
