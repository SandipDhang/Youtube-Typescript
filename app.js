function throwErr(msg, code) {
  throw { msg: msg, code: code };
}
throwErr("SERVER_ERROR", 500);
