function BindTheClass(
  constrctor: any,
  methodName: string,
  desciption: PropertyDescriptor
) {
  console.log({ constrctor, methodName, desciption });

  const oldMethod = desciption.value;
  const modifiedMethod = {
    configurable: true,
    enumerable: false,
    get() {
      return oldMethod.bind(this);
    },
  };
  return modifiedMethod;
}

class Logger {
  message = "Button has been clicked";

  @BindTheClass
  logToConsole() {
    console.log(this.message);
  }
}

const logger = new Logger();

logger.logToConsole();

document.getElementById("btn")?.addEventListener("click", logger.logToConsole);
