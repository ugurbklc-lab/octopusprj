import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const restaurants = await prisma.restaurant.findMany({
    orderBy: { id: "desc" },
  });

  return NextResponse.json(restaurants);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, slug, description } = body;

  if (!name || !slug) {
    return NextResponse.json(
      { error: "Name ve slug zorunlu" },
      { status: 400 }
    );
  }

  try {
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
        slug,
        description,
      },
    });

    return NextResponse.json(restaurant, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Slug zaten kayıtlı olabilir" },
      { status: 400 }
    );
  }
}