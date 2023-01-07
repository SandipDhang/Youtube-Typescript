function throwErr(msg: string, code: number): never {
  throw { msg, code };
}

throwErr("SERVER_ERROR", 500);
