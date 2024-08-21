#!/usr/bin/env python3
"""
Defines an asynchronous comprehension.
"""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers from the async generator.

    Returns:
        List[float]: A list of 10 random numbers.
    """
    result = []

    # agarra los valores generados async
    async for number in async_generator():
        result.append(number)

    return result
