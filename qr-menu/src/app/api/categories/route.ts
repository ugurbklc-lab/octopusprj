import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, restaurantId } = body;

    if (!name || !restaurantId) {
      return NextResponse.json(
        { error: "Kategori adı ve restaurantId zorunlu." },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        restaurantId: Number(restaurantId),
      },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("CATEGORY POST ERROR:", error);

    return NextResponse.json(
      { error: "Kategori oluşturulamadı." },
      { status: 500 }
    );
  }
}