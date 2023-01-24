import supertest from "supertest";
import app from "../../server"

const request = supertest(app);
const product = {
    name: "test",
    price: 1,
    category: "test",
};

describe("Test product endpoints", () => {
    it ("should get all products", async () => {
        const response = await request.get("/products");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(3);
    }
    );
    it ("should get a product", async () => {
        const response = await request.get("/products/1");
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("test");
    }
    );
    it ("should add a product", async () => {
        const response = await request.post("/products").send(product);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("test");
    }
    );
    it ("should update a product", async () => {
        const response = await request.patch("/products/1").send(product);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("test");
    }
    );
    it ("should delete a product", async () => {
        const response = await request.delete("/products/1");
        expect(response.status).toBe(200);
        expect(response.body.name).toBe("test");
    }
    );
    it ("should get all products in a category", async () => {
        const response = await request.get("/products/category/test");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(3);
    }
    );
}
);