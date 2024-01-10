type EnumValueType = string | number | symbol;
type EnumType = { [key in EnumValueType]: EnumValueType };
type ValueOf<T> = T[keyof T];

export type EnumObject<T> = {
  name: string;
  value: ValueOf<T>;
};

export class Enum {
  static getValues<T>(enumType: EnumType & T): Array<ValueOf<T>> {
    return (
      // get enum keys and values
      Object.values(enumType)
        // Half of enum items are keys and half are values so we need to filter by index
        .filter((e, index, array) => index < array.length / 2)
        // finally map items to enum
        .map((e) => enumType[e as keyof T]) as Array<ValueOf<T>>
    );
  }

  static getNames<T>(enumType: EnumType & T): string[] {
    return Object.keys(enumType).filter((key) => Number.isNaN(Number(key)));
  }

  static get<T>(enumType: EnumType & T): Array<EnumObject<T>> {
    const values = Object.values(enumType);
    const enumObjects = new Array<EnumObject<T>>();
    for (let i = 0; i < values.length / 2; i++) {
      enumObjects.push({
        name: values[i] as string,
        value: enumType[values[i] as keyof T] as ValueOf<T>,
      });
    }
    return enumObjects;
  }
}
