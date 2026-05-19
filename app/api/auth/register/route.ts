import { NextResponse } from "next/server";
import { prismadb } from "@/lib/db";
import bcrypt from "bcrypt";

/* =========================
   REGISTER API
========================= */

export async function POST(request: Request) {
  try {
    console.log("Received register request");

    const body = await request.json();
    const { email, username, password } = body;

    /* ---------- VALIDATION ---------- */

    if (!email || !username || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------- CHECK USER ---------- */

    const existingUser = await prismadb.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email or username already exists" },
        { status: 409 }
      );
    }

    /* ---------- HASH PASSWORD ---------- */

    const hashedPassword = await bcrypt.hash(password, 12);

    /* ---------- CREATE USER ---------- */

    const user = await prismadb.user.create({
      data: {
        email,
        username,
        hashedPassword,
        photo: "",
      },
    });

    console.log("User created:", user.id);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}