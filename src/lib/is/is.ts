import { Entries, fromEntries, merge, objectEntries } from '@/lib/object';
import { IsNotType, Negate } from '@/lib/types';

import { assertMisc, assertNodeEnv, assertType } from './is.helpers';
import { Assertions, IsPredicate } from './is.types';

export function invertTypePredicate<Fn extends IsPredicate>(predicate: Fn) {
  const invertedFunction = (value: any) => {
    const initialValue = predicate(value);
    const result = !initialValue;

    return result as Negate<ReturnType<Fn>>;
  };

  return invertedFunction;
}

type IsNot = { not: Assertions };

function makeIsNot(): IsNot {
  let entries: Entries<Assertions> = objectEntries(assertType);

  entries = entries.map(([typeName, predicate]) => {
    const negatedFn = <V = any>(...args: Parameters<typeof predicate>): IsNotType<V, IsPredicate> => {
      const res = !predicate(...args);

      return res as IsNotType<V, IsPredicate>;
    };
    return [typeName, negatedFn];
  });

  const notObject: Assertions = fromEntries(entries);

  const object: IsNot = {
    not: notObject,
  };

  return object;
}

const isNot = makeIsNot();

export const is = merge(assertNodeEnv, assertType, isNot, assertMisc);
