#!/usr/bin/env python3
"""
type-annotated function sum_list.
"""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Sums a list of floating point numbers.

    Args:
        input_list (List[float]): A list of floating point numbers.

    Returns:
        float: The sum of the list.
    """
    return sum(input_list)
