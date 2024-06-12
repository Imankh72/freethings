import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import httpService from "@/app/services/http";

export const GET = async (req: NextRequest) => {
  const userToken = cookies().get("user_token");
  if (!userToken) return NextResponse.json({ status: 401 });

  try {
    const { data } = await httpService("/v1/user/userprofile", {
      headers: { Authorization: `${userToken.value}` },
    });

    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
};
