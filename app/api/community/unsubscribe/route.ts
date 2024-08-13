import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { CommunitySubscriptionValidator } from "@/lib/validators/community";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { communityId } = CommunitySubscriptionValidator.parse(body);

    // check if user has already subscribed or not
    const communityExists = await db.subscription.findFirst({
      where: {
        communityId,
        userId: session.user.id,
      },
    });

    if (!communityExists) {
      return new Response(
        "You've not been subscribed to this Community, yet.",
        {
          status: 400,
        }
      );
    }

    // create subreddit and associate it with the user
    await db.subscription.delete({
      where: {
        userId_communityId: {
          communityId,
          userId: session.user.id,
        },
      },
    });

    return new Response(communityId);
  } catch (error) {
    error;
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not unsubscribe from Community at this time. Please try later",
      { status: 500 }
    );
  }
}
