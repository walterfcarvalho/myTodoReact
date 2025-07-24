export const get = (key: string) => {
  let name = key + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export const set = (key: string, value: string) => {
  const d = new Date();

  d.setTime(d.getTime() + (7 * (24 * 60 * 60 * 1000)));

  const expires = value ?d.toUTCString() :`Thu Jan 01 1970 01:00:00 GMT`

  const myCookie = `${key}=${value}; expires=${expires}; path=/`

  console.log(`cooke to save ${myCookie}`);

  document.cookie = myCookie;
}

export default {}
