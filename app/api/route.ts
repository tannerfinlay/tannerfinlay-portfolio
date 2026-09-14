import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://tannerfinlay.dev/Finlay_Matthew_Resume.pdf",
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return new NextResponse("Resume file not found", { status: 404 });
    }

    const fileBuffer = await response.arrayBuffer();

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Finlay_Matthew_Resume.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
