export default function cn() {
  let ret = "";
  for (let i = 0, len = arguments.length; i < len; i++) {
    ret += arguments[i] + " ";
  }

  return ret.trimEnd();
}
