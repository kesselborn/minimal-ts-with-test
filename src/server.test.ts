import { app } from "./server";
import type { Server } from "http";

const port = 3000

describe("Hello world", () => {

    let server: Server;

    beforeEach(() => new Promise<void>(resolve => {
        server = app.listen(port, () => resolve());
    }));

    afterEach(() => new Promise<void>(resolve => {
        server.close(() => resolve());
    }));

    it("Works", async () => {
        const response = await (await fetch("http://localhost:3000/")).text();
        expect(response).toBe("Hello World!");
    });

});