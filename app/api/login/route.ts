import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import httpService from "@/app/services/http";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  try {
    const { data } = await httpService.post("/v1/user/authentication", body);

    cookies().set("user_token", data.data.token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    });

    cookies().set("device_id", body.deviceId, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    });

    return NextResponse.json({
      status: 200,
      data: data.data,
    });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
};
