import { redirect } from "next/navigation";

/**
 * 根路径不承载内容，统一进入当前默认版本 v1。
 */
export default function Home() {
  redirect("/v1");
}
