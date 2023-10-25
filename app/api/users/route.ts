import excuteQuery from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res?: any) {
  const data = await req.json();
  try {
    if (req.method !== "POST") {
      res.status(405).send({ message: "Only POST requests allowed" });
      return;
    }

    const result = await excuteQuery({
      query: "INSERT INTO Persons(PersonID,LastName) VALUES(?,?)",
      values: [data?.body, "thu"],
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
}

export async function GET() {
  return Response.json({ name: "hello" });
}
