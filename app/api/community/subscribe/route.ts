import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { CommunitySubscriptionValidator } from "@/lib/validators/community";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { communityId } = CommunitySubscriptionValidator.parse(body);

    const subscriptionExists = await db.subscription.findFirst({
      where: {
        communityId: communityId,
        userId: session.user.id,
      },
    });

    if (subscriptionExists) {
      return new NextResponse("You are already subscribed to this Community.", {
        status: 400,
      });
    }

    await db.subscription.create({
      data: {
        communityId,
        userId: session.user.id,
      },
    });
    return new NextResponse(communityId);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }

    return new Response("Could not subscribe, please try again later", {
      status: 500,
    });
  }
}
