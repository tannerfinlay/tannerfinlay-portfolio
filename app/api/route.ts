export const runtime = "edge";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const bucket = process.env.RESUME_BUCKET as any;

    if (!bucket) {
      return new NextResponse("Bucket missing", { status: 500 });
    }
    const response = await bucket.get("Finlay_Matthew_Resume.pdf");

    if (!response) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const headers = new Headers();
    response.writeHttpMetadata(headers);
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", 'inline; filename="Resume.pdf"');
    headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

    return new Response(response.body, { headers });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
