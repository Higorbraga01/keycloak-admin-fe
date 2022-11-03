export function setSession(str: string, obj: any) {
  sessionStorage.setItem(str, JSON.stringify(obj));
}
export function getSession(str: string) {
  return JSON.parse(sessionStorage.getItem(str));
}
