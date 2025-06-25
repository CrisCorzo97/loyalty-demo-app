import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import { PrismaClient, UserType } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    const body = await req.json();
    const { clerkId, email, userType } = body;
    if (!clerkId || !email || !userType) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }
    // Actualizar el publicMetadata del usuario en clerk
    await axios.patch(
      `https://api.clerk.com/v1/users/${userId}`,
      {
        public_metadata: {
          userType,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    );
    // Verificar si el usuario ya existe
    let user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId,
          email,
          userType: userType as UserType,
        },
      });
    } else {
      user = await prisma.user.update({
        where: { clerkId },
        data: { userType: userType as UserType },
      });
    }
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error en el registro' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
