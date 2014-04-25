using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReadOut
{
	 public static class ArgumentValidator
	{

			public static void ThrowIfNullOrEmpty(string value, string parameterName)
			{
				if (string.IsNullOrWhiteSpace(value))
					throw new ArgumentException(parameterName + " cannot be null/empty", parameterName);
			}


            public static void ThrowIfNull(object value, string parameterName)
            {
                if (value == null)
                    throw new ArgumentNullException(parameterName);
            }

			public static void ThrowIfNotPositive(int value, string parameterName)
			{
				if (value <= 0)
					throw new ArgumentException(parameterName + " cannot be 0 or less: " + value, parameterName);
			}

			public static void ThrowIfLessThan(int value, int min, string parameterName)
			{
				if (value < min)
					throw new ArgumentException(string.Format("{0} cannot be less than {1}: value={2}", parameterName, min, value), parameterName);
			}

	}
}
