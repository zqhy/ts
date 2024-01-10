type EnumValueType = string | number | symbol;
type EnumType = { [key in EnumValueType]: EnumValueType };
type ValueOf<T> = T[keyof T];
type EnumItems<T> = Array<ValueOf<T>>;

export class Enum {
  static getValues<T>(enumCLass: EnumType & T): EnumItems<T> {
    return (
      // get enum keys and values
      Object.values(enumCLass)
        // Half of enum items are keys and half are values so we need to filter by index
        .filter((e, index, array) => index < array.length / 2)
        // finally map items to enum
        .map((e) => enumCLass[e as keyof T]) as EnumItems<T>
    );
  }

  static getNames<T>(enumCLass: EnumType & T): string[] {
    return Object.keys(enumCLass).filter((key) => Number.isNaN(Number(key)));
  }
}
