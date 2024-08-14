#!/usr/bin/env python3
"""
type-annotated function to_kv.
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with a string and the square of a number.

    Args:
        k (str): A string.
        v (Union[int, float]): An integer or floating point number.

    Returns:
        Tuple[str, float]: A tuple where the first element is k and the second element is the square of v.
    """
    return (k, float(v**2))
