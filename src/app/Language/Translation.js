import lang from '../../resources/api/Language';

// Do not inline, this is m@g!c
const lng = lang;
let translations = [];

import(`../../language/${lng}/${lng}.json`).then(
  (r) => (translations = r.default)
);

class Translation {
  static t = (str, def = str) =>
    typeof translations[str] === 'undefined' ? def : translations[str];

  static plural = (str, number, def = str) =>
    (this.t(`${str}_${parseInt(number)}`, null) || this.t(str, def)).replace(
      /%d/g,
      parseInt(number)
    );

  static bind = (str, values, def = str) => {
    if (typeof values === 'object') {
      let msg = this.t(str, def);
      for (let [key, value] of Object.entries(values))
        msg = msg.replace(`{${key}}`, value);
      return msg;
    }
    return def;
  };
}

export default Translation;
