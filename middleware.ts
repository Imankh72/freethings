import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  const userToken = req.cookies.get("user_token")?.value;

  if (!userToken && req.nextUrl.pathname === "/add-item") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};
