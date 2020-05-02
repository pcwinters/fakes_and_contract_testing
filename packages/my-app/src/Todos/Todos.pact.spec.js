
/**
 * @jest-environment node
 */
require('isomorphic-fetch');

import { Pact, Matchers } from "@pact-foundation/pact";
import { createTodoFetcher } from "./createTodoFetcher";
import path from "path";

let provider;
let fetchTodos;
beforeAll(async () => {
    provider = new Pact({
        port: 3002,
        log: path.resolve(process.cwd(), "logs", "pact.log"),
        dir: path.resolve(process.cwd(), "pacts"),
        spec: 2,
        pactfileWriteMode: "update",
        consumer: "my-app",
        provider: "todos",
    });
    // Start the mock service!
    await provider.setup()
    fetchTodos = createTodoFetcher("http://localhost:3002/");
});
afterAll(() => provider && provider.finalize());

it('will receive the list of current orders', async () => {
    await provider.addInteraction({
        uponReceiving: 'a request for todos',
        withRequest: {
            path: '/todos',
            method: 'GET',
        },
        willRespondWith: {
            body: Matchers.eachLike({
                id: Matchers.uuid(),
                description: "my todo description"
            }),
            status: 200,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }
    });
    const result = await fetchTodos();
    expect(result).toHaveLength(1);
})
