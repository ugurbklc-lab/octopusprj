import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, image, categoryId } = body;

    if (!name || !price || !categoryId) {
      return NextResponse.json(
        { error: "Ürün adı, fiyat ve categoryId zorunlu." },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: Number(price),
        image,
        categoryId: Number(categoryId),
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("PRODUCT POST ERROR:", error);

    return NextResponse.json(
      { error: "Ürün oluşturulamadı." },
      { status: 500 }
    );
  }
}