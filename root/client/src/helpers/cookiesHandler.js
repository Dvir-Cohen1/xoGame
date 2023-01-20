import Cookies from "universal-cookie";

export function setCookies(name, value) {
     console.log("called")
  const cookies = new Cookies();
  return cookies.set(name, value, { path: "/" });
}
export function getCookies(name) {
  return Cookies.get(name);
}
export function removeCookies(name) {
  return Cookies.remove(name);
}
