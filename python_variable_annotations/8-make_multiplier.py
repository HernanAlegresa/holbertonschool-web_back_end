#!/usr/bin/env python3
"""
type-annotated function make_multiplier.
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by a given multiplier.

    Args:
        multiplier (float): The multiplier.

    Returns:
        Callable[[float], float]: A function that multiplies
        a float by the multiplier.
    """
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
