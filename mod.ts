import { Drash } from "./deps.ts";

class HomeResource extends Drash.Resource {
	public paths = ["/"];
	
	public GET(request: Drash.Request, response: Drash.Response): void {
		return response.json({ hello: "world" });
	}
}

const server = new Drash.Server({
	protocol: "http",
	hostname: Deno.env.get("DENO_DEPLOYMENT_ID") ? "" : "localhost",
	port: 3000,
	resources: [
		HomeResource,
	],
});

server.run();

console.log(`Server running at ${server.address}.`);