import fs from "fs";
import path from "path";

export async function GET(request: Request) {
    const filePath = path.join(process.cwd(), "src/lib/abi.json");
    const fileContents = fs.readFileSync(filePath, "utf8");

    const abi = JSON.parse(fileContents);

    return Response.json({ abi });
}
